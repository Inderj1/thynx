"use client";

import { 
	Headphones,
	ShoppingCart,
	Building,
	Heart,
	Plane,
	GraduationCap,
	Landmark,
	Factory,
	ArrowRight
} from "lucide-react";
import { Button } from "@ui/components/button";
import { cn } from "@ui/lib";

const categories = [
	{
		icon: Headphones,
		title: "Customer Support Centers",
		description: "24/7 multilingual support with instant response times",
		features: [
			"Tier 1 & 2 support automation",
			"Intelligent ticket routing",
			"Sentiment analysis & escalation",
			"Knowledge base integration"
		],
		metrics: {
			reduction: "75%",
			satisfaction: "4.9/5"
		}
	},
	{
		icon: ShoppingCart,
		title: "E-commerce & Retail",
		description: "Handle order inquiries, returns, and product questions at scale",
		features: [
			"Order status & tracking",
			"Product recommendations",
			"Returns & refunds processing",
			"Inventory inquiries"
		],
		metrics: {
			reduction: "80%",
			satisfaction: "4.8/5"
		}
	},
	{
		icon: Heart,
		title: "Healthcare",
		description: "HIPAA-compliant patient support and appointment management",
		features: [
			"Appointment scheduling",
			"Insurance verification",
			"Prescription refills",
			"Medical records access"
		],
		metrics: {
			reduction: "70%",
			satisfaction: "4.9/5"
		}
	},
	{
		icon: Landmark,
		title: "Financial Services",
		description: "Secure banking support with PCI DSS compliance",
		features: [
			"Account inquiries",
			"Transaction disputes",
			"Fraud detection alerts",
			"Loan applications"
		],
		metrics: {
			reduction: "65%",
			satisfaction: "4.7/5"
		}
	},
	{
		icon: Plane,
		title: "Travel & Hospitality",
		description: "Booking management and travel support in 50+ languages",
		features: [
			"Reservation changes",
			"Flight status updates",
			"Loyalty program support",
			"Travel documentation"
		],
		metrics: {
			reduction: "72%",
			satisfaction: "4.8/5"
		}
	},
	{
		icon: Factory,
		title: "Telecommunications",
		description: "Technical support and service management at scale",
		features: [
			"Service troubleshooting",
			"Plan changes & upgrades",
			"Network status updates",
			"Device support"
		],
		metrics: {
			reduction: "78%",
			satisfaction: "4.6/5"
		}
	}
];

export function SolutionCategories() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Solutions for Every Industry
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						THNYX adapts to your industry's unique needs with specialized AI models and compliance standards
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{categories.map((category, idx) => (
						<div
							key={category.title}
							className={cn(
								"group p-6 rounded-2xl border bg-card hover:border-primary/50",
								"hover:shadow-xl transition-all duration-300 cursor-pointer",
								"animate-slide-up"
							)}
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<div className="flex items-start gap-4 mb-4">
								<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
									<category.icon className="h-6 w-6" />
								</div>
								<div>
									<h3 className="font-semibold text-lg mb-1">{category.title}</h3>
									<p className="text-sm text-muted-foreground">{category.description}</p>
								</div>
							</div>

							<ul className="space-y-2 mb-4">
								{category.features.map((feature) => (
									<li key={feature} className="flex items-start gap-2 text-sm">
										<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
										<span className="text-foreground/80">{feature}</span>
									</li>
								))}
							</ul>

							<div className="flex items-center justify-between pt-4 border-t">
								<div className="flex gap-4">
									<div>
										<div className="text-2xl font-bold text-primary">{category.metrics.reduction}</div>
										<div className="text-xs text-muted-foreground">Cost Reduction</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-primary">{category.metrics.satisfaction}</div>
										<div className="text-xs text-muted-foreground">Satisfaction</div>
									</div>
								</div>
								<ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<p className="text-muted-foreground mb-4">
						Don't see your industry? We customize solutions for any use case.
					</p>
					<Button variant="outline" asChild>
						<a href="/contact">
							Discuss Your Needs
							<ArrowRight className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}