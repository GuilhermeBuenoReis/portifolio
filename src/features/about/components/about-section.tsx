import { User } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";

const metrics = [
	{ value: "2+", label: "ANOS DE CÓDIGO" },
	{ value: "5+", label: "PROJETOS ENTREGUES" },
] as const;

export function AboutSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
						className={cn(
							"flex flex-col gap-6 rounded-xl p-8",
							"border border-border bg-surface",
							"transition-colors duration-200",
							"hover:border-(--primary-border)",
							"[box-shadow:var(--shadow-card)]",
						)}
					>
						<span className="font-serif text-5xl leading-none text-primary-hover select-none">
							"
						</span>

						<p className="text-lg leading-relaxed text-fg md:text-xl">
							"Sou Guilherme Reis, desenvolvedor fullstack e estudante de
							Engenharia de Software. Gosto de transformar ideias em produtos
							reais, com interfaces limpas, APIs bem estruturadas e uma
							arquitetura que não vira um incêndio depois de duas semanas."
						</p>

						<div className="h-px bg-border" />

						<div className="flex items-center gap-4">
							<div
								className={cn(
									"flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
									"bg-primary/15 text-primary",
								)}
							>
								<User size={18} />
							</div>
							<div className="flex flex-col gap-0.5">
								<span className="text-sm font-semibold text-fg">
									Guilherme Reis
								</span>
								<span className="text-xs text-fg-muted">
									Software Engineering Student
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
						className="flex flex-col justify-center gap-6"
					>
						<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
							Minha Visão
						</h2>

						<div className="flex flex-col gap-5">
							<p className="text-sm leading-relaxed text-fg-secondary">
								Meu foco está em criar sistemas úteis, bonitos e fáceis de
								manter. Acredito que o código é apenas uma ferramenta para
								resolver problemas reais e gerar valor para as pessoas.
							</p>
							<p className="text-sm leading-relaxed text-fg-secondary">
								Trabalho incansavelmente para manter o equilíbrio entre a
								agilidade da entrega e a sustentabilidade do código a longo
								prazo, utilizando padrões de projeto e testes automatizados como
								aliados.
							</p>
						</div>

						<div className="flex gap-10 pt-2">
							{metrics.map((metric) => (
								<div key={metric.label} className="flex flex-col gap-1">
									<span className="text-2xl font-bold text-fg">
										{metric.value}
									</span>
									<span className="text-[0.65rem] font-semibold uppercase tracking-widest text-fg-muted">
										{metric.label}
									</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
