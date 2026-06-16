import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "#/pages/experience";

export const Route = createFileRoute("/experience")({
	component: ExperiencePage,
});
