"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const initUser = {
	avatar_url: "",
	full_name: "",
	email: "",
	id: "",
	payment_method: null,
	balance: 0
};

export default function useUser() {
	return useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const supabase = supabaseBrowser();
			const { data } = await supabase.auth.getSession();
			if (data.session?.user) {
				// fetch user information profil	e
				const { data: user } = await supabase
					.from("users")
					.select("*")
					.eq("id", data.session.user.id)
					.single();

				console.log(user);
				return user;
			}
			return initUser;
		},
	});
}
