import { cn } from "#/lib/utils";

const socialLinks = [
	{
		label: "Github",
		href: "https://github.com/GuilhermeBuenoReis",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/guilherme-bueno-reis/",
	},
	{ label: "Instagram", href: "https://www.instagram.com/devguilherme_bueno/" },
] as const;

export function Footer() {
	return (
		<footer
			className={cn("border-t border-border", "bg-background-soft", "py-8")}
		>
			<div
				className={cn(
					"mx-auto max-w-280 px-6",
					"flex flex-col gap-4",
					"md:flex-row md:items-center md:justify-between",
				)}
			>
				<div className="flex flex-col gap-1">
					<span className="font-mono text-sm font-semibold text-fg">
						Guilherme Reis
					</span>
					<span className="text-xs text-fg-muted">
						© 2026 Desenvolvedor Fullstack. Todos os direitos reservados.
					</span>
				</div>

				<div className="flex items-center gap-6">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className={cn(
								"text-sm text-fg-secondary",
								"transition-colors duration-150 hover:text-fg",
							)}
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
