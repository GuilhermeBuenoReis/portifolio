import { motion } from "motion/react";
import { philosophyContent } from "#/features/about/data/about-page-data";
import { cn } from "#/lib/utils";

export function AboutPhilosophySection() {
	return (
		<section className="pb-24 md:pb-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className={cn(
						"flex flex-col items-center gap-8 rounded-xl border border-border bg-surface",
						"px-6 py-14 text-center md:px-16 md:py-20",
						"[box-shadow:var(--shadow-card)]",
					)}
				>
					<h2 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">
						{philosophyContent.title}
					</h2>
					<blockquote className="max-w-2xl text-lg italic leading-relaxed text-fg-secondary md:text-xl">
						{philosophyContent.quote}
					</blockquote>
					<div className="flex flex-wrap justify-center gap-2">
						{philosophyContent.badges.map((badge) => (
							<span
								key={badge}
								className={cn(
									"rounded border border-border-strong bg-surface-elevated",
									"px-3 py-1.5 font-mono text-xs font-medium text-fg-muted",
								)}
							>
								{badge}
							</span>
						))}
					</div>
					<p className="max-w-2xl text-sm leading-relaxed text-fg-muted">
						{philosophyContent.note}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
