import { Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";

export function ProfileCtaSection() {
	return (
		<section className="pb-24 md:pb-32">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className={cn(
						"flex flex-col items-center gap-6 rounded-2xl px-6 py-16 text-center",
						"border border-border bg-surface",
						"[box-shadow:var(--shadow-card)]",
					)}
				>
					<div className="flex flex-col items-center gap-3">
						<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
							Interessado no meu perfil?
						</h2>
						<p className="max-w-md text-sm leading-relaxed text-fg-secondary">
							Estou sempre aberto a novos desafios e parcerias inovadoras. Vamos
							construir algo incrível juntos.
						</p>
					</div>

					<div className="flex flex-col items-center gap-3 sm:flex-row">
						<a
							href="/curriculo-guilherme-reis.pdf"
							download
							className={cn(
								"inline-flex items-center gap-2 rounded-md px-5 py-2.5",
								"bg-primary text-sm font-medium text-white",
								"transition-colors duration-150 hover:bg-primary-hover",
							)}
						>
							<Download size={16} />
							Download CV (PDF)
						</a>
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=guilhermebuenoreis.contact@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"inline-flex items-center gap-2 rounded-md px-5 py-2.5",
								"border border-border-strong bg-surface-elevated",
								"text-sm font-medium text-fg",
								"transition-colors duration-150 hover:border-(--primary-border)",
							)}
						>
							<Mail size={16} />
							Me Envie um Email
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
