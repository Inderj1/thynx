"use client";

import { useState } from "react";
import { 
	Brain, 
	Cpu, 
	Shield, 
	Zap,
	Globe,
	MessageSquare,
	BarChart,
	Lock,
	Sparkles,
	Code,
	Server,
	Layers
} from "lucide-react";
import { cn } from "@ui/lib";

const techStack = [
	{
		category: "Core AI",
		icon: Brain,
		color: "text-primary",
		technologies: [
			{
				name: "Proprietary NLP Engine",
				description: "Patent-pending natural language processing with 99.2% accuracy",
				features: ["Context awareness", "Sentiment analysis", "Intent recognition"]
			},
			{
				name: "Multi-Modal AI",
				description: "Handles voice, text, and visual inputs seamlessly",
				features: ["Voice synthesis", "Text-to-speech", "Visual recognition"]
			},
			{
				name: "Self-Learning System",
				description: "Continuously improves from every interaction",
				features: ["Real-time learning", "Pattern recognition", "Adaptive responses"]
			}
		]
	},
	{
		category: "Performance",
		icon: Zap,
		color: "text-yellow-500",
		technologies: [
			{
				name: "50ms Response Time",
				description: "Industry-leading speed for real-time conversations",
				features: ["Edge computing", "Optimized inference", "Distributed processing"]
			},
			{
				name: "Infinite Scalability",
				description: "Handle 1 to 1 million calls without infrastructure changes",
				features: ["Auto-scaling", "Load balancing", "Global distribution"]
			},
			{
				name: "99.99% Uptime",
				description: "Enterprise-grade reliability with redundancy",
				features: ["Failover systems", "Disaster recovery", "24/7 monitoring"]
			}
		]
	},
	{
		category: "Security",
		icon: Shield,
		color: "text-green-500",
		technologies: [
			{
				name: "Bank-Level Encryption",
				description: "End-to-end encryption for all communications",
				features: ["AES-256 encryption", "TLS 1.3", "Zero-knowledge architecture"]
			},
			{
				name: "Compliance Built-In",
				description: "Pre-certified for major industry standards",
				features: ["HIPAA", "PCI DSS", "SOC 2 Type II", "GDPR"]
			},
			{
				name: "Data Isolation",
				description: "Complete data segregation for each client",
				features: ["Private instances", "Data residency", "Access controls"]
			}
		]
	}
];

const architectureLayers = [
	{ name: "User Interface", icon: MessageSquare, description: "Voice, chat, API endpoints" },
	{ name: "AI Processing", icon: Brain, description: "NLP, intent recognition, response generation" },
	{ name: "Integration Layer", icon: Layers, description: "CRM, databases, third-party systems" },
	{ name: "Infrastructure", icon: Server, description: "Cloud-native, auto-scaling, global CDN" }
];

export function AITechnologySection() {
	const [activeCategory, setActiveCategory] = useState(techStack[0]);

	return (
		<section className="py-20 relative overflow-hidden bg-muted/30">
			{/* Background effect */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
			</div>
			
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Cpu className="h-4 w-4" />
						Technology Stack
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Powered by Cutting-Edge AI
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Our proprietary technology stack delivers unmatched performance, security, and scalability
					</p>
				</div>

				{/* Category selector */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{techStack.map((category) => (
						<button
							key={category.category}
							onClick={() => setActiveCategory(category)}
							className={cn(
								"flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300",
								activeCategory.category === category.category
									? "bg-primary text-primary-foreground border-primary shadow-lg"
									: "bg-card hover:bg-muted border-border"
							)}
						>
							<category.icon className={cn("h-5 w-5", 
								activeCategory.category === category.category ? "text-primary-foreground" : category.color
							)} />
							<span className="font-medium">{category.category}</span>
						</button>
					))}
				</div>

				{/* Active category technologies */}
				<div className="grid md:grid-cols-3 gap-6 mb-16">
					{activeCategory.technologies.map((tech, idx) => (
						<div
							key={tech.name}
							className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in"
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<div className="flex items-start justify-between mb-4">
								<h3 className="text-xl font-semibold">{tech.name}</h3>
								<Sparkles className={cn("h-5 w-5", activeCategory.color)} />
							</div>
							<p className="text-muted-foreground mb-4">{tech.description}</p>
							<div className="space-y-2">
								{tech.features.map((feature, fidx) => (
									<div key={fidx} className="flex items-center gap-2 text-sm">
										<div className="w-1.5 h-1.5 rounded-full bg-primary" />
										<span className="text-foreground/80">{feature}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Architecture diagram */}
				<div className="max-w-4xl mx-auto mb-16">
					<h3 className="text-2xl font-bold text-center mb-8">System Architecture</h3>
					<div className="relative">
						{/* Connection lines */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-px h-full bg-border" />
						</div>
						
						{/* Layers */}
						<div className="relative space-y-4">
							{architectureLayers.map((layer, idx) => (
								<div
									key={layer.name}
									className="relative flex items-center gap-4 p-6 rounded-xl bg-card border border-border animate-slide-up"
									style={{ animationDelay: `${idx * 100}ms` }}
								>
									<div className="p-3 rounded-lg bg-primary/10">
										<layer.icon className="h-6 w-6 text-primary" />
									</div>
									<div className="flex-1">
										<h4 className="font-semibold">{layer.name}</h4>
										<p className="text-sm text-muted-foreground">{layer.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Key differentiators */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<Globe className="h-8 w-8 text-primary mx-auto mb-3" />
						<h4 className="font-semibold mb-2">50+ Languages</h4>
						<p className="text-sm text-muted-foreground">Real-time translation and localization</p>
					</div>
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<Lock className="h-8 w-8 text-primary mx-auto mb-3" />
						<h4 className="font-semibold mb-2">Zero Data Retention</h4>
						<p className="text-sm text-muted-foreground">Your data never leaves your control</p>
					</div>
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<Code className="h-8 w-8 text-primary mx-auto mb-3" />
						<h4 className="font-semibold mb-2">API-First Design</h4>
						<p className="text-sm text-muted-foreground">Integrate with any system</p>
					</div>
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<BarChart className="h-8 w-8 text-primary mx-auto mb-3" />
						<h4 className="font-semibold mb-2">Real-Time Analytics</h4>
						<p className="text-sm text-muted-foreground">Actionable insights instantly</p>
					</div>
				</div>

				{/* Patents and research */}
				<div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
					<h3 className="text-2xl font-bold mb-4">Innovation at Our Core</h3>
					<div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
						<div>
							<div className="text-3xl font-bold text-primary">7</div>
							<div className="text-sm text-muted-foreground">Patents Filed</div>
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