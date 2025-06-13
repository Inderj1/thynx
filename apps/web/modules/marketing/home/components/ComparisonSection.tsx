"use client";

import { 
	Check,
	X,
	Zap,
	TrendingUp,
	DollarSign,
	Clock,
	Users,
	Shield,
	Globe,
	HeadphonesIcon,
	BarChart3,
	Sparkles
} from "lucide-react";
import { Button } from "@ui/components/button";
import { cn } from "@ui/lib";

const comparisonData = [
	{
		category: "Cost & Economics",
		icon: DollarSign,
		items: [
			{
				feature: "Setup Cost",
				thnyx: "$0 - Pay as you go",
				traditional: "$50,000 - $200,000",
				thynyxBetter: true
			},
			{
				feature: "Cost per Call",
				thnyx: "$0.10 - $0.50",
				traditional: "$3.50 - $8.00",
				thynyxBetter: true
			},
			{
				feature: "Monthly Operating Cost",
				thnyx: "70% lower on average",
				traditional: "High fixed costs",
				thynyxBetter: true
			},
			{
				feature: "ROI Timeline",
				thnyx: "< 30 days",
				traditional: "12-18 months",
				thynyxBetter: true
			}
		]
	},
	{
		category: "Performance & Scale",
		icon: TrendingUp,
		items: [
			{
				feature: "Average Handle Time",
				thnyx: "2.5 minutes",
				traditional: "6-8 minutes",
				thynyxBetter: true
			},
			{
				feature: "First Call Resolution",
				thnyx: "85%+",
				traditional: "70%",
				thynyxBetter: true
			},
			{
				feature: "Scalability",
				thnyx: "Instant, unlimited",
				traditional: "Months to scale",
				thynyxBetter: true
			},
			{
				feature: "Peak Handling",
				thnyx: "No limits",
				traditional: "Limited by staff",
				thynyxBetter: true
			}
		]
	},
	{
		category: "Operations",
		icon: Clock,
		items: [
			{
				feature: "Available Hours",
				thnyx: "24/7/365",
				traditional: "Business hours",
				thynyxBetter: true
			},
			{
				feature: "Setup Time",
				thnyx: "7 days",
				traditional: "3-6 months",
				thynyxBetter: true
			},
			{
				feature: "Training Required",
				thnyx: "Automated AI training",
				traditional: "4-6 weeks per agent",
				thynyxBetter: true
			},
			{
				feature: "Language Support",
				thnyx: "50+ languages",
				traditional: "Limited by staff",
				thynyxBetter: true
			}
		]
	},
	{
		category: "Customer Experience",
		icon: HeadphonesIcon,
		items: [
			{
				feature: "Wait Time",
				thnyx: "< 5 seconds",
				traditional: "2-5 minutes",
				thynyxBetter: true
			},
			{
				feature: "Consistency",
				thnyx: "100% consistent",
				traditional: "Varies by agent",
				thynyxBetter: true
			},
			{
				feature: "Personalization",
				thnyx: "AI-powered insights",
				traditional: "Limited",
				thynyxBetter: true
			},
			{
				feature: "Satisfaction Score",
				thnyx: "4.8/5 average",
				traditional: "3.5/5 average",
				thynyxBetter: true
			}
		]
	}
];

const keyBenefits = [
	{
		icon: Sparkles,
		title: "70% Cost Reduction",
		description: "Dramatically lower your call center expenses"
	},
	{
		icon: Globe,
		title: "Global Scale",
		description: "Handle millions of calls in any language"
	},
	{
		icon: Shield,
		title: "Enterprise Security",
		description: "Bank-level security and compliance"
	},
	{
		icon: BarChart3,
		title: "Real-time Analytics",
		description: "AI-powered insights and optimization"
	}
];

export function ComparisonSection() {
	return (
		<section id="comparison" className="py-20 relative overflow-hidden bg-muted/30">
			<div className="container">
				{/* Section header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Zap className="h-4 w-4" />
						Side-by-Side Comparison
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						THNYX vs Traditional Call Centers
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						See why leading companies are switching to AI-powered customer service
					</p>
				</div>

				{/* Comparison tables */}
				<div className="space-y-8 max-w-5xl mx-auto mb-12">
					{comparisonData.map((category, categoryIdx) => (
						<div 
							key={category.category}
							className="animate-slide-up"
							style={{ animationDelay: `${categoryIdx * 100}ms` }}
						>
							{/* Category header */}
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 rounded-lg bg-primary/10">
									<category.icon className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">{category.category}</h3>
							</div>

							{/* Comparison table */}
							<div className="rounded-xl border bg-card overflow-hidden">
								<div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 border-b font-medium">
									<div>Feature</div>
									<div className="text-center">
										<div className="inline-flex items-center gap-2">
											<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
												<span className="text-primary-foreground font-bold text-sm">T</span>
											</div>
											THNYX AI
										</div>
									</div>
									<div className="text-center">Traditional Call Center</div>
								</div>

								{category.items.map((item, idx) => (
									<div 
										key={item.feature}
										className={cn(
											"grid grid-cols-3 gap-4 p-4",
											idx !== category.items.length - 1 && "border-b"
										)}
									>
										<div className="font-medium">{item.feature}</div>
										<div className="text-center">
											<div className={cn(
												"inline-flex items-center gap-2",
												item.thynyxBetter && "text-success font-medium"
											)}>
												{item.thynyxBetter && <Check className="h-4 w-4" />}
												{item.thnyx}
											</div>
										</div>
										<div className="text-center text-muted-foreground">
											{item.traditional}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Key benefits */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
					{keyBenefits.map((benefit, idx) => (
						<div 
							key={benefit.title}
							className="text-center animate-scale-in"
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
								<benefit.icon className="h-6 w-6 text-primary" />
							</div>
							<h4 className="font-semibold mb-2">{benefit.title}</h4>
							<p className="text-sm text-muted-foreground">{benefit.description}</p>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center">
					<div className="inline-flex flex-col sm:flex-row gap-4 items-center">
						<Button size="lg" asChild>
							<a href="/#demo">
								See the Difference
								<Sparkles className="ml-2 h-4 w-4" />
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="/roi-calculator">
								Calculate Your Savings
								<DollarSign className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}