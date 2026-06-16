import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "#/lib/utils";

const codeSnippet = `const developer = {
  name: "Guilherme Reis",
  role: "Full Stack Engineer",
  focus: ["Clean Code", "System Design", "Product Thinking"],
  tools: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  philosophy: "Architecture is about intent, not frameworks."
}

function buildSuccess(input) {
  return input.quality === "High" ? "Scalable" : "Refactor"
}`;

const kw = "text-primary-hover";
const str = "text-[#c4b5fd]";
const prop = "text-fg";
const punct = "text-fg-muted";

export function DeveloperCodeBlock() {
	const [copied, setCopied] = useState(false);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(codeSnippet);
			setCopied(true);
			setTimeout(() => setCopied(false), 1600);
		} catch {
			setCopied(false);
		}
	}

	return (
		<section className="pb-24 md:pb-28">
			<div className="mx-auto max-w-280 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className={cn(
						"relative overflow-hidden rounded-xl border border-border",
						"bg-[#08080d] [box-shadow:var(--shadow-card)]",
					)}
				>
					<div className="flex items-center justify-between border-b border-border px-5 py-3">
						<div className="flex items-center gap-1.5">
							<span className="h-3 w-3 rounded-full bg-[#3f3f46]" />
							<span className="h-3 w-3 rounded-full bg-[#3f3f46]" />
							<span className="h-3 w-3 rounded-full bg-[#3f3f46]" />
						</div>
						<button
							type="button"
							onClick={handleCopy}
							aria-label="Copiar código"
							className={cn(
								"flex items-center gap-1.5 rounded-md border border-border",
								"px-2.5 py-1 text-xs text-fg-muted",
								"transition-colors duration-150 hover:border-(--primary-border) hover:text-fg",
							)}
						>
							{copied ? <Check size={13} /> : <Copy size={13} />}
							{copied ? "Copiado" : "Copiar"}
						</button>
					</div>

					<pre className="overflow-x-auto px-6 py-6 font-mono text-[0.8125rem] leading-relaxed">
						<code>
							<span className={kw}>const</span>{" "}
							<span className={prop}>developer</span>{" "}
							<span className={punct}>= {"{"}</span>
							{"\n  "}
							<span className={prop}>name</span>
							<span className={punct}>:</span>{" "}
							<span className={str}>"Guilherme Reis"</span>
							<span className={punct}>,</span>
							{"\n  "}
							<span className={prop}>role</span>
							<span className={punct}>:</span>{" "}
							<span className={str}>"Full Stack Engineer"</span>
							<span className={punct}>,</span>
							{"\n  "}
							<span className={prop}>focus</span>
							<span className={punct}>: [</span>
							<span className={str}>"Clean Code"</span>
							<span className={punct}>, </span>
							<span className={str}>"System Design"</span>
							<span className={punct}>, </span>
							<span className={str}>"Product Thinking"</span>
							<span className={punct}>],</span>
							{"\n  "}
							<span className={prop}>tools</span>
							<span className={punct}>: [</span>
							<span className={str}>"React"</span>
							<span className={punct}>, </span>
							<span className={str}>"Node.js"</span>
							<span className={punct}>, </span>
							<span className={str}>"TypeScript"</span>
							<span className={punct}>, </span>
							<span className={str}>"PostgreSQL"</span>
							<span className={punct}>],</span>
							{"\n  "}
							<span className={prop}>philosophy</span>
							<span className={punct}>:</span>{" "}
							<span className={str}>
								"Architecture is about intent, not frameworks."
							</span>
							{"\n"}
							<span className={punct}>{"}"}</span>
							{"\n\n"}
							<span className={kw}>function</span>{" "}
							<span className="text-primary">buildSuccess</span>
							<span className={punct}>(input) {"{"}</span>
							{"\n  "}
							<span className={kw}>return</span>{" "}
							<span className={prop}>input</span>
							<span className={punct}>.quality === </span>
							<span className={str}>"High"</span>
							<span className={punct}> ? </span>
							<span className={str}>"Scalable"</span>
							<span className={punct}> : </span>
							<span className={str}>"Refactor"</span>
							{"\n"}
							<span className={punct}>{"}"}</span>
						</code>
					</pre>
				</motion.div>
			</div>
		</section>
	);
}
