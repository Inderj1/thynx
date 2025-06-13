"use client";

import { useState } from "react";
import { 
	Check, 
	Zap, 
	Building2, 
	Rocket,
	Phone,
	Calculator,
	ArrowRight,
	Info,
	Users,
	Infinity
} from "lucide-react";
import { cn } from "@ui/lib";
import { Button } from "@ui/components/button";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/tabs";

const pricingPlans = [
	{
		id: "starter",
		name: "Starter",
		description: "Perfect for growing businesses",
		icon: Rocket,
		price: {
			monthly: 2999,
			yearly: 29990,
			perCall: 0.10
		},
		limits: {
			calls: "Up to 10,000 calls/month",
			agents: "5 AI agents",
			languages: "10 languages"
		},
		features: [
			"AI voice agents",
			"Basic analytics dashboard",
			"Email & chat support",
			"Standard integrations",
			"99.5% uptime SLA",
			"Basic customization"
		],
		cta: "Start Free Trial",
		recommended: false
	},
	{
		id: "growth",
		name: "Growth",
		description: "For scaling call centers",
		icon: Zap,
		price: {
			monthly: 9999,
			yearly: 99990,
			perCall: 0.05
		},
		limits: {
			calls: "Up to 100,000 calls/month",
			agents: "25 AI agents",
			languages: "25 languages"
		},
		features: [
			"Everything in Starter",
			"Advanced analytics & insights",
			"Priority support",
			"Custom integrations",
			"99.9% uptime SLA",
			"Voice cloning",
			"A/B testing",
			"Dedicated success manager"
		],
		cta: "Start Free Trial",
		recommended: true
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "Unlimited scale & customization",
		icon: Building2,
		price: {
			custom: true
		},
		limits: {
			calls: "Unlimited calls",
			agents: "Unlimited agents",
			languages: "50+ languages"
		},
		features: [
			"Everything in Growth",
			"Custom AI model training",
			"White-label options",
			"On-premise deployment",
			"99.99% uptime SLA",
			"24/7 phone support",
			"Custom contracts",
			"Dedicated infrastructure",
			"Advanced security features"
		],
		cta: "Contact Sales",
		recommended: false
	}
];

export function PricingSection() {
	const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
	const [showCalculator, setShowCalculator] = useState(false);

	const yearlyDiscount = 17; // 17% discount for yearly billing

	return (
		<section id="pricing" className="py-20 relative overflow-hidden bg-muted/30">
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Zap className="h-4 w-4" />
						Transparent Pricing
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Pay Only for What You Use
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Start with a 14-day free trial. No credit card required. Scale as you grow.
					</p>
				</div>

				{/* Billing toggle */}
				<div className="flex justify-center mb-12">
					<Tabs value={billingInterval} onValueChange={(v) => setBillingInterval(v as "monthly" | "yearly")}>
						<TabsList className="bg-muted">
							<TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
							<TabsTrigger value="yearly" className="relative">
								Yearly Billing
								<span className="absolute -top-8 right-0 px-2 py-1 bg-success text-success-foreground text-xs rounded-full">
									Save {yearlyDiscount}%
								</span>
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>

				{/* Pricing cards */}
				<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
					{pricingPlans.map((plan) => (
						<div
							key={plan.id}
							className={cn(
								"relative rounded-2xl border bg-card p-8 transition-all duration-300",
								"hover:shadow-xl hover:scale-105",
								plan.recommended && "border-primary border-2 shadow-lg scale-105"
							)}
						>
							{plan.recommended && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
										Most Popular
									</span>
								</div>
							)}

							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
									<p className="text-muted-foreground text-sm">{plan.description}</p>
								</div>
								<plan.icon className="h-8 w-8 text-primary" />
							</div>

							{/* Pricing */}
							<div className="mb-6">
								{plan.price.custom ? (
									<div className="text-3xl font-bold">Custom Pricing</div>
								) : (
									<>
										<div className="flex items-baseline gap-1">
											<span className="text-4xl font-bold">
												${billingInterval === "monthly" ? plan.price.monthly.toLocaleString() : plan.price.yearly.toLocaleString()}
											</span>
											<span className="text-muted-foreground">/{billingInterval === "monthly" ? "month" : "year"}</span>
										</div>
										<div className="text-sm text-muted-foreground mt-1">
											+ ${plan.price.perCall} per call after limit
										</div>
									</>
								)}
							</div>

							{/* Limits */}
							<div className="space-y-2 mb-6 pb-6 border-b">
								<div className="flex items-center gap-2 text-sm">
									<Phone className="h-4 w-4 text-muted-foreground" />
									<span>{plan.limits.calls}</span>
								</div>
								<div className="flex items-center gap-2 text-sm">
									<Users className="h-4 w-4 text-muted-foreground" />
									<span>{plan.limits.agents}</span>
								</div>
								<div className="flex items-center gap-2 text-sm">
									<Building2 className="h-4 w-4 text-muted-foreground" />
									<span>{plan.limits.languages}</span>
								</div>
							</div>

							{/* Features */}
							<ul className="space-y-3 mb-8">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="flex items-start gap-3 text-sm">
										<Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">{feature}</span>
									</li>
								))}
							</ul>

							{/* CTA */}
							<Button
								className={cn(
									"w-full",
									plan.recommended ? "bg-primary hover:bg-primary/90" : ""
								)}
								variant={plan.recommended ? "default" : "outline"}
								asChild
							>
								<a href={plan.price.custom ? "/contact" : "/auth/signup"}>
									{plan.cta}
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
						</div>
					))}
				</div>

				{/* Volume pricing info */}
				<div className="max-w-4xl mx-auto">
					<div className="rounded-2xl bg-primary/5 border border-primary/20 p-8">
						<div className="flex items-start gap-4">
							<Info className="h-6 w-6 text-primary mt-1" />
							<div>
								<h3 className="text-lg font-semibold mb-2">Volume Discounts Available</h3>
								<p className="text-muted-foreground mb-4">
									Processing more than 100,000 calls per month? We offer custom pricing with significant discounts for high-volume customers.
								</p>
								<div className="flex flex-wrap gap-4">
									<Button variant="outline" onClick={() => setShowCalculator(true)}>
										<Calculator className="mr-2 h-4 w-4" />
										ROI Calculator
									</Button>
									<Button variant="outline" asChild>
										<a href="/contact">
											<Phone className="mr-2 h-4 w-4" />
											Talk to Sales
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Trust badges */}
				<div className="mt-12 text-center">
					<p className="text-sm text-muted-foreground mb-4">Trusted by leading enterprises</p>
					<div className="flex flex-wrap items-center justify-center gap-8">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Check className="h-4 w-4 text-success" />
							<span>14-day free trial</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Check className="h-4 w-4 text-success" />
							<span>No credit card required</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Check className="h-4 w-4 text-success" />
							<span>Cancel anytime</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Check className="h-4 w-4 text-success" />
							<span>99.9% uptime SLA</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}