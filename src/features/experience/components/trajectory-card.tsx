import { Briefcase, GraduationCap, MonitorSmartphone } from "lucide-react";
import { motion } from "motion/react";
import type { TrajectoryItem } from "#/features/experience/types/trajectory";
import { cn } from "#/lib/utils";

const itemIcons = [Briefcase, MonitorSmartphone, GraduationCap] as const;

type TrajectoryCardProps = {
	item: TrajectoryItem;
	index: number;
};

export function TrajectoryCard({ item, index }: TrajectoryCardProps) {
	const Icon = itemIcons[index % itemIcons.length];
	const isLeft = index % 2 === 0;

	return (
		<div
			className={cn(
				"relative flex md:items-start",
				isLeft ? "md:justify-start" : "md:justify-end",
			)}
		>
			<span
				className={cn(
					"absolute top-6 z-10 flex h-3.5 w-3.5 items-center justify-center",
					"left-0 -translate-x-1/2 md:left-1/2",
				)}
			>
				<span className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-primary/40 shadow-[0_0_0_4px_rgba(139,92,246,0.12)]" />
			</span>

			<motion.article
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
				className={cn(
					"ml-8 w-full md:ml-0 md:w-[calc(50%-2.5rem)]",
					"flex flex-col gap-3 rounded-xl p-6",
					"border border-border bg-surface",
					"transition-colors duration-200 hover:border-(--primary-border)",
					"[box-shadow:var(--shadow-card)]",
				)}
			>
				<div className="flex items-center gap-2">
					<span
						className={cn(
							"rounded-md border border-(--primary-border) bg-(--primary-soft)",
							"px-2.5 py-1 font-mono text-xs font-medium text-primary-hover",
						)}
					>
						{item.period}
					</span>
					<span
						className={cn(
							"flex h-6 w-6 items-center justify-center rounded-md",
							"bg-primary/10 text-primary",
						)}
					>
						<Icon size={13} />
					</span>
				</div>

				<div className="flex flex-col gap-0.5">
					<h3 className="text-lg font-semibold tracking-tight text-fg">
						{item.role}
					</h3>
					<span className="text-sm text-fg-secondary">{item.company}</span>
				</div>

				<ul className="flex flex-col gap-2">
					{item.highlights.map((highlight) => (
						<li
							key={highlight}
							className="flex gap-2 text-sm leading-relaxed text-fg-secondary"
						>
							<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
							<span>{highlight}</span>
						</li>
					))}
				</ul>
			</motion.article>
		</div>
	);
}
