import { cn } from "#/lib/utils";

type PanelProps = {
	children: React.ReactNode;
	className?: string;
};

function PreviewLayer({ children }: { children: React.ReactNode }) {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 hidden items-start justify-center pt-5 sm:flex"
		>
			{children}
		</div>
	);
}

function Panel({ children, className }: PanelProps) {
	return (
		<div
			className={cn(
				"rounded-xl border border-white/10 bg-black/30 p-3",
				"shadow-2xl shadow-violet-950/40 backdrop-blur-sm",
				className,
			)}
		>
			{children}
		</div>
	);
}

export function CrmPreviewMockup() {
	return (
		<PreviewLayer>
			<Panel className="w-58 max-w-[80%]">
				<div className="mb-2.5 flex items-center justify-between">
					<div className="h-2 w-20 rounded-full bg-white/25" />
					<div className="h-2 w-7 rounded-full bg-violet-300/40" />
				</div>

				<div className="mb-2.5 grid grid-cols-3 gap-1.5">
					<div className="rounded-lg border border-white/10 bg-white/4 p-1.5">
						<div className="mb-1 h-1.5 w-6 rounded-full bg-white/15" />
						<div className="h-2 w-9 rounded-full bg-violet-300/45" />
					</div>
					<div className="rounded-lg border border-white/10 bg-white/4 p-1.5">
						<div className="mb-1 h-1.5 w-6 rounded-full bg-white/15" />
						<div className="h-2 w-7 rounded-full bg-indigo-300/45" />
					</div>
					<div className="rounded-lg border border-white/10 bg-white/4 p-1.5">
						<div className="mb-1 h-1.5 w-6 rounded-full bg-white/15" />
						<div className="h-2 w-8 rounded-full bg-white/30" />
					</div>
				</div>

				<div className="flex items-end gap-1.5 rounded-lg border border-white/10 bg-white/3 p-2">
					<div className="h-5 w-full rounded-sm bg-violet-400/30" />
					<div className="h-8 w-full rounded-sm bg-violet-400/40" />
					<div className="h-4 w-full rounded-sm bg-indigo-400/30" />
					<div className="h-10 w-full rounded-sm bg-violet-300/50" />
					<div className="h-6 w-full rounded-sm bg-indigo-400/35" />
					<div className="h-7 w-full rounded-sm bg-violet-400/40" />
				</div>
			</Panel>
		</PreviewLayer>
	);
}

export function CheckoutPreviewMockup() {
	return (
		<PreviewLayer>
			<Panel className="w-58 max-w-[80%]">
				<div className="mb-2.5 flex items-center gap-1.5">
					<div className="h-1.5 w-1.5 rounded-full bg-rose-300/60" />
					<div className="h-px flex-1 bg-white/15" />
					<div className="h-1.5 w-1.5 rounded-full bg-violet-300/60" />
					<div className="h-px flex-1 bg-white/10" />
					<div className="h-1.5 w-1.5 rounded-full bg-white/20" />
				</div>

				<div className="mb-2 flex items-center gap-2 rounded-lg border border-white/10 bg-white/4 p-1.5">
					<div className="h-8 w-8 shrink-0 rounded-md bg-linear-to-br from-rose-400/30 to-violet-400/25" />
					<div className="flex-1 space-y-1">
						<div className="h-1.5 w-16 rounded-full bg-white/25" />
						<div className="h-1.5 w-10 rounded-full bg-white/12" />
					</div>
					<div className="h-2 w-6 rounded-full bg-rose-300/45" />
				</div>

				<div className="mb-2.5 space-y-1.5 rounded-lg border border-white/10 bg-white/3 p-2">
					<div className="flex items-center justify-between">
						<div className="h-1.5 w-10 rounded-full bg-white/15" />
						<div className="h-1.5 w-7 rounded-full bg-white/15" />
					</div>
					<div className="flex items-center justify-between">
						<div className="h-2 w-12 rounded-full bg-white/30" />
						<div className="h-2 w-9 rounded-full bg-violet-300/50" />
					</div>
				</div>

				<div className="flex items-center gap-1.5">
					<div className="h-5 flex-1 rounded-md bg-linear-to-r from-violet-400/45 to-rose-400/40" />
					<div className="h-5 w-9 rounded-md border border-white/10 bg-white/5" />
				</div>
			</Panel>
		</PreviewLayer>
	);
}

