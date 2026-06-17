import type {
	Certification,
	Education,
	TrajectoryItem,
} from "#/features/experience/types/trajectory";

export const trajectoryItems: TrajectoryItem[] = [
	{
		id: "onec",
		period: "2025 - Presente",
		role: "Fullstack Developer",
		company: "Onec",
		highlights: [
			"Desenvolvimento de sistemas modulares para gestão financeira e operacional.",
			"Arquitetura de APIs utilizando Node.js e TypeScript com foco em alta performance.",
			"Manutenção e expansão de interfaces modernas com React e Tailwind CSS.",
		],
	},
	{
		id: "freelancer",
		period: "2024 - Presente",
		role: "Freelancer Fullstack Developer",
		company: "Autônomo",
		highlights: [
			"Consultoria técnica para startups e negócios locais em transição digital.",
			"Criação de landing pages otimizadas para SEO e dashboards administrativos.",
			"Integração de gateways de pagamento e serviços de cloud como AWS e Vercel.",
		],
	},
	{
		id: "academico",
		period: "2022 - Presente",
		role: "Projetos Acadêmicos",
		company: "Engenharia de Software",
		highlights: [
			"Liderança de times SCRUM em projetos semestrais de software.",
			"Desenvolvimento de sistemas de gerenciamento de biblioteca e e-commerce educacional.",
			"Aplicação de padrões de design, SOLID e testes unitários.",
		],
	},
];

export const education: Education = {
	degree: "Bacharelado em Engenharia de Software",
	institution: "Instituição Superior de Ensino • 2022 - 2026 (Previsão)",
	details: [
		{ label: "Média Global", value: "9.4 / 10" },
		{ label: "Status", value: "6º Semestre" },
	],
};

export const certifications: Certification[] = [
	{
		id: "http-performance",
		name: "HTTP e Performance",
	},
	{
		id: "aprofundando-hooks",
		name: "Aprofundando em Hooks",
	},
	{
		id: "interfaces-navegacao-armazenamento-local",
		name: "Interfaces, Navegação e Armazenamento local",
	},
	{
		id: "nodejs",
		name: "Node.js",
	},
	{
		id: "fundamentos-java",
		name: "Fundamentos de Java",
	},
];
