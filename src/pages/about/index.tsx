import { AboutFocusCards } from "#/features/about/components/about-focus-cards";
import { AboutHero } from "#/features/about/components/about-hero";
import { AboutPhilosophySection } from "#/features/about/components/about-philosophy-section";
import { AboutStorySection } from "#/features/about/components/about-story-section";

export function AboutPage() {
	return (
		<>
			<AboutHero />
			<AboutStorySection />
			<AboutFocusCards />
			<AboutPhilosophySection />
		</>
	);
}
