"use client";

import { useState } from "react";
import { 
	ShoppingCart, 
	Heart, 
	Building2, 
	GraduationCap,
	Plane,
	CreditCard,
	ArrowRight,
	Users,
	Clock,
	TrendingUp,
	DollarSign
} from "lucide-react";
import { cn } from "@ui/lib";

const industries = [
	{
		id: "ecommerce",
		title: "E-commerce",
		icon: ShoppingCart,
		description: "Transform customer support for online retail",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
		metrics: {
			reduction: "73%",
			satisfaction: "4.9/5",
			resolution: "96%"
		},
		useCases: [
			"Order tracking & status updates",
			"Returns & refund processing",
			"Product recommendations",
			"Inventory inquiries",
			"Shipping support"
		],
		testimonial: {
			quote: "THNYX reduced our support tickets by 73% while improving customer satisfaction scores.",
			author: "Sarah Chen",
			role: "VP Operations, MegaStore"
		}
	},
	{
		id: "healthcare",
		title: "Healthcare",
		icon: Heart,
		description: "HIPAA-compliant patient support at scale",
		image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
		metrics: {
			reduction: "68%",
			satisfaction: "4.8/5",
			resolution: "94%"
		},
		useCases: [
			"Appointment scheduling",
			"Prescription refills",
			"Insurance verification",
			"Test result inquiries",
			"Provider directory"
		],
		testimonial: {
			quote: "We handle 10x more patient calls with the same budget. Game-changing for healthcare.",
			author: "Dr. Michael Ross",
			role: "CEO, HealthFirst Network"
		}
	},
	{
		id: "financial",
		title: "Financial Services",
		icon: CreditCard,
		description: "Secure, compliant support for banking & finance",
		image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
		metrics: {
			reduction: "71%",
			satisfaction: "4.7/5",
			resolution: "93%"
		},
		useCases: [
			"Account balance inquiries",
			"Transaction disputes",
			"Fraud alerts",
			"Loan applications",
			"Payment processing"
		],
		testimonial: {
			quote: "THNYX handles sensitive financial data with bank-level security. Impressive.",
			author: "James Liu",
			role: "CTO, SecureBank"
		}
	},
	{
		id: "travel",
		title: "Travel & Hospitality",
		icon: Plane,
		description: "24/7 multilingual support for global travelers",
		image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
		metrics: {
			reduction: "75%",
			satisfaction: "4.9/5",
			resolution: "97%"
		},
		useCases: [
			"Booking modifications",
			"Flight status updates",
			"Hotel reservations",
			"Travel insurance claims",
			"Loyalty program support"
		],
		testimonial: {
			quote: "50+ languages supported instantly. Our global customers love the experience.",
			author: "Maria Garcia",
			role: "Head of CX, WorldTravel"
		}
	}
];

export function UseCasesSection() {
	const [activeIndustry, setActiveIndustry] = useState(industries[0]);

	return (
		<section className="py-20 relative overflow-hidden">
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Building2 className="h-4 w-4" />
						Industry Solutions
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Built for Every Industry
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						THNYX adapts to your specific industry needs with pre-trained models and compliance built-in
					</p>
				</div>

				{/* Industry selector */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{industries.map((industry) => (
						<button
							key={industry.id}
							onClick={() => setActiveIndustry(industry)}
							className={cn(
								"flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300",
								activeIndustry.id === industry.id
									? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
									: "bg-card hover:bg-muted border-border"
							)}
						>
							<industry.icon className="h-5 w-5" />
							<span className="font-medium">{industry.title}</span>
						</button>
					))}
				</div>

				{/* Active industry content */}
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Left side - Details */}
					<div className="space-y-8">
						<div>
							<h3 className="text-3xl font-bold mb-3 flex items-center gap-3">
								<activeIndustry.icon className="h-8 w-8 text-primary" />
								{activeIndustry.title}
							</h3>
							<p className="text-lg text-muted-foreground">
								{activeIndustry.description}
							</p>
						</div>

						{/* Metrics */}
						<div className="grid grid-cols-3 gap-4">
							<div className="p-4 rounded-lg bg-card border border-border">
								<DollarSign className="h-5 w-5 text-primary mb-2" />
								<div className="text-2xl font-bold">{activeIndustry.metrics.reduction}</div>
								<div className="text-sm text-muted-foreground">Cost Reduction</div>
							</div>
							<div className="p-4 rounded-lg bg-card border border-border">
								<Users className="h-5 w-5 text-primary mb-2" />
								<div className="text-2xl font-bold">{activeIndustry.metrics.satisfaction}</div>
								<div className="text-sm text-muted-foreground">Satisfaction</div>
							</div>
							<div className="p-4 rounded-lg bg-card border border-border">
								<TrendingUp className="h-5 w-5 text-primary mb-2" />
								<div className="text-2xl font-bold">{activeIndustry.metrics.resolution}</div>
								<div className="text-sm text-muted-foreground">Resolution Rate</div>
							</div>
						</div>

						{/* Use cases */}
						<div>
							<h4 className="font-semibold mb-4">Common Use Cases</h4>
							<div className="space-y-2">
								{activeIndustry.useCases.map((useCase, idx) => (
									<div
										key={idx}
										className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 animate-slide-up"
										style={{ animationDelay: `${idx * 50}ms` }}
									>
										<div className="w-2 h-2 rounded-full bg-primary" />
										<span className="text-foreground/80">{useCase}</span>
									</div>
								))}
							</div>
						</div>

						{/* Testimonial */}
						<div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
							<p className="text-lg italic mb-4">"{activeIndustry.testimonial.quote}"</p>
							<div>
								<div className="font-semibold">{activeIndustry.testimonial.author}</div>
								<div className="text-sm text-muted-foreground">{activeIndustry.testimonial.role}</div>
							</div>
						</div>
					</div>

					{/* Right side - Image and CTA */}
					<div className="space-y-6">
						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<img
								src={activeIndustry.image}
								alt={activeIndustry.title}
								className="w-full h-[400px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
								<h4 className="text-2xl font-bold mb-2">
									Transform Your {activeIndustry.title} Call Center
								</h4>
								<p className="text-white/80 mb-4">
									Join industry leaders already using THNYX
								</p>
								<a
									href={`/industries/${activeIndustry.id}`}
									className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-foreground font-medium hover:bg-white/90 transition-colors"
								>
									Learn More
									<ArrowRight className="h-4 w-4" />
								</a>
							</div>
						</div>

						{/* Industry-specific CTA */}
						<div className="p-6 rounded-xl bg-card border border-border">
							<h4 className="font-semibold mb-2">Ready for {activeIndustry.title}?</h4>
							<p className="text-sm text-muted-foreground mb-4">
								Get a custom demo tailored to your industry needs
							</p>
							<a
								href="/demo"
								className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
							>
								Book Industry Demo
								<ArrowRight className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom stats */}
				<div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
					<h3 className="text-2xl font-bold mb-6">Trusted Across Industries</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div>
							<div className="text-3xl font-bold gradient-blue">12+</div>
							<div className="text-sm text-muted-foreground">Industries Served</div>
						</div>
						<div>
							<div className="text-3xl font-bold gradient-blue">500+</div>
							<div className="text-sm text-muted-foreground">Enterprise Clients</div>
						</div>
						<div>
							<div className="text-3xl font-bold gradient-blue">50M+</div>
							<div className="text-sm text-muted-foreground">Calls Handled</div>
						</div>
						<div>
							<div className="text-3xl font-bold gradient-blue">99.9%</div>
							<div className="text-sm text-muted-foreground">Uptime SLA</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}