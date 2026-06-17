import { Link, useRouterState } from "@tanstack/react-router";
import monogramaGR from "#/assets/images/monograma-GR.png";
import { cn } from "#/lib/utils";

const navLinks = [
	{ label: "Início", to: "/", exact: true },
	{ label: "Projetos", to: "/projects", exact: false },
	{ label: "Experiência", to: "/experience", exact: false },
	{ label: "Stack", to: "/stack", exact: false },
	{ label: "Sobre", to: "/about", exact: false },
] as const;

type NavLinkDef = (typeof navLinks)[number];

function NavLink({ label, to, exact }: NavLinkDef) {
	const { location } = useRouterState();
	const isActive = exact
		? location.pathname === to
		: location.pathname === to || location.pathname.startsWith(`${to}/`);

	return (
		<Link
			to={to}
			className={cn(
				"relative inline-flex items-center whitespace-nowrap",
				"rounded px-3 py-1.5 text-sm transition-colors duration-150",
				isActive ? "text-primary-hover" : "text-fg-secondary hover:text-fg",
			)}
		>
			{label}
			{isActive && (
				<span className="absolute -bottom-px left-3 right-3 h-px bg-(--primary-border)" />
			)}
		</Link>
	);
}

export function Header() {
	return (
		<header
			className={cn(
				"fixed left-0 right-0 top-0 z-50 h-16",
				"border-b border-border",
				"bg-[rgba(5,5,9,0.82)] backdrop-blur-md",
			)}
		>
			<div className="mx-auto flex h-full max-w-280 items-center justify-between gap-6 px-4 sm:px-6 lg:gap-12">
				<Link
					to="/"
					aria-label="Guilherme Reis - ir para a página inicial"
					className={cn(
						"group inline-flex shrink-0 items-center gap-3 rounded-md",
						"outline-none transition-colors duration-150",
						"focus-visible:ring-2 focus-visible:ring-(--primary-border)",
					)}
				>
					<span
						className={cn(
							"flex h-11 w-11 items-center justify-center rounded-md",
							"border border-(--primary-border) bg-(--primary-soft)",
							"transition-colors duration-150 group-hover:border-primary",
						)}
					>
						<img
							src={monogramaGR}
							alt=""
							aria-hidden="true"
							className="h-8 w-8 object-contain"
						/>
					</span>
					<span className="hidden min-w-0 flex-col leading-none sm:flex">
						<span className="text-sm font-semibold tracking-wide text-fg">
							Guilherme Reis
						</span>
						<span className="mt-1 text-xs font-medium text-fg-muted">
							Full Stack Developer
						</span>
					</span>
				</Link>

				<nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
					{navLinks.map((link) => (
						<NavLink key={link.to} {...link} />
					))}
				</nav>

				<Link
					to="/contact"
					className={cn(
						"inline-flex shrink-0 items-center rounded-md",
						"border border-(--primary-border) bg-(--primary-soft)",
						"px-4 py-2 text-sm font-medium text-primary-hover",
						"transition-colors duration-150",
						"outline-none focus-visible:ring-2 focus-visible:ring-(--primary-border)",
						"hover:border-primary hover:bg-[rgba(139,92,246,0.22)]",
					)}
				>
					<span className="lg:hidden">Contact</span>
					<span className="hidden lg:inline">Entrar em contato</span>
				</Link>
			</div>
		</header>
	);
}
