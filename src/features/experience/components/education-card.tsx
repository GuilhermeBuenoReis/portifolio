import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { education } from "#/features/experience/data/trajectory";
import { cn } from "#/lib/utils";

export function EducationCard() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className={cn(
				"flex flex-col gap-6 rounded-xl p-7",
				"border border-border bg-surface",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex items-center gap-2.5">
				<GraduationCap size={20} className="text-primary" />
				<h2 className="text-xl font-semibold tracking-tight text-fg">
					Formação Acadêmica
				</h2>
			</div>

			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-fg">{education.degree}</h3>
				<span className="text-sm text-fg-secondary">
					{education.institution}
				</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{education.details.map((detail) => (
					<div
						key={detail.label}
						className={cn(
							"flex flex-col gap-1 rounded-lg p-4",
							"border border-border bg-surface-elevated",
						)}
					>
						<span className="font-mono text-xs uppercase tracking-wider text-primary-hover">
							{detail.label}
						</span>
						<span className="text-sm font-semibold text-fg">
							{detail.value}
						</span>
					</div>
				))}
			</div>
		</motion.div>
	);
}
