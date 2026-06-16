import type { Project } from "#/features/projects/types/project";

export const projects: Project[] = [
	{
		id: "onec-platform",
		name: "Onec Platform",
		category: "Trabalho",
		description:
			"Sistema completo de CRM e gerenciamento empresarial com foco em performance e experiência do usuário.",
		tags: ["Fastify", "Drizzle ORM", "React", "TypeScript"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/onec-backend",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-900",
		featured: true,
	},
	{
		id: "buenos-cakes",
		name: "Buenos Cakes",
		category: "Trabalho",
		description:
			"Sistema de pedidos otimizado com fluxos de checkout simplificados e gerenciamento de inventário em tempo real.",
		tags: ["Next.js", "Tailwind CSS", "Fastify", "PostgreSQL"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/buenos_cakes_web",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-pink-950 via-purple-950 to-fuchsia-900",
		featured: true,
	},
	{
		id: "velan",
		name: "Velan",
		category: "Trabalho",
		description:
			"Plataforma robusta para gestão de saúde, integrando prontuários eletrônicos e agendamentos inteligentes.",
		tags: ["Laravel", "React", "Inertia", "TypeScript"],
		repos: [
			{ label: "Código", url: "https://github.com/GuilhermeBuenoReis/Velan" },
		],
		bannerGradient:
			"bg-gradient-to-br from-cyan-950 via-slate-900 to-purple-950",
		featured: true,
	},
	{
		id: "velan-mobile",
		name: "Velan Mobile",
		category: "Trabalho",
		description:
			"Extensão mobile para pacientes, focada em acessibilidade e notificações de acompanhamento médico.",
		tags: ["Flutter", "Dart", "API REST"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/velan-mobile",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-amber-950 via-purple-950 to-violet-900",
	},
	{
		id: "therapy",
		name: "Therapy",
		category: "Projeto Pessoal",
		description:
			"Plataforma para gestão de atendimentos terapêuticos, com agendamentos, autenticação, pagamentos via Stripe e API documentada com Scalar.",
		tags: [
			"Fastify",
			"TypeScript",
			"Drizzle ORM",
			"PostgreSQL",
			"React",
			"TanStack Router",
			"Stripe",
			"Zod",
		],
		repos: [
			{
				label: "API",
				url: "https://github.com/GuilhermeBuenoReis/therapy-api",
			},
			{
				label: "Web",
				url: "https://github.com/GuilhermeBuenoReis/therapy-web",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-emerald-950 via-purple-950 to-violet-900",
		featured: true,
	},
	{
		id: "chronicle",
		name: "Chronicle",
		category: "Projeto Pessoal",
		description:
			"Aplicação para registro e organização de anotações, com upload de mídia, autenticação e interface moderna construída com Radix UI.",
		tags: [
			"Fastify",
			"TypeScript",
			"Drizzle ORM",
			"PostgreSQL",
			"React",
			"Zustand",
			"Orval",
			"Cloudinary",
		],
		repos: [
			{
				label: "Back-end",
				url: "https://github.com/GuilhermeBuenoReis/Chronicle-back-end",
			},
			{
				label: "Front-end",
				url: "https://github.com/GuilhermeBuenoReis/Chronicle-front-end",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-900",
		featured: true,
	},
	{
		id: "forum-api",
		name: "Forum API",
		category: "Projeto Pessoal",
		description:
			"API de fórum com perguntas, respostas e comentários, aplicando Clean Architecture, DDD e testes automatizados.",
		tags: [
			"NestJS",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"JWT",
			"Vitest",
			"DDD",
		],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/forum-api",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-violet-950 via-purple-950 to-fuchsia-900",
		featured: true,
	},
	{
		id: "guairaca-cicd",
		name: "Guairacá CI/CD",
		category: "Faculdade",
		description:
			"Projeto de estudo de integração e entrega contínua, com pipelines automatizados de build e deploy.",
		tags: ["CI/CD", "GitHub Actions", "HTML"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/guairaca-cicd",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-sky-950 via-slate-900 to-purple-950",
	},
	{
		id: "cypress-faculdade",
		name: "Cypress E2E",
		category: "Faculdade",
		description:
			"Suíte de testes end-to-end automatizados com Cypress para validação de fluxos críticos da aplicação.",
		tags: ["Cypress", "JavaScript", "Testes E2E"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/cypress-faculdade",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-green-950 via-slate-900 to-violet-950",
	},
	{
		id: "paradigmas-prog",
		name: "Paradigmas de Programação",
		category: "Faculdade",
		description:
			"Projeto da disciplina de Paradigmas de Linguagem de Programação, explorando diferentes paradigmas e suas aplicações.",
		tags: ["Laravel", "PHP", "Blade"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/paradigmas-prog-20252-Guilherme-bueno-dos-reis",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-rose-950 via-slate-900 to-purple-950",
	},
	{
		id: "laravel-faculdade",
		name: "Laravel Faculdade",
		category: "Faculdade",
		description:
			"Projeto acadêmico desenvolvido com Laravel para estudo de desenvolvimento web em PHP e arquitetura MVC.",
		tags: ["Laravel", "PHP", "Blade"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/Laravel-faculdade",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-red-950 via-slate-900 to-purple-950",
	},
	{
		id: "financing-app-flutter",
		name: "Financing App",
		category: "Faculdade",
		description:
			"Aplicativo mobile de controle financeiro desenvolvido com Flutter, com foco em organização de despesas e receitas.",
		tags: ["Flutter", "Dart", "Mobile"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/financing_app_flutter",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-900",
	},
	{
		id: "flutter-faculdade",
		name: "Flutter Faculdade",
		category: "Faculdade",
		description:
			"Projetos e exercícios de desenvolvimento mobile com Flutter realizados ao longo da graduação.",
		tags: ["Flutter", "Dart", "Mobile"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/flutter_faculdade",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950",
	},
	{
		id: "barber-pro-deploy",
		name: "Barber Pro",
		category: "Faculdade",
		description:
			"Projeto de barbearia com foco em publicação e deploy de aplicações web, trabalhando interface e responsividade.",
		tags: ["HTML", "CSS", "Deploy"],
		repos: [
			{
				label: "Código",
				url: "https://github.com/GuilhermeBuenoReis/barber-pro-deploy",
			},
		],
		bannerGradient:
			"bg-gradient-to-br from-amber-950 via-slate-900 to-violet-900",
	},
];
