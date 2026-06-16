import { motion } from "motion/react";
import { heroContent } from "#/features/about/data/about-page-data";

export function AboutHero() {
	return (
		<section className="border-b border-border py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-6"
				>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-hover">
						{heroContent.eyebrow}
					</span>
					<h1 className="max-w-4xl text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-fg">
						{heroContent.titleSegments.map((segment) => (
							<span
								key={segment.text}
								className={segment.highlight ? "text-primary-hover" : undefined}
							>
								{segment.text}
							</span>
						))}
					</h1>
					<p className="max-w-2xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						{heroContent.subtitle}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
