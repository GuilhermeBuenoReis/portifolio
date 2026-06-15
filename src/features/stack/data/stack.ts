import type { StackCategory } from "#/features/stack/types/stack";

export const stackCategories: StackCategory[] = [
	{
		id: "frontend",
		label: "Frontend",
		technologies: ["React", "Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "backend",
		label: "Backend",
		technologies: ["Node.js", "Fastify", "PHP Laravel", "REST API"],
	},
	{
		id: "infra",
		label: "Banco e Infra",
		technologies: ["PostgreSQL", "Drizzle ORM", "Docker", "Vercel"],
	},
	{
		id: "architecture",
		label: "Arquitetura",
		technologies: ["Clean Arch", "DDD", "SOLID", "Jest"],
	},
];
