import { Mail, MapPin } from "lucide-react";
import type { ContactInfo, SocialLink } from "#/features/contact/types/contact";

export const contactEmail = "guilhermebuenoreis.contact@gmail.com";

export const contactSubject = encodeURIComponent("Contato pelo portfólio");

export const contactHref = `mailto:${contactEmail}?subject=${contactSubject}`;

export const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${contactSubject}`;

export const whatsappPhone = "5542988663891";

export const whatsappMessage = encodeURIComponent(
	"Olá Guilherme, vi seu portfólio e gostaria de conversar sobre um projeto.",
);

export const whatsappHref = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;

export const contactInfo: ContactInfo[] = [
	{
		icon: Mail,
		label: "E-mail",
		value: contactEmail,
		href: contactHref,
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
		skill: "github",
		label: "GitHub",
		href: "https://github.com/GuilhermeBuenoReis",
	},
	{
		skill: "linkedin",
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/guilherme-bueno-reis",
	},
	{
		icon: Mail,
		label: "Email",
		href: contactHref,
	},
	{
		whatsapp: true,
		label: "WhatsApp",
		href: whatsappHref,
	},
];

export const availabilityStatus = {
	title: "Disponível para Projetos",
	description:
		"Atualmente aceitando novas propostas para projetos freelancer e oportunidades full-time em engenharia de software de alta performance.",
} as const;
