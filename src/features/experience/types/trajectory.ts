export type TrajectoryItem = {
	id: string;
	period: string;
	role: string;
	company: string;
	highlights: string[];
};

export type EducationDetail = {
	label: string;
	value: string;
};

export type Education = {
	degree: string;
	institution: string;
	details: EducationDetail[];
};

export type Certification = {
	id: string;
	name: string;
	issuer?: string;
};
