import { Layers } from "lucide-react";
import { motion } from "motion/react";
import { stackCategories } from "#/features/stack/data/stack";
import type { StackCategory } from "#/features/stack/types/stack";
import { cn } from "#/lib/utils";

type StackCardProps = {
	category: StackCategory;
	index: number;
};

function StackCard({ category, index }: StackCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
			className={cn(
				"flex flex-col gap-4 rounded-xl p-6",
				"border border-border bg-surface",
				"transition-all duration-200",
				"hover:border-(--primary-border)",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex items-center gap-3">
				<div
					className={cn(
						"flex h-8 w-8 items-center justify-center rounded-lg",
						"bg-primary/10 text-primary",
					)}
				>
					<Layers size={15} />
				</div>
				<span className="text-sm font-semibold text-fg">{category.label}</span>
			</div>

			<div className="flex flex-wrap gap-2">
				{category.technologies.map((tech) => (
					<span
						key={tech}
						className={cn(
							"rounded border border-border-strong",
							"bg-surface-elevated px-2.5 py-1",
							"text-xs font-medium text-fg-muted",
						)}
					>
						{tech}
					</span>
				))}
			</div>
		</motion.div>
	);
}

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
