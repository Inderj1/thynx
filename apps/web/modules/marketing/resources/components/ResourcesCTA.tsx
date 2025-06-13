"use client";

import { Button } from "@ui/components/button";
import { 
	ArrowRight,
	Mail,
	Sparkles,
	Calendar
} from "lucide-react";

export function ResourcesCTA() {
	return (
		<section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					<div className="rounded-2xl bg-card border p-8 md:p-12 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
							<Sparkles className="h-8 w-8 text-primary" />
						</div>
						
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Stay Ahead of the Curve
						</h2>
						
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Get the latest AI call center insights, best practices, and industry 
							trends delivered to your inbox weekly.
						</p>

						{/* Newsletter form */}
						<div className="max-w-md mx-auto mb-8">
							<form className="flex flex-col sm:flex-row gap-4">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
									required
								/>
								<Button type="submit" size="lg">
									<Mail className="mr-2 h-4 w-4" />
									Subscribe
								</Button>
							</form>
							<p className="text-sm text-muted-foreground mt-2">
								Join 10,000+ professionals. Unsubscribe anytime.
							</p>
						</div>

						{/* Additional CTA */}
						<div className="pt-8 border-t">
							<p className="text-muted-foreground mb-4">
								Want personalized guidance for your implementation?
							</p>
							<Button variant="outline" size="lg" asChild>
								<a href="/contact">
									<Calendar className="mr-2 h-4 w-4" />
									Book Expert Consultation
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}