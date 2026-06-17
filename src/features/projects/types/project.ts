import type { ProjectPreview } from "#/components/ui/project-preview-mockups";

export type ProjectCategory = "Trabalho" | "Projeto Pessoal" | "Faculdade";

export type ProjectRepo = {
	label: string;
	url: string;
};

export type Project = {
	id: string;
	name: string;
	category: ProjectCategory;
	description: string;
	tags: string[];
	repos: ProjectRepo[];
	bannerGradient: string;
	preview?: ProjectPreview;
	featured?: boolean;
};
