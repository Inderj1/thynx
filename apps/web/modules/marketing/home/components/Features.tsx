"use client";

import { cn } from "@ui/lib";
import {
	Brain,
	Mic,
	BarChart3,
	Globe2,
	Zap,
	Shield,
	Users,
	Sparkles,
	HeadphonesIcon,
	MessageSquare,
	TrendingUp,
	Clock,
	Languages,
	Workflow,
	Database,
	CheckCircle
} from "lucide-react";
import { type JSXElementConstructor, type ReactNode, useState } from "react";

export const featureTabs: Array<{
	id: string;
	title: string;
	icon: JSXElementConstructor<any>;
	subtitle?: string;
	description?: ReactNode;
	stats?: {
		value: string;
		label: string;
	};
	highlights?: {
		title: string;
		description: string;
		icon: JSXElementConstructor<any>;
	}[];
}> = [
	{
		id: "ai-agents",
		title: "AI Agents",
		icon: Brain,
		subtitle: "Human-like conversations at scale",
		description:
			"Our proprietary AI agents handle complex conversations with empathy and context awareness, delivering exceptional customer experiences 24/7.",
		stats: {
			value: "99.2%",
			label: "Accuracy Rate"
		},
		highlights: [
			{
				title: "Natural Conversations",
				description: "Indistinguishable from human agents with context-aware responses",
				icon: MessageSquare,
			},
			{
				title: "Emotion Recognition",
				description: "Detects customer sentiment and adjusts tone accordingly",
				icon: HeadphonesIcon,
			},
			{
				title: "Continuous Learning",
				description: "Improves with every interaction using reinforcement learning",
				icon: TrendingUp,
			},
		],
	},
	{
		id: "voice-intelligence",
		title: "Voice Intelligence",
		icon: Mic,
		subtitle: "Crystal-clear voice interactions",
		description:
			"Advanced voice synthesis and recognition technology that sounds natural, understands accents, and handles interruptions seamlessly.",
		stats: {
			value: "50ms",
			label: "Response Latency"
		},
		highlights: [
			{
				title: "Natural Voice Synthesis",
				description: "Choose from 100+ voices or clone your brand voice",
				icon: Sparkles,
			},
			{
				title: "Accent Recognition",
				description: "Understands and adapts to regional accents and dialects",
				icon: Globe2,
			},
			{
				title: "Real-time Processing",
				description: "No awkward pauses - conversations flow naturally",
				icon: Zap,
			},
		],
	},
	{
		id: "analytics",
		title: "Analytics & Insights",
		icon: BarChart3,
		subtitle: "Data-driven optimization",
		description:
			"Real-time dashboards and AI-powered insights help you understand customer needs, optimize operations, and drive continuous improvement.",
		stats: {
			value: "300+",
			label: "Metrics Tracked"
		},
		highlights: [
			{
				title: "Performance Metrics",
				description: "Track resolution rates, satisfaction scores, and cost savings",
				icon: TrendingUp,
			},
			{
				title: "Predictive Analytics",
				description: "Forecast call volumes and optimize staffing automatically",
				icon: Brain,
			},
			{
				title: "Custom Reports",
				description: "Build dashboards tailored to your business KPIs",
				icon: Database,
			},
		],
	},
	{
		id: "integrations",
		title: "Integrations",
		icon: Workflow,
		subtitle: "Seamless ecosystem connectivity",
		description:
			"Connect THNYX to your existing tech stack in minutes. Pre-built integrations with 100+ platforms and a flexible API for custom needs.",
		stats: {
			value: "100+",
			label: "Integrations"
		},
		highlights: [
			{
				title: "CRM Integration",
				description: "Sync with Salesforce, HubSpot, and more for unified data",
				icon: Database,
			},
			{
				title: "Omnichannel Support",
				description: "Phone, chat, email, SMS - all in one platform",
				icon: MessageSquare,
			},
			{
				title: "API-First Design",
				description: "RESTful APIs and webhooks for custom integrations",
				icon: Zap,
			},
		],
	},
	{
		id: "multilingual",
		title: "Global Scale",
		icon: Globe2,
		subtitle: "Serve customers worldwide",
		description:
			"Break language barriers with real-time translation and localization. Support customers in 50+ languages with native-level fluency.",
		stats: {
			value: "50+",
			label: "Languages"
		},
		highlights: [
			{
				title: "Real-time Translation",
				description: "Instant translation maintains conversation flow",
				icon: Languages,
			},
			{
				title: "Cultural Adaptation",
				description: "Responses adapted to local customs and preferences",
				icon: Globe2,
			},
			{
				title: "24/7 Global Support",
				description: "Round-the-clock availability across all time zones",
				icon: Clock,
			},
		],
	},
	{
		id: "security",
		title: "Enterprise Security",
		icon: Shield,
		subtitle: "Bank-level protection built-in",
		description:
			"Enterprise-grade security with SOC 2, HIPAA, and PCI compliance. Your data is encrypted, isolated, and never used for training.",
		stats: {
			value: "100%",
			label: "Compliant"
		},
		highlights: [
			{
				title: "Data Encryption",
				description: "End-to-end encryption for all communications",
				icon: Shield,
			},
			{
				title: "Compliance Ready",
				description: "Pre-certified for major industry standards",
				icon: CheckCircle,
			},
			{
				title: "Zero Data Retention",
				description: "Your data stays yours - we never store or train on it",
				icon: Database,
			},
		],
	},
];

