import type { Experience } from "#/features/experience/types/experience";
import { ExperienceCard } from "./experience-card";
import { MobileTimelineDot, TimelineDot } from "./timeline-dot";

type Props = {
	experience: Experience;
	index: number;
	isLast: boolean;
};

export function TimelineItem({ experience, index, isLast }: Props) {
	const side = index % 2 === 0 ? "right" : "left";

	return (
		<div className="relative">
			<div className="absolute inset-x-0 top-6 hidden md:block">
				<TimelineDot index={index} />
			</div>

			<div className="flex gap-4 pl-2 md:hidden">
				<div className="flex flex-col items-center">
					<MobileTimelineDot index={index} />
					{!isLast && <div className="mt-3 w-px flex-1 bg-border-strong" />}
				</div>
				<ExperienceCard experience={experience} index={index} side="right" />
			</div>

			<div className="hidden md:flex">
				<ExperienceCard experience={experience} index={index} side={side} />
			</div>
		</div>
	);
}
