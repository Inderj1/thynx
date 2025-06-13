import { PricingSection } from "@marketing/home/components/PricingSection";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: "Pricing - THNYX AI Call Center",
		description: "Simple, transparent pricing for AI-powered call centers. Start with a 14-day free trial. No credit card required.",
	};
}

export default async function PricingPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Enhanced background */}
			<div className="absolute inset-0 gradient-mesh opacity-10" />
			<div className="absolute left-1/2 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2" />
			<div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
			
			<div className="relative pt-24">
				<PricingSection />
			</div>
		</div>
	);
}