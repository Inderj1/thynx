"use client";

import { Button } from "@ui/components/button";
import { 
	ArrowRight,
	Phone,
	FileText,
	Calendar,
	Sparkles
} from "lucide-react";

export function EnterpriseCTA() {
	return (
		<section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
			<div className="container">
				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
						<Sparkles className="h-4 w-4" />
						Limited Enterprise Slots Available
					</div>
					
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Ready to Transform Your Call Center?
					</h2>
					
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Join 500+ enterprises already using THNYX to deliver exceptional customer experiences while reducing costs by 70%
					</p>

					{/* CTA options */}
					<div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
						<div className="p-6 rounded-xl border bg-card hover:border-primary/50 transition-all group cursor-pointer">
							<Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
							<h3 className="font-semibold mb-2">Schedule Demo</h3>
							<p className="text-sm text-muted-foreground mb-4">
								See THNYX in action with a personalized demo
							</p>
							<Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
								<a href="/#demo">
									Book Now
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
						</div>

						<div className="p-6 rounded-xl border bg-card hover:border-primary/50 transition-all group cursor-pointer">
							<Phone className="h-8 w-8 text-primary mx-auto mb-3" />
							<h3 className="font-semibold mb-2">Talk to Sales</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Discuss your specific needs with our team
							</p>
							<Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
								<a href="/contact">
									Contact Us
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
						</div>

						<div className="p-6 rounded-xl border bg-card hover:border-primary/50 transition-all group cursor-pointer">
							<FileText className="h-8 w-8 text-primary mx-auto mb-3" />
							<h3 className="font-semibold mb-2">Download Guide</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Enterprise AI Call Center implementation guide
							</p>
							<Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
								<a href="/resources/enterprise-guide">
									Get Guide
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
						</div>
					</div>

					{/* Trust indicators */}
					<div className="flex flex-wrap justify-center gap-8 items-center">
						<div className="text-sm text-muted-foreground">
							Trusted by:
						</div>
						<div className="flex items-center gap-2">
							<div className="w-24 h-8 bg-muted rounded animate-pulse" />
						</div>
						<div className="flex items-center gap-2">
							<div className="w-24 h-8 bg-muted rounded animate-pulse" />
						</div>
						<div className="flex items-center gap-2">
							<div className="w-24 h-8 bg-muted rounded animate-pulse" />
						</div>
						<div className="flex items-center gap-2">
							<div className="w-24 h-8 bg-muted rounded animate-pulse" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}