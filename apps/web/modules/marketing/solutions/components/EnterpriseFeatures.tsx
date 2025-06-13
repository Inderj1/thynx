"use client";

import { 
	Shield,
	Zap,
	Globe,
	Users,
	BarChart3,
	Workflow,
	Lock,
	CloudCog,
	CheckCircle
} from "lucide-react";
import { cn } from "@ui/lib";

const features = [
	{
		icon: Shield,
		title: "Enterprise Security",
		subtitle: "Bank-level protection for your data",
		description: "SOC 2 Type II, HIPAA, PCI DSS, and GDPR compliant with end-to-end encryption",
		highlights: [
			"Multi-factor authentication",
			"Role-based access control",
			"Audit logging & compliance reports",
			"Data residency options"
		]
	},
	{
		icon: Zap,
		title: "Unlimited Scale",
		subtitle: "Handle any volume instantly",
		description: "Auto-scaling infrastructure that handles millions of concurrent calls without degradation",
		highlights: [
			"Instant scaling up or down",
			"No capacity planning needed",
			"Geographic load balancing",
			"Zero downtime deployments"
		]
	},
	{
		icon: Globe,
		title: "Global Deployment",
		subtitle: "Serve customers worldwide",
		description: "Deploy across multiple regions with local compliance and language support",
		highlights: [
			"50+ language support",
			"Regional data centers",
			"Local phone numbers",
			"Cultural adaptation"
		]
	},
	{
		icon: Users,
		title: "Dedicated Support",
		subtitle: "Your success is our priority",
		description: "Enterprise success team with 24/7 support and guaranteed response times",
		highlights: [
			"Dedicated account manager",
			"24/7 priority support",
			"Custom training programs",
			"Quarterly business reviews"
		]
	},
	{
		icon: BarChart3,
		title: "Advanced Analytics",
		subtitle: "Data-driven insights",
		description: "Real-time dashboards and AI-powered insights to optimize performance",
		highlights: [
			"Custom KPI dashboards",
			"Predictive analytics",
			"API access to raw data",
			"White-label reporting"
		]
	},
	{
		icon: Workflow,
		title: "Custom Integrations",
		subtitle: "Fits your tech stack",
		description: "Seamless integration with your existing CRM, helpdesk, and business systems",
		highlights: [
			"100+ pre-built integrations",
			"Custom API development",
			"Webhook support",
			"Professional services team"
		]
	}
];

export function EnterpriseFeatures() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Zap className="h-4 w-4" />
						Enterprise-Grade Features
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Built for the World's
						<span className="gradient-blue"> Largest Organizations</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Every feature designed with enterprise needs in mind - security, scale, and reliability
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{features.map((feature, idx) => (
						<div
							key={feature.title}
							className={cn(
								"group relative p-6 rounded-2xl border bg-card",
								"hover:border-primary/50 hover:shadow-lg transition-all",
								"animate-slide-up"
							)}
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							{/* Icon */}
							<div className="mb-4">
								<div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
									<feature.icon className="h-6 w-6" />
								</div>
							</div>

							{/* Content */}
							<h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
							<p className="text-sm text-primary mb-3">{feature.subtitle}</p>
							<p className="text-muted-foreground mb-4">{feature.description}</p>

							{/* Highlights */}
							<ul className="space-y-2">
								{feature.highlights.map((highlight) => (
									<li key={highlight} className="flex items-start gap-2 text-sm">
										<CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">{highlight}</span>
									</li>
								))}
							</ul>

							{/* Hover effect */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
						</div>
					))}
				</div>

				{/* Additional enterprise benefits */}
				<div className="mt-16 rounded-2xl bg-primary/5 border border-primary/20 p-8 max-w-4xl mx-auto">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-2xl font-bold mb-4">
								White-Label Options Available
							</h3>
							<p className="text-muted-foreground mb-4">
								Deploy THNYX under your own brand with complete customization of UI, voice, and customer experience.
							</p>
							<ul className="space-y-2">
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle className="h-4 w-4 text-success" />
									<span>Custom branding & domains</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle className="h-4 w-4 text-success" />
									<span>Voice cloning for brand consistency</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle className="h-4 w-4 text-success" />
									<span>API-first architecture</span>
								</li>
							</ul>
						</div>
						<div className="flex items-center justify-center">
							<div className="relative">
								<div className="absolute inset-0 bg-primary/20 blur-3xl" />
								<Lock className="relative h-32 w-32 text-primary" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}