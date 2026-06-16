import { Feather, LineChart } from "lucide-react";
import { motion } from "motion/react";
import {
	storyContent,
	visionContent,
} from "#/features/about/data/about-page-data";
import { cn } from "#/lib/utils";

const cardClass = cn(
	"rounded-xl border border-border bg-surface p-8",
	"transition-colors duration-200 hover:border-(--primary-border)",
	"[box-shadow:var(--shadow-card)]",
);

export function AboutStorySection() {
	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto grid max-w-280 grid-cols-1 gap-6 px-6 lg:grid-cols-12">
				<motion.article
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className={cn(cardClass, "lg:col-span-7")}
				>
					<div className="flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-hover">
							<Feather size={16} />
						</div>
						<h2 className="text-xl font-bold tracking-tight text-fg">
							{storyContent.title}
						</h2>
					</div>
					<div className="mt-6 flex flex-col gap-5">
						{storyContent.paragraphs.map((paragraph) => (
							<p
								key={paragraph.slice(0, 32)}
								className="text-sm leading-relaxed text-fg-secondary"
							>
								{paragraph}
							</p>
						))}
					</div>
				</motion.article>

				<motion.article
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
					className={cn(cardClass, "lg:col-span-5")}
				>
					<div className="flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-hover">
							<LineChart size={16} />
						</div>
						<h2 className="text-xl font-bold tracking-tight text-fg">
							{visionContent.title}
						</h2>
					</div>
					<p className="mt-6 text-sm leading-relaxed text-fg-secondary">
						{visionContent.intro}
					</p>
					<ul className="mt-6 flex flex-col gap-5">
						{visionContent.items.map((item) => (
							<li key={item.title} className="flex gap-4">
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-elevated text-primary-hover">
									<item.icon size={16} />
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-sm font-semibold text-fg">
										{item.title}
									</span>
									<p className="text-sm leading-relaxed text-fg-secondary">
										{item.description}
									</p>
								</div>
							</li>
						))}
					</ul>
				</motion.article>
			</div>
		</section>
	);
}
