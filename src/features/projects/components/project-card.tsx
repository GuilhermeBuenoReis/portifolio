import { motion } from "motion/react";
import { ProjectPreviewMockup } from "#/components/ui/project-preview-mockups";
import { SkillIcons } from "#/components/ui/skill-icons";
import type { Project } from "#/features/projects/types/project";
import { cn } from "#/lib/utils";

type Props = {
	project: Project;
	index: number;
};

export function ProjectCard({ project, index }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
			className={cn(
				"group flex flex-col overflow-hidden rounded-xl",
				"border border-border bg-surface",
				"transition-all duration-200",
				"hover:-translate-y-1 hover:border-(--primary-border)",
				"[box-shadow:var(--shadow-card)]",
			)}
		>
			<div
				className={cn(
					"relative h-50 w-full overflow-hidden",
					project.bannerGradient,
				)}
			>
				<div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/4" />
				<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/3" />
				<div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/3" />
				{project.preview ? (
					<ProjectPreviewMockup variant={project.preview} />
				) : null}
				<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
				<span
					className={cn(
						"absolute bottom-3 left-3",
						"rounded-full border border-white/10 bg-black/40",
						"px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm",
					)}
				>
					{project.category}
				</span>
			</div>

			<div className="flex flex-1 flex-col gap-3 p-5">
				<h3 className="text-[1.0625rem] font-semibold text-fg">
					{project.name}
				</h3>
				<p className="text-sm leading-relaxed text-fg-secondary">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-1.5">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className={cn(
								"rounded border border-border-strong",
								"bg-surface-elevated px-2 py-0.5",
								"text-xs font-medium text-fg-muted",
							)}
						>
							{tag}
						</span>
					))}
				</div>

				<div className="mt-auto flex flex-wrap gap-2 pt-3">
					{project.repos.map((repo) => (
						<a
							key={repo.url}
							href={repo.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"inline-flex flex-1 items-center justify-center gap-2 rounded-md",
								"border border-border-strong bg-transparent",
								"px-4 py-2 text-sm font-medium text-fg",
								"transition-colors duration-150",
								"hover:border-(--primary-border) hover:text-primary-hover",
							)}
						>
							<SkillIcons
								icons={["github"]}
								alt=""
								className="h-4 w-4 rounded-sm"
							/>
							{repo.label}
						</a>
					))}
				</div>
			</div>
		</motion.div>
	);
}
