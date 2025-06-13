import { ResourcesHero } from "@marketing/resources/components/ResourcesHero";
import { FaqSection } from "@marketing/home/components/FaqSection";
import { ResourcesCTA } from "@marketing/resources/components/ResourcesCTA";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: "Resources - THNYX Learning Center",
		description: "AI call center resources, guides, whitepapers, and best practices. Learn how to implement and scale AI-powered customer service.",
	};
}

export default async function ResourcesPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<ResourcesHero />
			<FaqSection />
			<ResourcesCTA />
		</>
	);
}