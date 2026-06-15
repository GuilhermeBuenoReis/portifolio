import { motion } from "motion/react";
import { cn } from "#/lib/utils";

type Props = { index: number };

export function TimelineDot({ index }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.07 }}
			className={cn(
				"absolute left-1/2 -translate-x-1/2 z-10",
				"hidden md:block",
				"h-3.5 w-3.5 rounded-full bg-primary",
				"[box-shadow:0_0_12px_rgba(139,92,246,0.5)]",
			)}
		/>
	);
}

export function MobileTimelineDot({ index }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.07 }}
			className={cn(
				"shrink-0 mt-6",
				"h-3 w-3 rounded-full bg-primary",
				"[box-shadow:0_0_10px_rgba(139,92,246,0.5)]",
			)}
		/>
	);
}
