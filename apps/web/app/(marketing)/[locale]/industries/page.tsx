import { IndustriesHero } from "@marketing/industries/components/IndustriesHero";
import { UseCasesSection } from "@marketing/home/components/UseCasesSection";
import { ComparisonSection } from "@marketing/home/components/ComparisonSection";
import { SecurityComplianceSection } from "@marketing/home/components/SecurityComplianceSection";
import { IndustriesCTA } from "@marketing/industries/components/IndustriesCTA";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: "Industries - THNYX AI Call Center Solutions",
		description: "Industry-specific AI call center solutions for healthcare, e-commerce, financial services, and more. Compliant, secure, and tailored to your needs.",
	};
}

export default async function IndustriesPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<IndustriesHero />
			<UseCasesSection />
			<SecurityComplianceSection />
			<ComparisonSection />
			<IndustriesCTA />
		</>
	);
}