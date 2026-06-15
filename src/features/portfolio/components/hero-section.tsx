import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";

const techTags = [
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"Fastify",
	"PostgreSQL",
	"Cypress",
	"NestJs",
	"Drizzle",
	"Prisma",
	"Zod",
] as const;

export function HeroSection() {
	return (
		<section className="py-24 md:py-32">
			<div className="mx-auto max-w-280 px-6">
				<div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
					<div className="flex flex-col gap-6">
						<motion.h1
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="m-0 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-fg"
						>
							Desenvolvedor Fullstack focado em{" "}
							<span className="text-primary-hover">produtos reais.</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
							className="m-0 max-w-120 text-[1.0625rem] leading-[1.75] text-fg-secondary"
						>
							Crio aplicações completas com React, Next.js, Node.js, Fastify,
							PostgreSQL e TypeScript, unindo arquitetura limpa, boa experiência
							de uso e visão de produto.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
							className="flex flex-wrap gap-3"
						>
							<Link
								to="/projects"
								className={cn(
									"inline-flex items-center rounded-md",
									"bg-primary px-6 py-3",
									"text-[0.9375rem] font-medium text-white",
									"transition-colors duration-150 hover:bg-primary-hover",
								)}
							>
								Ver projetos
							</Link>
							<Link
								to="/contact"
								className={cn(
									"inline-flex items-center rounded-md",
									"border border-border-strong bg-transparent",
									"px-6 py-3 text-[0.9375rem] font-medium",
									"text-fg transition-colors duration-150",
									"hover:border-(--primary-border)",
								)}
							>
								Falar comigo
							</Link>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
						className={cn(
							"overflow-hidden rounded-xl",
							"border border-border bg-surface",
							"[box-shadow:var(--shadow-card)]",
						)}
					>
						<div
							className={cn(
								"flex items-center gap-2 px-4 py-3",
								"border-b border-border bg-surface-elevated",
							)}
						>
							<div className="flex gap-1.5">
								<span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
								<span className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
								<span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
							</div>
							<span className="ml-2 font-mono text-[0.8125rem] text-fg-muted">
								architecture_overview.ts
							</span>
						</div>

						<div className="p-6">
							<div className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
								<div className="h-2 w-[78%] rounded bg-surface-elevated" />
								<div className="h-2 w-[48%] rounded bg-surface-elevated" />
								<div className="h-2 w-[55%] rounded bg-surface-elevated" />
								<div className="h-2 w-[68%] rounded bg-surface-elevated" />
								<div className="h-2 w-[82%] rounded bg-surface-elevated" />
								<div className="h-2 w-[38%] rounded bg-surface-elevated" />
								<div className="h-2 w-[62%] rounded bg-surface-elevated" />
								<div className="h-2 w-[58%] rounded bg-surface-elevated" />
							</div>

							<div className="mb-6 flex flex-wrap gap-2">
								{techTags.map((tag) => (
									<span
										key={tag}
										className={cn(
											"rounded border border-(--primary-border)",
											"bg-(--primary-soft) px-2.5 py-1",
											"text-[0.8125rem] font-medium text-primary-hover",
										)}
									>
										{tag}
									</span>
								))}
							</div>

							<div className="rounded-lg bg-background p-4 font-mono text-[0.8125rem] leading-relaxed">
								<p className="m-0 text-fg-muted">
									{"// Clean Architecture implementation"}
								</p>
								<p className="m-0 text-fg-secondary">
									{"useCase = new CreateUser(repository);"}
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
