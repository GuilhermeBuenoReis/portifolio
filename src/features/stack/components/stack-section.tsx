import { motion } from "motion/react";
import { stackCategories } from "#/features/stack/data/stack";
import { StackCard } from "./stack-card";

export function StackSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-28"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="mb-14 flex flex-col items-center gap-3 text-center">
					<span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-hover">
						Tecnologias e Ferramentas
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						Stack Técnica
					</h2>
					<p className="max-w-md text-sm leading-relaxed text-fg-secondary">
						Tecnologias e ferramentas que uso para criar produtos completos.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{stackCategories.map((category, index) => (
						<StackCard key={category.id} category={category} index={index} />
					))}
				</div>
			</div>
		</motion.section>
	);
}
