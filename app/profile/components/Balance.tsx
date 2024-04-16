"use client";
import useUser from "@/app/hook/useUser";
import { Button } from "@/components/ui/button";
import { checkout } from "@/lib/actions/stripe";
import React from "react";

export default function Subscription() {
	const { data: user, isLoading } = useUser();
	if (isLoading) {
		return <></>;
	}

	const handleBilling = async () => {
		const data = JSON.parse(
			await checkout(user?.email as string, "30")
		);
		window.location.href = data.url;
	};
	return (
		<div className=" space-y-5">
			<h1 className=" text-3xl font-bold">Hi, {user?.full_name}</h1>
			<p>
					Your Balance is now{`${user?.balance}`}
				</p>
				<Button onClick={handleBilling}>Load More</Button>
		</div>
	);
}
