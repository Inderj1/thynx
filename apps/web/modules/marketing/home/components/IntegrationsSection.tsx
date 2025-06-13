"use client";

import { useState } from "react";
import Image from "next/image";
import { 
	Zap,
	Check,
	ArrowRight,
	Code,
	Webhook,
	Database,
	Cloud,
	Workflow,
	Shield,
	Sparkles
} from "lucide-react";
import { Button } from "@ui/components/button";
import { cn } from "@ui/lib";

const integrationCategories = [
	{
		id: "crm",
		name: "CRM Systems",
		icon: Database,
		integrations: [
			{ name: "Salesforce", logo: "/integrations/salesforce.svg", popular: true },
			{ name: "HubSpot", logo: "/integrations/hubspot.svg", popular: true },
			{ name: "Pipedrive", logo: "/integrations/pipedrive.svg" },
			{ name: "Zoho CRM", logo: "/integrations/zoho.svg" },
			{ name: "Microsoft Dynamics", logo: "/integrations/dynamics.svg" },
			{ name: "Monday.com", logo: "/integrations/monday.svg" }
		]
	},
	{
		id: "communication",
		name: "Communication",
		icon: Workflow,
		integrations: [
			{ name: "Slack", logo: "/integrations/slack.svg", popular: true },
			{ name: "Microsoft Teams", logo: "/integrations/teams.svg", popular: true },
			{ name: "Discord", logo: "/integrations/discord.svg" },
			{ name: "Twilio", logo: "/integrations/twilio.svg" },
			{ name: "SendGrid", logo: "/integrations/sendgrid.svg" },
			{ name: "WhatsApp Business", logo: "/integrations/whatsapp.svg" }
		]
	},
	{
		id: "helpdesk",
		name: "Help Desk",
		icon: Shield,
		integrations: [
			{ name: "Zendesk", logo: "/integrations/zendesk.svg", popular: true },
			{ name: "Intercom", logo: "/integrations/intercom.svg", popular: true },
			{ name: "Freshdesk", logo: "/integrations/freshdesk.svg" },
			{ name: "ServiceNow", logo: "/integrations/servicenow.svg" },
			{ name: "Jira Service", logo: "/integrations/jira.svg" },
			{ name: "Help Scout", logo: "/integrations/helpscout.svg" }
		]
	},
	{
		id: "analytics",
		name: "Analytics",
		icon: Cloud,
		integrations: [
			{ name: "Google Analytics", logo: "/integrations/google-analytics.svg" },
			{ name: "Mixpanel", logo: "/integrations/mixpanel.svg" },
			{ name: "Segment", logo: "/integrations/segment.svg" },
			{ name: "Amplitude", logo: "/integrations/amplitude.svg" },
			{ name: "Datadog", logo: "/integrations/datadog.svg" },
			{ name: "New Relic", logo: "/integrations/newrelic.svg" }
		]
	}
];

const features = [
	{
		icon: Zap,
		title: "One-Click Setup",
		description: "Connect your tools in minutes, not days"
	},
	{
		icon: Webhook,
		title: "Real-time Sync",
		description: "Keep all your data synchronized across platforms"
	},
	{
		icon: Code,
		title: "API-First Design",
		description: "Build custom integrations with our REST API"
	}
];

export function IntegrationsSection() {
	const [selectedCategory, setSelectedCategory] = useState("crm");
	const activeCategory = integrationCategories.find(cat => cat.id === selectedCategory);

	return (
		<section id="integrations" className="py-20 relative overflow-hidden">
			<div className="container">
				{/* Section header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Workflow className="h-4 w-4" />
						Seamless Integrations
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Works With Your
						<span className="gradient-blue"> Existing Tools</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						THNYX integrates with 100+ platforms to create a unified customer service ecosystem
					</p>
				</div>

				{/* Features */}
				<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
					{features.map((feature, idx) => (
						<div 
							key={feature.title}
							className="text-center animate-slide-up"
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
								<feature.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">{feature.title}</h3>
							<p className="text-sm text-muted-foreground">{feature.description}</p>
						</div>
					))}
				</div>

				{/* Category tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{integrationCategories.map((category) => (
						<button
							key={category.id}
							onClick={() => setSelectedCategory(category.id)}
							className={cn(
								"flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
								"font-medium text-sm",
								selectedCategory === category.id
									? "bg-primary text-primary-foreground"
									: "bg-muted hover:bg-muted/80"
							)}
						>
							<category.icon className="h-4 w-4" />
							{category.name}
						</button>
					))}
				</div>

				{/* Integration grid */}
				<div className="max-w-5xl mx-auto mb-12">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{activeCategory?.integrations.map((integration, idx) => (
							<div
								key={integration.name}
								className={cn(
									"relative group p-4 rounded-xl border bg-card",
									"hover:border-primary/50 hover:shadow-lg transition-all",
									"animate-scale-in cursor-pointer",
									integration.popular && "border-primary/30"
								)}
								style={{ animationDelay: `${idx * 50}ms` }}
							>
								{integration.popular && (
									<div className="absolute -top-2 -right-2">
										<div className="flex items-center gap-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
											<Sparkles className="h-3 w-3" />
											Popular
										</div>
									</div>
								)}
								
								{/* Logo placeholder */}
								<div className="aspect-square rounded-lg bg-muted mb-3 flex items-center justify-center">
									<div className="text-2xl font-bold text-muted-foreground">
										{integration.name.substring(0, 2).toUpperCase()}
									</div>
								</div>
								
								<div className="text-center">
									<div className="font-medium text-sm">{integration.name}</div>
									<div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
										<Check className="h-4 w-4 text-success mx-auto" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* API section */}
				<div className="max-w-4xl mx-auto">
					<div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-bold mb-4">
									Build Custom Integrations
								</h3>
								<p className="text-muted-foreground mb-6">
									Can't find your tool? Use our REST API and webhooks to create custom integrations in minutes. Full documentation and SDKs available.
								</p>
								<div className="flex flex-wrap gap-4">
									<Button asChild>
										<a href="/docs/api">
											View API Docs
											<ArrowRight className="ml-2 h-4 w-4" />
										</a>
									</Button>
									<Button variant="outline" asChild>
										<a href="/contact">
											Request Integration
										</a>
									</Button>
								</div>
							</div>
							<div className="relative">
								<div className="rounded-lg bg-card border p-6 font-mono text-sm">
									<div className="text-muted-foreground mb-2">// Quick integration example</div>
									<div>
										<span className="text-primary">const</span> thnyx = 
										<span className="text-primary"> new</span> THNYX({`{`}
									</div>
									<div className="ml-4">
										apiKey: <span className="text-success">'your-api-key'</span>
									</div>
									<div>{`}`});</div>
									<div className="mt-4">
										<span className="text-primary">await</span> thnyx.calls.
										<span className="text-warning">create</span>({`{`}
									</div>
									<div className="ml-4">to: <span className="text-success">'+1234567890'</span>,</div>
									<div className="ml-4">agent: <span className="text-success">'sales-bot'</span></div>
									<div>{`}`});</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12">
					<p className="text-muted-foreground mb-4">
						Don't see your tool? We add new integrations every week.
					</p>
					<Button variant="outline" asChild>
						<a href="/integrations">
							View All Integrations
							<ArrowRight className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}