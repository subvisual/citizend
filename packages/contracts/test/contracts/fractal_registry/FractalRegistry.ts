import { ethers } from "hardhat";
import { expect } from "chai";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

function bytes32(s: string): string {
  let result = `0x${s}`;
  while (result.length < 64 + 2) {
    result = result + "0";
  }
  return result;
}

const ID_42 = bytes32("42");
const ID_43 = bytes32("43");

describe("FractalRegistry", () => {
  let subject: any;

  let root: SignerWithAddress;

  let user1: SignerWithAddress;
  let user2: SignerWithAddress;

  let delegate1: SignerWithAddress;
  let delegate2: SignerWithAddress;

  beforeEach(async () => {
    [root, user1, user2, delegate1, delegate2] = await ethers.getSigners();

    const FractalRegistry = await ethers.getContractFactory("FractalRegistry");
    subject = await FractalRegistry.deploy(root.address);
  });

  describe("getFractalId", () => {
    it("is null with a fresh registry", async () => {
      expect(await subject.getFractalId(user1.address)).to.equal(bytes32(""));
    });

    it("is the fractal id with a fractal id set", async () => {
      await subject.addUserAddress(user1.address, ID_42);
    });

    it("is another fractal id", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.addUserAddress(user2.address, ID_43);

      expect(await subject.getFractalId(user1.address)).to.equal(ID_42);
    });

    it("is gone after remove", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.removeUserAddress(user1.address);

      expect(await subject.getFractalId(user1.address)).to.equal(bytes32(""));
    });
  });

  describe("user lists", () => {
    it("user starts not in list", async () => {
      await subject.addUserAddress(user1.address, ID_42);

      expect(await subject.isUserInList(ID_42, "foo_list")).to.equal(false);
    });

    it("has user in list after added", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.addUserToList(ID_42, "foo_list");

      expect(await subject.isUserInList(ID_42, "foo_list")).to.equal(true);
    });

    it("is user not in a different list after added", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.addUserToList(ID_42, "foo_list");

      expect(await subject.isUserInList(ID_42, "bat_list")).to.equal(false);
    });

    it("different user in same list", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.addUserToList(ID_42, "foo_list");

      expect(await subject.isUserInList(ID_43, "foo_list")).to.equal(false);
    });

    it("multiple users in same list", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.addUserToList(ID_42, "foo_list");

      await subject.addUserAddress(user2.address, ID_43);
      await subject.addUserToList(ID_43, "foo_list");

      expect(await subject.isUserInList(ID_42, "foo_list")).to.equal(true);
    });

    it("removes a user from a list", async () => {
      await subject.addUserAddress(user1.address, ID_42);
      await subject.addUserToList(ID_42, "foo_list");

      await subject.removeUserFromList(ID_42, "foo_list");

      expect(await subject.isUserInList(ID_42, "foo_list")).to.equal(false);
    });
  });

  describe("access control", () => {
    it("fails when adding user address from not-root", async () => {
      await expect(
        subject.connect(user1).addUserAddress(user2.address, ID_42)
      ).to.be.revertedWith("Not allowed to mutate");
    });

    it("fails when removing user address from not-root", async () => {
      await expect(
        subject.connect(user1).removeUserAddress(user2.address)
      ).to.be.revertedWith("Not allowed to mutate");
    });

    it("allows delegating to another user", async () => {
      await subject.addDelegate(delegate1.address);

      // Would throw exception if not allowed.
      await subject.connect(delegate1).addUserAddress(user2.address, ID_42);
    });

    it("still allows root after delegation", async () => {
      await subject.addDelegate(delegate1.address);

      await subject.connect(root).addUserAddress(user1.address, ID_42);
    });

    it("addUserToList requires mutate permissions", async () => {
      await subject.addUserAddress(user1.address, ID_42);

      await expect(
        subject.connect(user1).addUserToList(ID_42, "foo_list")
      ).to.be.revertedWith("Not allowed to mutate");
    });

    it("removeUserFromList requires mutate permissions", async () => {
      await subject.addUserAddress(user1.address, ID_42);

      await expect(
        subject.connect(user1).removeUserFromList(ID_42, "foo_list")
      ).to.be.revertedWith("Not allowed to mutate");
    });

    it("addDelegate requires root permissions", async () => {
      await expect(
        subject.connect(user1).addDelegate(delegate1.address)
      ).to.be.revertedWith("Must be root");
    });

    it("addDelegate disallows delegates", async () => {
      await subject.addDelegate(delegate1.address);

      await expect(
        subject.connect(delegate1).addDelegate(delegate2.address)
      ).to.be.revertedWith("Must be root");
    });

    it("removeDelegate removes mutate permissions", async () => {
      await subject.addDelegate(delegate1.address);
      await subject.removeDelegate(delegate1.address);

      await expect(
        subject.connect(delegate1).addUserAddress(user1.address, ID_42)
      ).to.be.revertedWith("Not allowed to mutate");
    });

    it("removeDelegate requires root permissions", async () => {
      await expect(
        subject.connect(user1).removeDelegate(delegate1.address)
      ).to.be.revertedWith("Not allowed to remove address");
    });

    it("removeDelegate allows an address to remove itself", async () => {
      await subject.addDelegate(delegate1.address);

      await subject.connect(delegate1).removeDelegate(delegate1.address);
    });
  });
});
