import { Layers } from "lucide-react";
import { motion } from "motion/react";
import type { StackCategory } from "#/features/stack/types/stack";
import { cn } from "#/lib/utils";

type StackCardProps = {
	category: StackCategory;
	index: number;
};

export function StackCard({ category, index }: StackCardProps) {
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
