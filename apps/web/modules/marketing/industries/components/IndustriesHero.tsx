"use client";

import { Button } from "@ui/components/button";
import { 
	Building2,
	ArrowRight,
	CheckCircle,
	Heart,
	ShoppingCart,
	Plane,
	Landmark,
	Factory
} from "lucide-react";
import { LocaleLink } from "@i18n/routing";

const industries = [
	{ icon: Heart, name: "Healthcare", color: "text-red-500" },
	{ icon: ShoppingCart, name: "E-commerce", color: "text-green-500" },
	{ icon: Landmark, name: "Financial", color: "text-blue-500" },
	{ icon: Plane, name: "Travel", color: "text-purple-500" },
	{ icon: Factory, name: "Telecom", color: "text-orange-500" },
	{ icon: Building2, name: "Enterprise", color: "text-indigo-500" }
];

export function IndustriesHero() {
	return (
		<section className="relative pt-32 pb-20 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
			
			<div className="container relative">
				<div className="max-w-5xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
						<Building2 className="h-4 w-4" />
						Industry Solutions
					</div>
					
					<h1 className="text-5xl md:text-6xl font-bold mb-6">
						AI Call Centers for
						<span className="block mt-2 gradient-blue">Every Industry</span>
					</h1>
					
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
						Tailored solutions that understand your industry's unique requirements, 
						compliance needs, and customer expectations.
					</p>

					{/* Industry icons */}
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						{industries.map((industry) => (
							<div key={industry.name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
								<industry.icon className={`h-8 w-8 ${industry.color}`} />
								<span className="text-sm font-medium">{industry.name}</span>
							</div>
						))}
					</div>

					{/* CTAs */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<LocaleLink href="/#demo">
								Get Industry-Specific Demo
								<ArrowRight className="ml-2 h-4 w-4" />
							</LocaleLink>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<LocaleLink href="/solutions">
								View Solutions
							</LocaleLink>
						</Button>
					</div>

					{/* Trust indicator */}
					<div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
						<CheckCircle className="h-4 w-4 text-success" />
						<span>Trusted by 500+ companies across all industries</span>
					</div>
				</div>
			</div>
		</section>
	);
}