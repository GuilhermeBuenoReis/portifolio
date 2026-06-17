import { CertificationsCard } from "./certifications-card";
import { EducationCard } from "./education-card";

export function EducationAndCertificationsSection() {
	return (
		<section className="pb-20 md:pb-28">
			<div className="mx-auto max-w-280 px-6">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<EducationCard />
					<CertificationsCard />
				</div>
			</div>
		</section>
	);
}
