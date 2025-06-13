"use client";

import { Button } from "@ui/components/button";
import { 
	ArrowRight,
	Phone,
	FileText,
	CheckCircle
} from "lucide-react";

const benefits = [
	"Industry-specific AI training",
	"Compliance certifications",
	"Custom integrations",
	"Dedicated success team"
];

export function IndustriesCTA() {
	return (
		<section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
			<div className="container">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Ready to Transform Your Industry?
					</h2>
					
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Join leading companies in your industry who are already using THNYX 
						to deliver exceptional customer experiences.
					</p>

					{/* Benefits */}
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
							<a href="/#demo">
								<Phone className="mr-2 h-4 w-4" />
								Schedule Industry Demo
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="/resources/industry-guides">
								<FileText className="mr-2 h-4 w-4" />
								Download Industry Guide
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}