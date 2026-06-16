import { motion } from "motion/react";
import { projects } from "#/features/projects/data/projects";
import { ProjectCard } from "./project-card";

export function FeaturedProjectsSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5 }}
			className="py-20 md:py-24"
		>
			<div className="mx-auto max-w-280 px-6">
				<div className="mb-10 flex flex-col gap-3">
					<h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
						Projetos em destaque
					</h2>
					<p className="max-w-xl text-[1.0625rem] leading-relaxed text-fg-secondary">
						Uma seleção de sistemas robustos, desde CRMs complexos a sistemas de
						delivery escaláveis.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</motion.section>
	);
}
