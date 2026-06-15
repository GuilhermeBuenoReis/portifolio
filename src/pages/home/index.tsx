import { ExperienceSection } from "#/features/experience/components/experience-section";
import { HeroSection } from "#/features/portfolio/components/hero-section";
import { FeaturedProjectsSection } from "#/features/projects/components/featured-projects-section";

export function HomePage() {
	return (
		<>
			<HeroSection />
			<FeaturedProjectsSection />
			<ExperienceSection />
		</>
	);
}
