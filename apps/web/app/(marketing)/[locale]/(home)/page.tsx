import { FaqSection } from "@marketing/home/components/FaqSection";
import { Features } from "@marketing/home/components/Features";
import { Hero } from "@marketing/home/components/Hero";
import { Newsletter } from "@marketing/home/components/Newsletter";
import { PricingSection } from "@marketing/home/components/PricingSection";
import { MetricsSection } from "@marketing/home/components/MetricsSection";
import { HowItWorksSection } from "@marketing/home/components/HowItWorksSection";
import { UseCasesSection } from "@marketing/home/components/UseCasesSection";
import { AITechnologySection } from "@marketing/home/components/AITechnologySection";
import { SecurityComplianceSection } from "@marketing/home/components/SecurityComplianceSection";
import { CustomerStoriesSection } from "@marketing/home/components/CustomerStoriesSection";
import { DemoRequestSection } from "@marketing/home/components/DemoRequestSection";
import { IntegrationsSection } from "@marketing/home/components/IntegrationsSection";
import { ComparisonSection } from "@marketing/home/components/ComparisonSection";
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
			<HowItWorksSection />
			<UseCasesSection />
			<CustomerStoriesSection />
			<AITechnologySection />
			<SecurityComplianceSection />
			<Features />
			<IntegrationsSection />
			<ComparisonSection />
			<PricingSection />
			<DemoRequestSection />
			<FaqSection />
			<Newsletter />
		</>
	);
}
