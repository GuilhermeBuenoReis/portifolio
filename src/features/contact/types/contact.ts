import type { LucideIcon } from "lucide-react";

export type ContactInfo = {
	icon: LucideIcon;
	label: string;
	value: string;
	href: string;
};

export type SocialLink = {
	label: string;
	href: string;
} & ({ skill: string } | { icon: LucideIcon } | { whatsapp: true });
