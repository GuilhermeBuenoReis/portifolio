import { Layers, Sparkles, Target, Wrench } from "lucide-react";
import type {
	FocusCard,
	HeroTitleSegment,
	VisionItem,
} from "#/features/about/types/about-page";

export const heroContent = {
	eyebrow: "Guilherme Reis",
	subtitle:
		"Sou desenvolvedor fullstack e estudante de Engenharia de Software. Trabalho criando aplicações web completas, unindo frontend, backend, banco de dados, arquitetura e experiência do usuário para transformar ideias em sistemas úteis, bonitos e fáceis de manter.",
	titleSegments: [
		{ text: "Construindo " },
		{ text: "produtos reais", highlight: true },
		{ text: " com " },
		{ text: "arquitetura limpa", highlight: true },
		{ text: ", interfaces modernas e " },
		{ text: "foco em negócio", highlight: true },
		{ text: "." },
	] satisfies HeroTitleSegment[],
} as const;

export const storyContent = {
	title: "Minha história",
	paragraphs: [
		"Minha jornada como desenvolvedor não começou tentando decorar framework ou seguir moda de tecnologia. Começou com uma vontade simples: construir coisas que funcionam de verdade e resolvem problemas reais.",
		"Com o tempo, fui entendendo que uma boa aplicação não é só uma tela bonita ou uma API que responde. É o conjunto: regra de negócio bem pensada, banco organizado, interface clara, validação consistente, testes, performance e uma arquitetura que permita o projeto crescer sem virar bagunça.",
		"Hoje, meu foco está em desenvolver produtos digitais completos. Gosto de trabalhar com React, Next.js, Node.js, Fastify, PostgreSQL, Drizzle ORM, TypeScript, Tailwind CSS e boas práticas como Clean Architecture, DDD e SOLID. Para mim, código bom é aquele que entrega valor, é fácil de evoluir e não faz o próximo dev querer chorar no banho.",
	],
} as const;

export const visionContent = {
	title: "Visão de Produto",
	intro:
		"Para mim, tecnologia é meio, não fim. Minha abordagem junta engenharia, design e regra de negócio para criar sistemas que fazem sentido para quem usa e para quem mantém.",
	items: [
		{
			icon: Target,
			title: "Valor Real",
			description:
				"Construir funcionalidades que resolvem problemas concretos, reduzem trabalho manual e melhoram processos.",
		},
		{
			icon: Layers,
			title: "Arquitetura Limpa",
			description:
				"Separar responsabilidades, organizar domínio, aplicação e infraestrutura, e evitar código acoplado sem necessidade.",
		},
		{
			icon: Sparkles,
			title: "Experiência de Uso",
			description:
				"Criar interfaces claras, responsivas e acessíveis, sem sacrificar performance ou simplicidade.",
		},
		{
			icon: Wrench,
			title: "Manutenção",
			description:
				"Pensar no projeto a longo prazo, com tipagem forte, validação, testes e padrões que facilitam evolução.",
		},
	] satisfies VisionItem[],
} as const;

export const focusCards: FocusCard[] = [
	{
		tag: "01 / Produto",
		title: "Produtos reais",
		description:
			"Gosto de criar sistemas que saem do campo da ideia e viram ferramenta de trabalho: CRMs, dashboards, pedidos, agendamentos, contratos, relatórios e fluxos administrativos.",
	},
	{
		tag: "02 / Engenharia",
		title: "Arquitetura e código",
		description:
			"Tenho preferência por projetos bem estruturados, com camadas claras, TypeScript bem usado, validação com Zod, banco modelado com cuidado e APIs fáceis de consumir.",
	},
	{
		tag: "03 / Interface",
		title: "UI com propósito",
		description:
			"Não vejo interface como enfeite. Uma boa UI precisa guiar o usuário, reduzir fricção, passar confiança e deixar o sistema mais simples de entender.",
	},
];

export const philosophyContent = {
	title: "A filosofia do código invisível",
	quote:
		"O melhor software é aquele que resolve o problema sem fazer barulho. O usuário não precisa perceber a tecnologia por trás da solução; ele só precisa sentir que tudo funciona.",
	badges: [
		"Clareza",
		"Escalabilidade",
		"Simplicidade",
		"Produto",
		"Manutenção",
	],
	note: "Essa é a forma como encaro desenvolvimento: menos firula, mais intenção. Menos gambiarra bonita, mais base sólida. Menos tela feita só para impressionar, mais sistema feito para durar.",
} as const;
