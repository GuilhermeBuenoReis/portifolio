import type { LucideIcon } from "lucide-react";

export type HeroTitleSegment = {
	text: string;
	highlight?: boolean;
};

export type VisionItem = {
	icon: LucideIcon;
	title: string;
	description: string;
};

export type FocusCard = {
	tag: string;
	title: string;
	description: string;
};
