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
	featured?: boolean;
};
