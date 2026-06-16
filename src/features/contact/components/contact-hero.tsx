import { motion } from "motion/react";

export function ContactHero() {
	return (
		<section className="border-b border-border py-20 md:py-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-6"
				>
					<h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg">
						Vamos construir algo juntos?
					</h1>
					<p className="max-w-xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						Estou sempre aberto a novos desafios e parcerias estratégicas. Se
						você tem uma ideia ou projeto, sinta-se à vontade para entrar em
						contato.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
