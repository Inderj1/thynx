import { LocaleLink } from "@i18n/routing";
import { config } from "@repo/config";
import { Logo } from "@shared/components/Logo";
import { Button } from "@ui/components/button";
import { 
	Phone, 
	Mail, 
	MapPin, 
	Linkedin, 
	Twitter, 
	Github,
	ArrowRight,
	Shield,
	Award,
	FileText,
	Users
} from "lucide-react";

const footerLinks = {
	solutions: {
		title: "Solutions",
		links: [
			{ label: "Enterprise", href: "/solutions/enterprise" },
			{ label: "Small Business", href: "/solutions/small-business" },
			{ label: "Startups", href: "/solutions/startups" },
			{ label: "Call Centers", href: "/solutions/call-centers" },
			{ label: "Custom Solutions", href: "/contact" }
		]
	},
	industries: {
		title: "Industries",
		links: [
			{ label: "Healthcare", href: "/industries/healthcare" },
			{ label: "E-commerce", href: "/industries/ecommerce" },
			{ label: "Financial Services", href: "/industries/financial" },
			{ label: "Travel & Hospitality", href: "/industries/travel" },
			{ label: "View All Industries", href: "/industries" }
		]
	},
	resources: {
		title: "Resources",
		links: [
			{ label: "Documentation", href: "/docs" },
			{ label: "API Reference", href: "/docs/api" },
			{ label: "Blog", href: "/blog" },
			{ label: "Case Studies", href: "/case-studies" },
			{ label: "ROI Calculator", href: "/roi-calculator" }
		]
	},
	company: {
		title: "Company",
		links: [
			{ label: "About Us", href: "/company" },
			{ label: "Careers", href: "/careers", badge: "We're hiring!" },
			{ label: "Press", href: "/press" },
			{ label: "Contact", href: "/contact" },
			{ label: "Investors", href: "/investors" }
		]
	}
};

const certifications = [
	{ icon: Shield, label: "SOC 2 Type II" },
	{ icon: Award, label: "HIPAA Compliant" },
	{ icon: Shield, label: "PCI DSS" },
	{ icon: Award, label: "ISO 27001" }
];

export function Footer() {
	return (
		<footer className="border-t bg-muted/30">
			{/* CTA Section */}
			<div className="border-b">
				<div className="container py-12">
					<div className="rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Ready to Transform Your Call Center?
						</h2>
						<p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
							Join 500+ companies already using THNYX to deliver exceptional customer experiences
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="secondary" asChild>
								<LocaleLink href="/demo" className="flex items-center gap-2">
									<Phone className="h-5 w-5" />
									Book a Demo
									<ArrowRight className="h-4 w-4" />
								</LocaleLink>
							</Button>
							<Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
								<LocaleLink href="/contact">
									Talk to Sales
								</LocaleLink>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Footer */}
			<div className="container py-12">
				<div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<LocaleLink href="/" className="inline-block">
							<div className="flex items-center gap-2 mb-4">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
									<span className="text-primary-foreground font-bold text-xl">T</span>
								</div>
								<span className="font-bold text-xl">THNYX</span>
							</div>
						</LocaleLink>
						<p className="text-muted-foreground mb-6">
							The future of call centers is AI-powered. Transform your customer service with intelligent automation that scales.
						</p>
						
						{/* Contact Info */}
						<div className="space-y-3 text-sm">
							<a href="tel:+1-888-THNYX-AI" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
								<Phone className="h-4 w-4" />
								<span>+1-888-THNYX-AI</span>
							</a>
							<a href="mailto:hello@thnyx.ai" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
								<Mail className="h-4 w-4" />
								<span>hello@thnyx.ai</span>
							</a>
							<div className="flex items-start gap-2 text-muted-foreground">
								<MapPin className="h-4 w-4 mt-0.5" />
								<span>
									555 AI Boulevard<br />
									San Francisco, CA 94105
								</span>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-3 mt-6">
							<a href="https://linkedin.com/company/thnyx" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
								<Linkedin className="h-5 w-5" />
							</a>
							<a href="https://twitter.com/thnyx_ai" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
								<Twitter className="h-5 w-5" />
							</a>
							<a href="https://github.com/thnyx" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
								<Github className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Links Grid */}
					{Object.entries(footerLinks).map(([key, section]) => (
						<div key={key}>
							<h3 className="font-semibold mb-4">{section.title}</h3>
							<ul className="space-y-3 text-sm">
								{section.links.map((link) => (
									<li key={link.href}>
										<LocaleLink 
											href={link.href} 
											className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
										>
											{link.label}
											{link.badge && (
												<span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
													{link.badge}
												</span>
											)}
										</LocaleLink>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Certifications */}
				<div className="border-t mt-12 pt-8">
					<div className="flex flex-wrap items-center justify-between gap-6">
						<div className="flex flex-wrap items-center gap-6">
							{certifications.map((cert) => (
								<div key={cert.label} className="flex items-center gap-2 text-sm text-muted-foreground">
									<cert.icon className="h-4 w-4" />
									<span>{cert.label}</span>
								</div>
							))}
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Users className="h-4 w-4" />
							<span>Backed by Y Combinator</span>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
						<div className="flex flex-wrap items-center gap-4">
							<span>© {new Date().getFullYear()} THNYX Inc.</span>
							<span className="hidden md:inline">•</span>
							<LocaleLink href="/legal/privacy-policy" className="hover:text-foreground transition-colors">
								Privacy Policy
							</LocaleLink>
							<span className="hidden md:inline">•</span>
							<LocaleLink href="/legal/terms" className="hover:text-foreground transition-colors">
								Terms of Service
							</LocaleLink>
							<span className="hidden md:inline">•</span>
							<LocaleLink href="/legal/sla" className="hover:text-foreground transition-colors">
								SLA
							</LocaleLink>
						</div>
						<div className="flex items-center gap-2">
							<span>System Status:</span>
							<span className="flex items-center gap-1 text-success">
								<span className="w-2 h-2 bg-success rounded-full"></span>
								All Systems Operational
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}