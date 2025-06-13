"use client";

import { Button } from "@ui/components/button";
import { 
	Cpu,
	ArrowRight,
	Zap,
	Brain,
	Shield,
	Workflow
} from "lucide-react";
import { LocaleLink } from "@i18n/routing";

const techHighlights = [
	{ icon: Brain, label: "Proprietary AI Models" },
	{ icon: Zap, label: "50ms Response Time" },
	{ icon: Shield, label: "Enterprise Security" },
	{ icon: Workflow, label: "100+ Integrations" }
];

export function TechnologyHero() {
	return (
		<section className="relative pt-32 pb-20 overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0">
				<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			</div>
			
			<div className="container relative">
				<div className="max-w-5xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
						<Cpu className="h-4 w-4" />
						AI Technology
					</div>
					
					<h1 className="text-5xl md:text-6xl font-bold mb-6">
						The Technology Behind
						<span className="block mt-2 gradient-blue">Next-Gen Call Centers</span>
					</h1>
					
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
						Built on cutting-edge AI research with proprietary models that understand 
						context, emotion, and intent better than any other platform.
					</p>

					{/* Tech highlights */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
						{techHighlights.map((item, idx) => (
							<div 
								key={item.label}
								className="flex flex-col items-center gap-2 animate-scale-in"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								<div className="p-3 rounded-lg bg-primary/10">
									<item.icon className="h-6 w-6 text-primary" />
								</div>
								<span className="text-sm font-medium">{item.label}</span>
							</div>
						))}
					</div>

					{/* CTAs */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<LocaleLink href="/#demo">
								See Technology Demo
								<ArrowRight className="ml-2 h-4 w-4" />
							</LocaleLink>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<LocaleLink href="/docs/api">
								View API Docs
							</LocaleLink>
						</Button>
					</div>

					{/* Stats */}
					<div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
						<div>
							<div className="text-3xl font-bold text-primary">7</div>
							<div className="text-sm text-muted-foreground">Patents Pending</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-primary">50+</div>
							<div className="text-sm text-muted-foreground">PhD Researchers</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-primary">$10M</div>
							<div className="text-sm text-muted-foreground">R&D Investment</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}