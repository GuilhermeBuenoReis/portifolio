type MonogramProps = {
	className?: string;
};

export function Monogram({ className }: MonogramProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			className={className}
			fill="none"
			aria-hidden="true"
			focusable="false"
		>
			<text
				x="32"
				y="34"
				fontFamily="Inter, system-ui, sans-serif"
				fontSize="30"
				fontWeight="700"
				letterSpacing="-1.5"
				fill="currentColor"
				textAnchor="middle"
				dominantBaseline="central"
			>
				GR
			</text>
		</svg>
	);
}
