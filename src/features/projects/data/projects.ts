import type { Project } from "#/features/projects/types/project";

export const projects: Project[] = [
	{
		id: "onec-platform",
		name: "Onec Platform",
		category: "Fullstack",
		description:
			"Sistema completo de CRM e gerenciamento empresarial com foco em performance e experiência do usuário.",
		tags: ["Fastify", "Drizzle ORM", "React", "TypeScript"],
		github: "https://github.com/GuilhermeBuenoReis/onec-backend",
		bannerGradient:
			"bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-900",
	},
	{
		id: "buenos-cakes",
		name: "Buenos Cakes",
		category: "E-commerce",
		description:
			"Sistema de pedidos otimizado com fluxos de checkout simplificados e gerenciamento de inventário em tempo real.",
		tags: ["Next.js", "Tailwind CSS", "Fastify", "PostgreSQL"],
		github: "https://github.com/GuilhermeBuenoReis/buenos_cakes_web",
		bannerGradient:
			"bg-gradient-to-br from-pink-950 via-purple-950 to-fuchsia-900",
	},
	{
		id: "velan",
		name: "Velan",
		category: "Health Tech",
		description:
			"Plataforma robusta para gestão de saúde, integrando prontuários eletrônicos e agendamentos inteligentes.",
		tags: ["Laravel", "React", "Inertia", "TypeScript"],
		github: "https://github.com/GuilhermeBuenoReis/Velan",
		bannerGradient:
			"bg-gradient-to-br from-cyan-950 via-slate-900 to-purple-950",
	},
	{
		id: "velan-mobile",
		name: "Velan Mobile",
		category: "Mobile App",
		description:
			"Extensão mobile para pacientes, focada em acessibilidade e notificações de acompanhamento médico.",
		tags: ["Flutter", "Dart", "API REST"],
		github: "https://github.com/GuilhermeBuenoReis/velan-mobile",
		bannerGradient:
			"bg-gradient-to-br from-amber-950 via-purple-950 to-violet-900",
	},
];