export function HealthPreviewMockup() {
	const calendarCells = [
		"cell-mon",
		"cell-tue",
		"cell-wed",
		"cell-thu",
		"cell-fri",
		"cell-sat",
		"cell-sun",
	];

	return (
		<PreviewLayer>
			<Panel className="w-58 max-w-[80%]">
				<div className="mb-2 flex items-center justify-between">
					<div className="h-2 w-16 rounded-full bg-white/25" />
					<div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-1.5 py-0.5">
						<div className="h-1.5 w-6 rounded-full bg-cyan-200/55" />
					</div>
				</div>

				<div className="mb-2.5 grid grid-cols-7 gap-1">
					{calendarCells.map((cell, i) => (
						<div
							key={cell}
							className={cn(
								"flex aspect-square items-center justify-center rounded-sm",
								i === 3
									? "bg-violet-400/45"
									: "border border-white/10 bg-white/3",
							)}
						>
							<div
								className={cn(
									"h-1 w-1 rounded-full",
									i === 3 ? "bg-white/70" : "bg-white/15",
								)}
							/>
						</div>
					))}
				</div>

				<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/4 p-1.5">
					<div className="h-7 w-7 shrink-0 rounded-full bg-linear-to-br from-cyan-400/30 to-violet-400/30" />
					<div className="flex-1 space-y-1">
						<div className="h-1.5 w-16 rounded-full bg-white/25" />
						<div className="h-1.5 w-10 rounded-full bg-white/12" />
					</div>
					<div className="rounded border border-cyan-300/25 bg-cyan-300/10 px-1.5 py-0.5">
						<div className="h-1.5 w-6 rounded-full bg-cyan-200/55" />
					</div>
				</div>
			</Panel>
		</PreviewLayer>
	);
}

export function MobilePreviewMockup() {
	return (
		<PreviewLayer>
			<div className="flex h-37 w-22 flex-col overflow-hidden rounded-[1.1rem] border border-white/15 bg-black/40 p-1.5 shadow-2xl shadow-violet-950/50 backdrop-blur-sm">
				<div className="mb-1.5 flex items-center justify-center">
					<div className="h-1 w-7 rounded-full bg-white/20" />
				</div>

				<div className="mb-1.5 flex items-center justify-between px-0.5">
					<div className="h-1.5 w-8 rounded-full bg-white/25" />
					<div className="h-3 w-3 rounded-full bg-violet-400/40" />
				</div>

				<div className="mb-1.5 rounded-md border border-violet-300/20 bg-violet-400/15 p-1.5">
					<div className="mb-1 h-1.5 w-12 rounded-full bg-white/30" />
					<div className="h-1 w-8 rounded-full bg-white/15" />
				</div>

				<div className="space-y-1.5">
					<div className="rounded-md border border-white/10 bg-white/4 p-1.5">
						<div className="mb-1 h-1 w-10 rounded-full bg-white/20" />
						<div className="h-1 w-6 rounded-full bg-white/12" />
					</div>
					<div className="rounded-md border border-white/10 bg-white/4 p-1.5">
						<div className="mb-1 h-1 w-9 rounded-full bg-white/20" />
						<div className="h-1 w-7 rounded-full bg-white/12" />
					</div>
				</div>

				<div className="mt-auto flex items-center justify-around rounded-md border border-white/10 bg-black/30 py-1">
					<div className="h-1.5 w-1.5 rounded-full bg-violet-300/60" />
					<div className="h-1.5 w-1.5 rounded-full bg-white/20" />
					<div className="h-1.5 w-1.5 rounded-full bg-white/20" />
				</div>
			</div>
		</PreviewLayer>
	);
}

const previewMap = {
	crm: CrmPreviewMockup,
	checkout: CheckoutPreviewMockup,
	health: HealthPreviewMockup,
	mobile: MobilePreviewMockup,
} as const;

export type ProjectPreview = keyof typeof previewMap;

export function ProjectPreviewMockup({ variant }: { variant: ProjectPreview }) {
	const Mockup = previewMap[variant];
	return <Mockup />;
}
