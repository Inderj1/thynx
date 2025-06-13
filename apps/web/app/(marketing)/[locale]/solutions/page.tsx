import { EnterpriseSolutionsHero } from "@marketing/solutions/components/EnterpriseSolutionsHero";
import { SolutionCategories } from "@marketing/solutions/components/SolutionCategories";
import { EnterpriseFeatures } from "@marketing/solutions/components/EnterpriseFeatures";
import { ROICalculator } from "@marketing/solutions/components/ROICalculator";
import { ImplementationProcess } from "@marketing/solutions/components/ImplementationProcess";
import { EnterpriseCTA } from "@marketing/solutions/components/EnterpriseCTA";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: "Enterprise Solutions - THNYX AI Call Center Platform",
		description: "Transform your enterprise call center with THNYX's AI-powered solution. Handle millions of calls, reduce costs by 70%, and scale instantly.",
	};
}

export default async function SolutionsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<EnterpriseSolutionsHero />
			<SolutionCategories />
			<EnterpriseFeatures />
			<ROICalculator />
			<ImplementationProcess />
			<EnterpriseCTA />
		</>
	);
}