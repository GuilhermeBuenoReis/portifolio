import { Outlet } from "@tanstack/react-router";
import { Footer } from "./footer";
import { Header } from "./header";
import { MobileBottomNavigation } from "./mobile-bottom-navigation";

export function MainLayout() {
	return (
		<>
			<Header />
			<main className="pt-16">
				<Outlet />
			</main>
			<Footer />
			<MobileBottomNavigation />
		</>
	);
}
