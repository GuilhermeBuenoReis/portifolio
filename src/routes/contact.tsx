import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "#/pages/contact";

export const Route = createFileRoute("/contact")({
	component: ContactPage,
});
