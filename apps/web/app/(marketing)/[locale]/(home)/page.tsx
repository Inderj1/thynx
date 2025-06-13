import { Features } from "@marketing/home/components/Features";
import { Hero } from "@marketing/home/components/Hero";
import { PricingSection } from "@marketing/home/components/PricingSection";
import { MetricsSection } from "@marketing/home/components/MetricsSection";
import { HowItWorksSection } from "@marketing/home/components/HowItWorksSection";
import { CustomerStoriesSection } from "@marketing/home/components/CustomerStoriesSection";
import { DemoRequestSection } from "@marketing/home/components/DemoRequestSection";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<Hero />
			<MetricsSection />
			<Features />
			<HowItWorksSection />
			<CustomerStoriesSection />
			<PricingSection />
			<DemoRequestSection />
		</>
	);
}