export function Features() {
	const [selectedTab, setSelectedTab] = useState(featureTabs[0].id);
	const activeFeature = featureTabs.find(tab => tab.id === selectedTab) || featureTabs[0];

	return (
		<section id="features" className="py-20 relative overflow-hidden noise-overlay">
			{/* Enhanced background */}
			<div className="absolute inset-0 gradient-mesh opacity-20" />
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
			<div className="absolute left-0 top-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />
			<div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
			
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Zap className="h-4 w-4" />
						Platform Features
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Everything You Need to
						<span className="gradient-blue"> Transform Call Centers</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Cutting-edge AI technology designed for enterprise scale and reliability
					</p>
				</div>

				{/* Feature tabs - Desktop */}
				<div className="hidden lg:flex justify-center mb-12">
					<div className="inline-flex p-1 rounded-xl bg-muted/50 border border-border">
						{featureTabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								onClick={() => setSelectedTab(tab.id)}
								className={cn(
									"flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300",
									"font-medium text-sm",
									selectedTab === tab.id
										? "bg-primary text-primary-foreground shadow-lg"
										: "text-foreground/60 hover:text-foreground"
								)}
							>
								<tab.icon className="h-4 w-4" />
								<span>{tab.title}</span>
							</button>
						))}
					</div>
				</div>

				{/* Feature tabs - Mobile */}
				<div className="lg:hidden mb-8">
					<div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
						{featureTabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								onClick={() => setSelectedTab(tab.id)}
								className={cn(
									"flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all",
									"font-medium text-sm border",
									selectedTab === tab.id
										? "bg-primary text-primary-foreground border-primary"
										: "bg-card border-border"
								)}
							>
								<tab.icon className="h-4 w-4" />
								<span>{tab.title}</span>
							</button>
						))}
					</div>
				</div>

				{/* Active feature content */}
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left content */}
						<div className="space-y-6">
							<div>
								<h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
									<activeFeature.icon className="h-8 w-8 text-primary" />
									{activeFeature.title}
								</h3>
								<p className="text-xl text-muted-foreground">
									{activeFeature.subtitle}
								</p>
							</div>

							<p className="text-lg text-foreground/80">
								{activeFeature.description}
							</p>

							{activeFeature.stats && (
								<div className="inline-flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
									<div>
										<div className="text-3xl font-bold text-primary">
											{activeFeature.stats.value}
										</div>
										<div className="text-sm text-muted-foreground">
											{activeFeature.stats.label}
										</div>
									</div>
								</div>
							)}

							{/* Highlights */}
							<div className="space-y-4">
								{activeFeature.highlights?.map((highlight, idx) => (
									<div
										key={highlight.title}
										className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all animate-slide-up"
										style={{ animationDelay: `${idx * 100}ms` }}
									>
										<div className="p-2 rounded-lg bg-primary/10 h-fit">
											<highlight.icon className="h-5 w-5 text-primary" />
										</div>
										<div>
											<h4 className="font-semibold mb-1">{highlight.title}</h4>
											<p className="text-sm text-muted-foreground">
												{highlight.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right visual */}
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl" />
							<div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
								{/* Feature-specific visualization */}
								{selectedTab === "ai-agents" && (
									<div className="space-y-4">
										<div className="p-4 rounded-lg bg-muted animate-pulse">
											<div className="flex items-start gap-3">
												<Users className="h-5 w-5 text-muted-foreground mt-1" />
												<div className="flex-1">
													<div className="h-4 bg-muted-foreground/20 rounded w-3/4 mb-2" />
													<div className="h-3 bg-muted-foreground/20 rounded w-full" />
												</div>
											</div>
										</div>
										<div className="p-4 rounded-lg bg-primary/10">
											<div className="flex items-start gap-3">
												<Brain className="h-5 w-5 text-primary mt-1" />
												<div className="flex-1">
													<div className="font-medium mb-1">AI Agent Response</div>
													<div className="text-sm text-muted-foreground">
														Understanding context and providing personalized solutions...
													</div>
												</div>
											</div>
										</div>
									</div>
								)}

								{selectedTab === "voice-intelligence" && (
									<div className="space-y-6">
										<div className="flex items-center justify-center">
											<div className="relative">
												<div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
													<Mic className="h-12 w-12 text-primary" />
												</div>
												<div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
											</div>
										</div>
										<div className="space-y-2">
											<div className="h-2 bg-primary/20 rounded-full overflow-hidden">
												<div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "60%" }} />
											</div>
											<div className="h-2 bg-primary/20 rounded-full overflow-hidden">
												<div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "80%" }} />
											</div>
											<div className="h-2 bg-primary/20 rounded-full overflow-hidden">
												<div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "45%" }} />
											</div>
										</div>
									</div>
								)}

								{selectedTab === "analytics" && (
									<div className="space-y-4">
										<div className="grid grid-cols-2 gap-4">
											<div className="p-4 rounded-lg bg-muted text-center">
												<TrendingUp className="h-6 w-6 text-success mx-auto mb-2" />
												<div className="text-2xl font-bold">98.5%</div>
												<div className="text-xs text-muted-foreground">Resolution Rate</div>
											</div>
											<div className="p-4 rounded-lg bg-muted text-center">
												<Clock className="h-6 w-6 text-primary mx-auto mb-2" />
												<div className="text-2xl font-bold">1.2min</div>
												<div className="text-xs text-muted-foreground">Avg Handle Time</div>
											</div>
										</div>
										<div className="p-4 rounded-lg bg-primary/10">
											<BarChart3 className="h-5 w-5 text-primary mb-2" />
											<div className="space-y-2">
												<div className="flex justify-between text-sm">
													<span>Customer Satisfaction</span>
													<span className="font-medium">4.8/5</span>
												</div>
												<div className="h-2 bg-primary/20 rounded-full overflow-hidden">
													<div className="h-full bg-primary rounded-full" style={{ width: "96%" }} />
												</div>
											</div>
										</div>
									</div>
								)}

								{(selectedTab === "integrations" || selectedTab === "multilingual" || selectedTab === "security") && (
									<div className="grid grid-cols-3 gap-4">
										{[...Array(9)].map((_, i) => (
											<div key={i} className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center">
												<activeFeature.icon className="h-8 w-8 text-muted-foreground/30" />
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="mt-16 text-center">
					<a
						href="/features"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
					>
						Explore All Features
						<Sparkles className="h-5 w-5" />
					</a>
				</div>
			</div>
		</section>
	);
}