import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
	children: ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function getStoredTheme(storageKey: string, fallback: Theme): Theme {
	if (typeof window === "undefined") {
		return fallback;
	}

	const stored = window.localStorage.getItem(storageKey);
	if (stored === "light" || stored === "dark" || stored === "system") {
		return stored;
	}

	return fallback;
}

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() =>
		getStoredTheme(storageKey, defaultTheme),
	);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const value: ThemeProviderState = {
		theme,
		setTheme: (next: Theme) => {
			if (typeof window !== "undefined") {
				window.localStorage.setItem(storageKey, next);
			}
			setTheme(next);
		},
	};

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}
