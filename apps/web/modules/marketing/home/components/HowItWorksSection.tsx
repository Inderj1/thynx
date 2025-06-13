"use client";

import { useState } from "react";
import { 
	Plug, 
	Brain, 
	Rocket, 
	BarChart3, 
	ArrowRight, 
	Check,
	Clock,
	Zap
} from "lucide-react";
import { cn } from "@ui/lib";
import Image from "next/image";

const steps = [
	{
		number: "01",
		title: "Connect Your Systems",
		description: "Seamlessly integrate THNYX with your existing CRM, phone systems, and databases in minutes",
		icon: Plug,
		image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
		features: [
			"One-click integrations",
			"API-first architecture",
			"No downtime migration"
		],
		time: "15 minutes"
	},
	{
		number: "02",
		title: "Train Your AI",
		description: "Upload your knowledge base, FAQs, and call scripts. Our AI learns your business instantly",
		icon: Brain,
		image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
		features: [
			"Custom voice & tone",
			"Industry-specific training",
			"Continuous learning"
		],
		time: "2 hours"
	},
	{
		number: "03",
		title: "Deploy Instantly",
		description: "Go live with AI agents handling calls immediately. Scale from 1 to 10,000 agents on demand",
		icon: Rocket,
		image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
		features: [
			"Instant deployment",
			"Auto-scaling",
			"24/7 availability"
		],
		time: "Instant"
	},
	{
		number: "04",
		title: "Monitor & Optimize",
		description: "Real-time analytics dashboard shows performance, insights, and continuous improvements",
		icon: BarChart3,
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
		features: [
			"Real-time metrics",
			"AI recommendations",
			"ROI tracking"
		],
		time: "Ongoing"
	}
];

export function HowItWorksSection() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<section className="py-20 relative overflow-hidden bg-muted/30">
			{/* Background pattern */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
			
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Zap className="h-4 w-4" />
						Simple Setup Process
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						From Zero to AI-Powered in
						<span className="gradient-blue"> 7 Days</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Our streamlined onboarding process gets you up and running faster than any competitor
					</p>
				</div>

				{/* Timeline navigation */}
				<div className="relative mb-12">
					<div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
					<div className="relative flex justify-between max-w-4xl mx-auto">
						{steps.map((step, index) => (
							<button
								key={step.number}
								onClick={() => setActiveStep(index)}
								className={cn(
									"relative flex flex-col items-center gap-2 p-4 transition-all duration-300",
									"hover:scale-110"
								)}
							>
								<div
									className={cn(
										"w-12 h-12 rounded-full flex items-center justify-center",
										"border-2 transition-all duration-300",
										activeStep === index
											? "bg-primary border-primary text-primary-foreground scale-125"
											: "bg-background border-border hover:border-primary/50"
									)}
								>
									<step.icon className="h-5 w-5" />
								</div>
								<span
									className={cn(
										"text-sm font-medium transition-all duration-300",
										activeStep === index ? "text-primary" : "text-muted-foreground"
									)}
								>
									{step.title.split(' ')[0]}
								</span>
							</button>
						))}
					</div>
				</div>

				{/* Active step content */}
				<div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* Left content */}
					<div className="space-y-6">
						<div className="flex items-center gap-4">
							<span className="text-5xl font-bold text-primary/20">
								{steps[activeStep].number}
							</span>
							<div>
								<h3 className="text-3xl font-bold mb-2">
									{steps[activeStep].title}
								</h3>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Clock className="h-4 w-4" />
									<span>Setup time: {steps[activeStep].time}</span>
								</div>
							</div>
						</div>

						<p className="text-lg text-muted-foreground">
							{steps[activeStep].description}
						</p>

						<div className="space-y-3">
							{steps[activeStep].features.map((feature, idx) => (
								<div
									key={idx}
									className="flex items-center gap-3 animate-slide-up"
									style={{ animationDelay: `${idx * 100}ms` }}
								>
									<div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
										<Check className="h-3 w-3 text-primary" />
									</div>
									<span className="text-foreground/80">{feature}</span>
								</div>
							))}
						</div>

						{/* Navigation buttons */}
						<div className="flex gap-4 pt-4">
							<button
								onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
								disabled={activeStep === 0}
								className={cn(
									"px-4 py-2 rounded-lg border transition-all",
									activeStep === 0
										? "opacity-50 cursor-not-allowed"
										: "hover:bg-muted"
								)}
							>
								Previous
							</button>
							<button
								onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
								disabled={activeStep === steps.length - 1}
								className={cn(
									"px-4 py-2 rounded-lg bg-primary text-primary-foreground transition-all",
									"flex items-center gap-2",
									activeStep === steps.length - 1
										? "opacity-50 cursor-not-allowed"
										: "hover:bg-primary/90"
								)}
							>
								Next Step
								<ArrowRight className="h-4 w-4" />
							</button>
						</div>
					</div>

					{/* Right content - Image */}
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-2xl" />
						<div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
							<img
								src={steps[activeStep].image}
								alt={steps[activeStep].title}
								className="w-full h-[400px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<div className="flex items-center gap-2 text-sm text-white/80 mb-2">
									<steps[activeStep].icon className="h-4 w-4" />
									<span>Step {activeStep + 1} of {steps.length}</span>
								</div>
								<h4 className="text-xl font-bold text-white">
									{steps[activeStep].title}
								</h4>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="mt-20 text-center">
					<div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border/50">
						<h3 className="text-2xl font-bold">Ready to Transform Your Call Center?</h3>
						<p className="text-muted-foreground max-w-md">
							Join leading enterprises already saving millions with THNYX
						</p>
						<a
							href="/demo"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
						>
							Start Your 7-Day Setup
							<ArrowRight className="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}