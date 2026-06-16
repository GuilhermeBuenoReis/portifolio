import { ContactBanner } from "#/features/contact/components/contact-banner";
import { ContactForm } from "#/features/contact/components/contact-form";
import { ContactHero } from "#/features/contact/components/contact-hero";
import { ContactInfoCard } from "#/features/contact/components/contact-info-card";

export function ContactPage() {
	return (
		<>
			<ContactHero />
			<section className="py-16 md:py-20">
				<div className="mx-auto grid max-w-280 grid-cols-1 gap-6 px-6 lg:grid-cols-2">
					<ContactInfoCard />
					<ContactForm />
				</div>
			</section>
			<ContactBanner />
		</>
	);
}
