import { TechnologyHero } from "@marketing/technology/components/TechnologyHero";
import { AITechnologySection } from "@marketing/home/components/AITechnologySection";
import { IntegrationsSection } from "@marketing/home/components/IntegrationsSection";
import { TechnologyCTA } from "@marketing/technology/components/TechnologyCTA";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: "Technology - THNYX AI Platform",
		description: "Cutting-edge AI technology powering the future of call centers. Proprietary NLP, real-time processing, and seamless integrations.",
	};
}

export default async function TechnologyPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<TechnologyHero />
			<AITechnologySection />
			<IntegrationsSection />
			<TechnologyCTA />
		</>
	);
}