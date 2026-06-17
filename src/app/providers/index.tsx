import type { ReactNode } from "react";
import { ThemeProvider } from "#/components/theme-provider";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
			{children}
		</ThemeProvider>
	);
}
