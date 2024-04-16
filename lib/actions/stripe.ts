"use server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK!);

export async function checkout(
	email: string,
	amount: string,
	redirectTo?: string 
) {
	const data = await stripe.checkout.sessions.create({
		success_url: redirectTo || process.env.SITE_URL,
		cancel_url: process.env.SITE_URL,
		customer_email: email,
		line_items: [{ price: "price_1P5rgqGUKbrQ1WqShik6fqJY", quantity: 1 }],
		mode: "payment",
	})
	return JSON.stringify(
		data
	);
}
export async function manageBilling(customer_id: string) {
	return JSON.stringify(
		await stripe.billingPortal.sessions.create({
			customer: customer_id,
			return_url: process.env.SITE_URL,
		})
	);
}
