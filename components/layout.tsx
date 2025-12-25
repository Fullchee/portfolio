"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./footer";
import Header from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		// firefox default background isn't white
		<div className="bg-white">
			<Header />
			<div className="min-h-screen max-w-6xl mx-auto pt-8 px-6 md:px-24">
				<main>{children}</main>
			</div>
			<Footer />
			<SpeedInsights />
			<Analytics />
		</div>
	);
};

export default Layout;
