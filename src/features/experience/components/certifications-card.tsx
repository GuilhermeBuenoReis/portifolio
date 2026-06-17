import { Award } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "#/features/experience/data/trajectory";
import { cn } from "#/lib/utils";

export function CertificationsCard() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
			className={cn(
				"flex flex-col gap-6 rounded-xl p-7",
				"border border-border bg-surface",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div className="flex items-center gap-2.5">
				<Award size={20} className="text-primary" />
				<h2 className="text-xl font-semibold tracking-tight text-fg">
					Certificações
				</h2>
			</div>

			<ul className="flex flex-col">
				{certifications.map((certification, index) => (
					<li
						key={certification.id}
						className={cn(
							"flex flex-col gap-0.5 py-4",
							index > 0 && "border-t border-border",
						)}
					>
						<span className="text-sm font-semibold text-fg">
							{certification.name}
						</span>
						{certification.issuer && (
							<span className="font-mono text-xs text-fg-muted">
								{certification.issuer}
							</span>
						)}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
