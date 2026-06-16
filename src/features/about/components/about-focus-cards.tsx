import { motion } from "motion/react";
import { focusCards } from "#/features/about/data/about-page-data";
import { cn } from "#/lib/utils";

export function AboutFocusCards() {
	return (
		<section className="pb-16 md:pb-20">
			<div className="mx-auto grid max-w-280 grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
				{focusCards.map((card, index) => (
					<motion.article
						key={card.tag}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{
							duration: 0.45,
							ease: "easeOut",
							delay: index * 0.08,
						}}
						className={cn(
							"flex flex-col gap-3 rounded-xl border border-border bg-surface p-7",
							"transition-colors duration-200 hover:border-(--primary-border)",
							"[box-shadow:var(--shadow-card)]",
						)}
					>
						<span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
							{card.tag}
						</span>
						<h3 className="text-lg font-bold tracking-tight text-fg">
							{card.title}
						</h3>
						<p className="text-sm leading-relaxed text-fg-secondary">
							{card.description}
						</p>
					</motion.article>
				))}
			</div>
		</section>
	);
}
