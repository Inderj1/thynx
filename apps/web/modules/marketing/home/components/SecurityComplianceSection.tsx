"use client";

import { 
	Shield, 
	Lock, 
	FileCheck, 
	Award,
	CheckCircle,
	AlertCircle,
	Key,
	Database,
	Globe,
	UserCheck
} from "lucide-react";
import { cn } from "@ui/lib";

const certifications = [
	{
		name: "SOC 2 Type II",
		icon: Shield,
		description: "Annual audit of security controls",
		status: "certified",
		date: "2024"
	},
	{
		name: "HIPAA Compliant",
		icon: FileCheck,
		description: "Healthcare data protection",
		status: "certified",
		date: "2024"
	},
	{
		name: "PCI DSS Level 1",
		icon: Lock,
		description: "Payment card data security",
		status: "certified",
		date: "2024"
	},
	{
		name: "GDPR Compliant",
		icon: Globe,
		description: "EU data protection regulation",
		status: "certified",
		date: "2024"
	},
	{
		name: "ISO 27001",
		icon: Award,
		description: "Information security management",
		status: "certified",
		date: "2024"
	},
	{
		name: "CCPA Compliant",
		icon: UserCheck,
		description: "California privacy rights",
		status: "certified",
		date: "2024"
	}
];

const securityFeatures = [
	{
		category: "Data Protection",
		icon: Database,
		features: [
			{
				title: "End-to-End Encryption",
				description: "AES-256 encryption for all data in transit and at rest"
			},
			{
				title: "Zero Data Retention",
				description: "Customer data is never stored on our servers"
			},
			{
				title: "Data Residency",
				description: "Choose where your data is processed and stored"
			}
		]
	},
	{
		category: "Access Control",
		icon: Key,
		features: [
			{
				title: "Multi-Factor Authentication",
				description: "Enforce MFA for all user accounts"
			},
			{
				title: "Role-Based Access",
				description: "Granular permissions for every user"
			},
			{
				title: "Single Sign-On (SSO)",
				description: "Integrate with your identity provider"
			}
		]
	},
	{
		category: "Monitoring & Audit",
		icon: AlertCircle,
		features: [
			{
				title: "24/7 Security Monitoring",
				description: "Real-time threat detection and response"
			},
			{
				title: "Comprehensive Audit Logs",
				description: "Track every action and access attempt"
			},
			{
				title: "Regular Security Audits",
				description: "Third-party penetration testing"
			}
		]
	}
];

export function SecurityComplianceSection() {
	return (
		<section className="py-20 relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
			
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
						<Shield className="h-4 w-4" />
						Enterprise Security
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Bank-Level Security,
						<span className="gradient-blue"> Built-In</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						THNYX meets the highest security standards, so you can focus on your business
					</p>
				</div>

				{/* Trust banner */}
				<div className="mb-16 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
					<div className="flex flex-col md:flex-row items-center justify-center gap-8">
						<div className="flex items-center gap-3">
							<CheckCircle className="h-6 w-6 text-success" />
							<div className="text-left">
								<div className="font-semibold">99.99% Uptime SLA</div>
								<div className="text-sm text-muted-foreground">Guaranteed availability</div>
							</div>
						</div>
						<div className="hidden md:block w-px h-12 bg-border" />
						<div className="flex items-center gap-3">
							<CheckCircle className="h-6 w-6 text-success" />
							<div className="text-left">
								<div className="font-semibold">Zero Security Breaches</div>
								<div className="text-sm text-muted-foreground">Since inception</div>
							</div>
						</div>
						<div className="hidden md:block w-px h-12 bg-border" />
						<div className="flex items-center gap-3">
							<CheckCircle className="h-6 w-6 text-success" />
							<div className="text-left">
								<div className="font-semibold">$10M Cyber Insurance</div>
								<div className="text-sm text-muted-foreground">Full coverage</div>
							</div>
						</div>
					</div>
				</div>

				{/* Certifications grid */}
				<div className="mb-16">
					<h3 className="text-2xl font-bold text-center mb-8">Industry Certifications</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{certifications.map((cert, idx) => (
							<div
								key={cert.name}
								className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center animate-scale-in"
								style={{ animationDelay: `${idx * 50}ms` }}
							>
								<div className="inline-flex p-3 rounded-lg bg-success/10 mb-3">
									<cert.icon className="h-6 w-6 text-success" />
								</div>
								<h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
								<p className="text-xs text-muted-foreground">{cert.description}</p>
								<div className="mt-2 text-xs text-success font-medium">✓ {cert.date}</div>
							</div>
						))}
					</div>
				</div>

				{/* Security features */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{securityFeatures.map((category, idx) => (
						<div
							key={category.category}
							className="space-y-4 animate-slide-up"
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 rounded-lg bg-primary/10">
									<category.icon className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-semibold">{category.category}</h3>
							</div>
							{category.features.map((feature, fidx) => (
								<div
									key={feature.title}
									className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
								>
									<h4 className="font-medium mb-1">{feature.title}</h4>
									<p className="text-sm text-muted-foreground">{feature.description}</p>
								</div>
							))}
						</div>
					))}
				</div>

				{/* Security architecture image */}
				<div className="mb-16">
					<div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
						<img
							src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80"
							alt="Security Infrastructure"
							className="w-full h-[400px] object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
						<div className="absolute bottom-0 left-0 right-0 p-8 text-center">
							<h3 className="text-2xl font-bold mb-2">Multi-Layer Security Architecture</h3>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Defense in depth with multiple security layers protecting your data at every level
							</p>
						</div>
					</div>
				</div>

				{/* Compliance CTA */}
				<div className="text-center">
					<div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border">
						<Shield className="h-12 w-12 text-primary" />
						<h3 className="text-2xl font-bold">Need Custom Compliance?</h3>
						<p className="text-muted-foreground max-w-md">
							We work with enterprises to meet specific regulatory requirements
						</p>
						<div className="flex gap-4">
							<a
								href="/security"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
							>
								View Security Docs
							</a>
							<a
								href="/contact"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
							>
								Contact Security Team
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}