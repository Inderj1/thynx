"use client";

import { Button } from "@ui/components/button";
import { 
	ArrowRight,
	Code,
	FileText,
	Cpu
} from "lucide-react";

export function TechnologyCTA() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					<div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
							<Cpu className="h-8 w-8 text-primary" />
						</div>
						
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Build with THNYX Technology
						</h2>
						
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Access our powerful APIs, SDKs, and developer tools to create 
							custom AI-powered call center solutions.
						</p>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" asChild>
								<a href="/docs/api">
									<Code className="mr-2 h-4 w-4" />
									Explore API
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<a href="/resources/technical-whitepaper">
									<FileText className="mr-2 h-4 w-4" />
									Technical Whitepaper
								</a>
							</Button>
						</div>

						{/* Developer stats */}
						<div className="mt-8 pt-8 border-t border-border/50">
							<div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
								<div>
									<div className="text-2xl font-bold text-primary">10k+</div>
									<div className="text-xs text-muted-foreground">API Calls/sec</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-primary">99.99%</div>
									<div className="text-xs text-muted-foreground">Uptime SLA</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-primary">5</div>
									<div className="text-xs text-muted-foreground">SDKs Available</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}