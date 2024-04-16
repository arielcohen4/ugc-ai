"use client";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Checkout from "./Checkout";
import useUser from "@/app/hook/useUser";

export default function Price() {
	const { data: user, isLoading } = useUser();
	const prices = [
		{
			title: "Hobby",
			description: "Load 25$ balance and get 10 free generations",
			benefits: [
				"Approximately 2 UGC videos",
				"10 Free Generations",
				"24/7 support",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 10,
			priceId: "price_1P5rgqGUKbrQ1WqShik6fqJY",
		},
		{
			title: "Pro",
			description: "Load 50$ balance and get 25 free generations",
			benefits: [
				"Approximately 5 UGC videos",
				"25 Free Generations",
				"24/7 support",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 50,
			priceId: "price_1P5rjDGUKbrQ1WqSm8GFwtRp",
		},
		{
			title: "Master",
			escription: "Load 100$ balance and get 45 free generations",
			benefits: [
				"Approximately 10 UGC videos",
				"45 Free Generations",
				"24/7 support",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 100,
			priceId: "price_1P5rkPGUKbrQ1WqSgW7KWOJi",
		},
	];
	if (isLoading) {
		return <></>;
	}
	if (user?.subscription?.customer_id) {
		return <></>;
	}

	return (
		<div>
			<div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
				{prices.map((price, index) => {
					const isPopular = index === 1;

					return (
						<div
							key={index}
							className={cn(" border rounded-md p-5 space-y-5", {
								"ring-2 ring-green-500": isPopular,
							})}
						>
							<div className="space-y-3">
								<h1 className="text-2xl font-bold">
									{price.title}
								</h1>
								<h1 className="text-3xl font-bold">
									{price.amount}$
								</h1>
								<p className="text-sm text-gray-400">
									{price.description}
								</p>
							</div>
							<div className="space-y-3">
								{price.benefits.map((benefit, index) => {
									return (
										<div
											key={index}
											className="flex items-center gap-2"
										>
											<CheckCircle2 />
											<h1 className="text-sm text-gray-400">
												{benefit}
											</h1>
										</div>
									);
								})}
							</div>
							<Checkout priceId={price.priceId} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
