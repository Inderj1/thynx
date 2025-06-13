"use client";

import { Button } from "@ui/components/button";
import { 
	BookOpen,
	ArrowRight,
	FileText,
	Video,
	Download,
	GraduationCap
} from "lucide-react";
import { LocaleLink } from "@i18n/routing";

const resourceTypes = [
	{ icon: FileText, label: "Whitepapers", count: "12" },
	{ icon: Video, label: "Webinars", count: "8" },
	{ icon: GraduationCap, label: "Courses", count: "5" },
	{ icon: Download, label: "Templates", count: "20" }
];

export function ResourcesHero() {
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
						<BookOpen className="h-4 w-4" />
						Learning Center
					</div>
					
					<h1 className="text-5xl md:text-6xl font-bold mb-6">
						Resources to Help You
						<span className="block mt-2 gradient-blue">Succeed with AI</span>
					</h1>
					
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
						Everything you need to implement and scale AI-powered call centers. 
						From technical guides to best practices and industry insights.
					</p>

					{/* Resource stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
						{resourceTypes.map((type, idx) => (
							<div 
								key={type.label}
								className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 animate-scale-in"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								<type.icon className="h-8 w-8 text-primary" />
								<div className="text-2xl font-bold">{type.count}</div>
								<span className="text-sm text-muted-foreground">{type.label}</span>
							</div>
						))}
					</div>

					{/* CTAs */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" asChild>
							<LocaleLink href="#featured">
								Browse Resources
								<ArrowRight className="ml-2 h-4 w-4" />
							</LocaleLink>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<LocaleLink href="/newsletter">
								Subscribe to Newsletter
							</LocaleLink>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}