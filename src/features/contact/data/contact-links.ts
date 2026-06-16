import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type {
	ContactInfo,
	FormField,
	SocialLink,
} from "#/features/contact/types/contact";

export const contactEmail = "guilhermebuenoreis.contact@gmail.com";

export const formAction = `https://formsubmit.co/${contactEmail}`;

export const contactInfo: ContactInfo[] = [
	{
		icon: Mail,
		label: "E-mail",
		value: contactEmail,
		href: `mailto:${contactEmail}`,
	},
	{
		icon: MapPin,
		label: "Localização",
		value: "Brasil / Remoto",
		href: "https://www.google.com/maps/place/Brasil",
	},
];

export const socialLinks: SocialLink[] = [
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/GuilhermeBuenoReis",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/guilherme-bueno-reis",
	},
	{
		icon: Mail,
		label: "Email",
		href: `mailto:${contactEmail}`,
	},
];

export const formFields: FormField[] = [
	{ name: "name", label: "Nome", placeholder: "Seu nome", type: "text" },
	{
		name: "email",
		label: "E-mail",
		placeholder: "seu@email.com",
		type: "email",
	},
	{
		name: "subject",
		label: "Assunto",
		placeholder: "Como posso ajudar?",
		type: "text",
	},
	{
		name: "message",
		label: "Mensagem",
		placeholder: "Conte-me mais sobre seu projeto...",
		type: "text",
		multiline: true,
	},
];

export const availabilityStatus = {
	title: "Disponível para Projetos",
	description:
		"Atualmente aceitando novas propostas para projetos freelancer e oportunidades full-time em engenharia de software de alta performance.",
} as const;
