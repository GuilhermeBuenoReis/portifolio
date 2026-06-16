import { motion } from "motion/react";
import { cn } from "#/lib/utils";

export function ContactBanner() {
	return (
		<section className="pb-24 md:pb-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className={cn(
						"relative h-72 overflow-hidden rounded-xl border border-border",
						"bg-surface [box-shadow:var(--shadow-card)]",
					)}
				>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(91,33,182,0.22),transparent_50%)]" />
					<div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
					<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

					<div className="absolute bottom-0 left-0 flex flex-col gap-1 p-8">
						<span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-hover">
							Coding the Future
						</span>
						<span className="text-lg font-semibold text-fg">
							Design & Development Excellence
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
