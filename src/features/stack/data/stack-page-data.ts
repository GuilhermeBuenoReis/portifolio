import {
	Box,
	Code2,
	Database,
	Figma,
	GitBranch,
	Send,
	Terminal,
	Wrench,
} from "lucide-react";
import type {
	BackendCardData,
	DailyToolsCardData,
	FrontendCardData,
	InfraCardData,
	MethodologiesCardData,
} from "#/features/stack/types/stack-page";

export const heroContent = {
	eyebrow: "Arquitetando o futuro com precisão técnica.",
	description:
		"Uma visão aprofundada sobre as ferramentas, linguagens e metodologias que compõem meu ecossistema de desenvolvimento, focada em performance, escalabilidade e manutenibilidade.",
} as const;

export const frontendCard: FrontendCardData = {
	title: "Frontend Engineering",
	subtitle: "Interface & User Experience",
	skills: [
		{ label: "React / Next.js", level: 95 },
		{ label: "TypeScript / JavaScript", level: 92 },
		{ label: "Tailwind CSS / shadcn/ui", level: 98 },
	],
	description:
		"Foco em interfaces declarativas, componentes reutilizáveis, acessibilidade, performance e experiências responsivas com boa experiência de usuário.",
	badges: [
		"React Hook Form",
		"Zod",
		"Zustand",
		"React Query",
		"Motion",
		"Radix UI",
		"Lucide React",
		"Recharts",
		"Axios",
		"Orval",
	],
};

export const backendCard: BackendCardData = {
	title: "Backend",
	items: [
		"Node.js / Fastify",
		"Laravel / Inertia.js",
		"PostgreSQL / Drizzle ORM",
		"Zod / JWT",
		"OpenAPI / Scalar",
		"Cloudinary",
	],
	description:
		"Construção de APIs robustas, modulares e escaláveis, priorizando segurança, validação tipada, organização em camadas e manutenção a longo prazo.",
};

export const methodologiesCard: MethodologiesCardData = {
	title: "Metodologias & Qualidade",
	blocks: [
		{ title: "Architecture", description: "Clean Architecture & DDD" },
		{ title: "Testing", description: "Vitest, Playwright & Cypress" },
		{ title: "Principles", description: "SOLID, DRY & boas práticas" },
		{
			title: "API Design",
			description: "REST APIs, contratos tipados e documentação",
		},
		{ title: "Validation", description: "Zod, schemas e segurança de entrada" },
		{ title: "Automation", description: "Biome, GitHub Actions e CI/CD" },
	],
};

export const infraCard: InfraCardData = {
	title: "Infra & DevOps",
	badges: [
		"Docker",
		"GitHub Actions",
		"Vercel",
		"PostgreSQL",
		"Linux",
		"Cloudinary",
		"AbacatePay",
		"OpenAPI",
		"Scalar",
	],
	command: "$ deploy --environment production --auto-scaling=true",
	description:
		"Ambientes organizados, integração contínua, documentação de APIs e estrutura preparada para evolução, deploy e manutenção.",
};

export const dailyToolsCard: DailyToolsCardData = {
	title: "Ferramentas do Dia a Dia",
	description: "A produtividade nasce de um workflow bem refinado.",
	tools: [
		{ name: "Figma", icon: Figma },
		{ name: "VS Code", icon: Code2 },
		{ name: "Linux / Zsh", icon: Terminal },
		{ name: "Git / GitHub", icon: GitBranch },
		{ name: "Docker", icon: Box },
		{ name: "Biome", icon: Wrench },
		{ name: "Postman / Insomnia", icon: Send },
		{ name: "Drizzle Studio", icon: Database },
	],
};
