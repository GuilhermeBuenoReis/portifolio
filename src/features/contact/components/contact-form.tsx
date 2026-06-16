import { Send } from "lucide-react";
import { motion } from "motion/react";
import { formAction, formFields } from "#/features/contact/data/contact-links";
import { cn } from "#/lib/utils";

const fieldClass = cn(
	"w-full rounded-lg border border-border bg-surface-elevated",
	"px-4 py-3 text-sm text-fg placeholder:text-fg-muted",
	"transition-colors duration-150 outline-none",
	"focus:border-primary focus:ring-2 focus:ring-(--primary-soft)",
);

const labelClass =
	"font-mono text-xs font-medium tracking-wide text-fg-secondary";

export function ContactForm() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
			className={cn(
				"rounded-xl border border-border bg-surface p-8",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<form action={formAction} method="POST" className="flex flex-col gap-6">
				<input
					type="hidden"
					name="_subject"
					value="Nova mensagem do portfólio"
				/>
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_template" value="table" />

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{formFields
						.filter((field) => !field.multiline && field.name !== "subject")
						.map((field) => (
							<div key={field.name} className="flex flex-col gap-2">
								<label htmlFor={field.name} className={labelClass}>
									{field.label}
								</label>
								<input
									id={field.name}
									name={field.name}
									type={field.type}
									placeholder={field.placeholder}
									required
									className={fieldClass}
								/>
							</div>
						))}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="subject" className={labelClass}>
						Assunto
					</label>
					<input
						id="subject"
						name="subject"
						type="text"
						placeholder="Como posso ajudar?"
						required
						className={fieldClass}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="message" className={labelClass}>
						Mensagem
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Conte-me mais sobre seu projeto..."
						required
						rows={6}
						className={cn(fieldClass, "resize-y")}
					/>
				</div>

				<button
					type="submit"
					className={cn(
						"inline-flex w-full items-center justify-center gap-2 rounded-lg",
						"bg-primary px-6 py-3.5 text-sm font-semibold text-white",
						"transition-colors duration-150 hover:bg-primary-hover",
					)}
				>
					Enviar Mensagem
					<Send size={16} />
				</button>
			</form>
		</motion.div>
	);
}
