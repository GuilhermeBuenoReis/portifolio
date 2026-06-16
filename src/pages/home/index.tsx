import { AboutSection } from "#/features/about/components/about-section";
import { FinalCtaSection } from "#/features/contact/components/final-cta-section";
import { ExperienceSection } from "#/features/experience/components/experience-section";
import { HeroSection } from "#/features/portfolio/components/hero-section";
import { FeaturedProjectsSection } from "#/features/projects/components/featured-projects-section";
import { StackSection } from "#/features/stack/components/stack-section";

export function HomePage() {
	return (
		<>
			<HeroSection />
			<FeaturedProjectsSection />
			<ExperienceSection />
			<StackSection />
			<AboutSection />
			<FinalCtaSection />
		</>
	);
}
