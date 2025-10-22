"use client";

import { useCallback } from "react";
import { Input } from "../components/input";
import { Button } from "../components";
import { DataFields } from "./contribution/DataFields";
import { useDialog } from "@/app/_providers/dialog/context";
import { ContributeDialog } from "../components/dialogs/contribute-dialog";
import { useContributeToCtznd } from "@/app/_lib/hooks";
import Link from "next/link";
import { calculateTokenPrice } from "../utils/calculateTokenPrice";
import { useTotalInvestedUsdcCtznd } from "@/app/_lib/queries";

const getErrorMessage = (
	amount: number,
	maxAmount: number,
	minAmount: number,
	error: any,
) => {
	if (amount < 0) {
		return "The amount must be greater than 0";
	}

	// 0 is the default/initial value
	if (amount > 0 && amount < minAmount) {
		return "The amount is below the minimum contribution";
	}

	if (amount > maxAmount) {
		return "The amount exceeds the maximum balance";
	}

	if (error?.shortMessage) {
		return error.shortMessage;
	}

	if (error) {
		return error?.message || "An error occurred";
	}

	return null;
};

type TProjectContribution = {
	userAddress: `0x${string}`;
};

export const ProjectContribution = ({ userAddress }: TProjectContribution) => {
	const { open } = useDialog();
	const {
		maxAmount,
		minAmount,
		amount,
		amountInWei,
		tokensToBuyInSzabo,
		tokensToBuyInWei,
		tokensToBuy,
		error,
		setAmount,
	} = useContributeToCtznd();
	const totalContributions = useTotalInvestedUsdcCtznd();

	return <div className="flex flex-col"></div>;
};
