import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Providers } from "#/app/providers";
import { MainLayout } from "#/components/layout/main-layout";

import appCss from "../styles/globals.css?url";

const siteUrl = "https://guilherme-reis.vercel.app";
const siteTitle = "Guilherme Reis | Desenvolvedor Fullstack";
const siteDescription =
	"Portfólio de Guilherme Reis, desenvolvedor fullstack especializado em React, TypeScript, Node.js, interfaces modernas e aplicações web performáticas.";
const ogImage = `${siteUrl}/og-image.png`;

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: siteTitle },
			{ name: "description", content: siteDescription },
			{ name: "robots", content: "index, follow" },
			{ name: "author", content: "Guilherme Reis" },
			{ name: "theme-color", content: "#050509" },
			{ property: "og:type", content: "website" },
			{ property: "og:title", content: siteTitle },
			{ property: "og:description", content: siteDescription },
			{ property: "og:url", content: siteUrl },
			{ property: "og:image", content: ogImage },
			{ property: "og:locale", content: "pt_BR" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: siteTitle },
			{ name: "twitter:description", content: siteDescription },
			{ name: "twitter:image", content: ogImage },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "canonical", href: siteUrl },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
			},
		],
	}),
	component: MainLayout,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<Providers>{children}</Providers>
				<Scripts />
			</body>
		</html>
	);
}
