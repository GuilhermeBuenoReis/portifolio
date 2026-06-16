import type { LucideIcon } from "lucide-react";

export type ContactInfo = {
	icon: LucideIcon;
	label: string;
	value: string;
	href: string;
};

export type SocialLink = {
	icon: LucideIcon;
	label: string;
	href: string;
};

export type FormField = {
	name: "name" | "email" | "subject" | "message";
	label: string;
	placeholder: string;
	type: "text" | "email";
	multiline?: boolean;
};
