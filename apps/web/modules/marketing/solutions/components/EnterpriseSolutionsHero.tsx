"use client";

import { Button } from "@ui/components/button";
import { 
	Building2,
	ArrowRight,
	CheckCircle,
	Users,
	TrendingUp,
	Shield,
	Globe,
	Zap
} from "lucide-react";
import { LocaleLink } from "@i18n/routing";

const benefits = [
	"Handle millions of calls simultaneously",
	"99.99% uptime SLA guarantee",
	"Enterprise-grade security & compliance",
	"Dedicated success team"
];

const stats = [
	{ value: "500+", label: "Enterprise Clients" },
	{ value: "50M+", label: "Calls Handled" },
	{ value: "99.9%", label: "Uptime SLA" },
	{ value: "24/7", label: "Support" }
];

export function EnterpriseSolutionsHero() {
	return (
		<section className="relative pt-32 pb-20 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
			
			<div className="container relative">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
							<Building2 className="h-4 w-4" />
							Enterprise Solutions
						</div>
						
						<h1 className="text-5xl md:text-6xl font-bold mb-6">
							AI Call Center Platform
							<span className="block mt-2 gradient-blue">Built for Enterprise Scale</span>
						</h1>
						
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
							Transform your customer service operations with THNYX's enterprise-grade AI platform. 
							Handle millions of calls, reduce costs by 70%, and deliver exceptional experiences at scale.
						</p>

						{/* Benefits list */}
						<div className="flex flex-wrap justify-center gap-4 mb-8">
							{benefits.map((benefit) => (
								<div key={benefit} className="flex items-center gap-2 text-sm">
									<CheckCircle className="h-4 w-4 text-success" />
									<span>{benefit}</span>
								</div>
							))}
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" asChild>
								<LocaleLink href="/#demo">
									Schedule Enterprise Demo
									<ArrowRight className="ml-2 h-4 w-4" />
								</LocaleLink>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<LocaleLink href="/contact">
									Talk to Sales
								</LocaleLink>
							</Button>
						</div>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
						{stats.map((stat, idx) => (
							<div 
								key={stat.label}
								className="text-center animate-scale-in"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								<div className="text-3xl md:text-4xl font-bold text-primary mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}