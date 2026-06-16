import { motion } from "motion/react";

export function ProjectsHero() {
	return (
		<section className="border-b border-border py-24 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-4"
				>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						Portfólio
					</span>
					<h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-fg">
						Projetos
					</h1>
					<p className="max-w-xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						Sistemas que desenvolvi — desde plataformas de gestão empresarial e
						e-commerces a soluções de saúde e apps mobile.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
