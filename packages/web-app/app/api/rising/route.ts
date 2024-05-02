import { computeRisingTideCap } from "@/app/_server/risingTide/risingtide";
import { formatEther } from "viem/utils";

export const revalidate = 0;

BigInt.prototype.toJSON = function() {
  return this.toString();
};

export async function GET(_request: Request) {
  const risingTideCap = await computeRisingTideCap();

  return Response.json({ cap: risingTideCap, capInEther: formatEther(risingTideCap) });
}
