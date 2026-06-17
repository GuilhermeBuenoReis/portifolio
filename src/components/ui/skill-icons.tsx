type SkillIconTheme = "dark" | "light";

type SkillIconsProps = {
	icons: readonly string[];
	alt: string;
	className?: string;
	title?: string;
	theme?: SkillIconTheme;
	perLine?: number;
	width?: number;
	height?: number;
};

export function SkillIcons({
	icons,
	alt,
	className,
	title,
	theme = "dark",
	perLine,
	width = 48,
	height = 48,
}: SkillIconsProps) {
	const searchParams = new URLSearchParams({
		i: icons.join(","),
		theme,
	});

	if (perLine) {
		searchParams.set("perline", String(perLine));
	}

	return (
		<img
			src={`https://skillicons.dev/icons?${searchParams.toString()}`}
			alt={alt}
			title={title}
			className={className}
			width={width}
			height={height}
			loading="lazy"
			decoding="async"
		/>
	);
}
