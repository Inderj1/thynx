"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Users, DollarSign, Globe, Clock, Award, TrendingUp } from "lucide-react";
import { cn } from "@ui/lib";
import Image from "next/image";

// Animated counter component
function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2000 }: {
	value: number;
	prefix?: string;
	suffix?: string;
	duration?: number;
}) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let startTime: number;
		let animationFrame: number;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);

			setCount(Math.floor(progress * value));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrame);
	}, [value, duration]);

	return (
		<span>
			{prefix}{count.toLocaleString()}{suffix}
		</span>
	);
}

const performanceMetrics = [
	{
		icon: Users,
		value: 50000000,
		suffix: "+",
		label: "Calls Handled",
		description: "Across all platforms",
		growth: "+127%",
	},
	{
		icon: DollarSign,
		value: 150,
		prefix: "$",
		suffix: "M",
		label: "Saved for Clients",
		description: "In operational costs",
		growth: "+89%",
	},
	{
		icon: Globe,
		value: 50,
		suffix: "+",
		label: "Languages",
		description: "Real-time translation",
		growth: "Global",
	},
	{
		icon: Clock,
		value: 99.9,
		suffix: "%",
		label: "Uptime",
		description: "Enterprise SLA",
		growth: "24/7",
	},
];

const industryComparison = [
	{ label: "Average Wait Time", thnyx: "3 sec", traditional: "2.5 min", improvement: "96%" },
	{ label: "First Call Resolution", thnyx: "95%", traditional: "71%", improvement: "34%" },
	{ label: "Cost per Call", thnyx: "$0.50", traditional: "$3.50", improvement: "86%" },
	{ label: "Customer Satisfaction", thnyx: "4.8/5", traditional: "3.2/5", improvement: "50%" },
];

export function MetricsSection() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("metrics-section");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<section id="metrics-section" className="py-20 relative overflow-hidden noise-overlay">
			{/* Enhanced background */}
			<div className="absolute inset-0 gradient-mesh opacity-20" />
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
			<div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
			<div className="absolute left-0 bottom-1/2 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />
			
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 glass-card border border-primary/20 animate-fade-in">
						<TrendingUp className="h-4 w-4" />
						Performance Metrics
					</div>
					<h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-slide-up">
						Proven Results at <span className="gradient-blue text-glow">Scale</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
						THNYX delivers measurable impact across every metric that matters to your business
					</p>
				</div>

				{/* Live metrics grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
					{performanceMetrics.map((metric, index) => (
						<div
							key={metric.label}
							className={cn(
								"relative p-6 rounded-2xl border bg-card/50 glass-card transition-all duration-500 group",
								"hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 hover-lift card-3d",
								isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
							)}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<div className="flex items-start justify-between mb-4">
								<div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform group-hover:bg-primary/20">
									<metric.icon className="h-6 w-6 text-primary" />
								</div>
								<span className="text-sm font-medium text-success flex items-center gap-1">
									<ArrowUp className="h-3 w-3" />
									{metric.growth}
								</span>
							</div>
							<div className="space-y-2">
								<div className="text-2xl font-semibold gradient-blue group-hover:text-glow transition-all">
									{isVisible && (
										<AnimatedCounter
											value={metric.value}
											prefix={metric.prefix}
											suffix={metric.suffix}
										/>
									)}
								</div>
								<div className="font-medium text-foreground/90 text-sm">{metric.label}</div>
								<div className="text-xs text-muted-foreground">{metric.description}</div>
							</div>
						</div>
					))}
				</div>

				{/* Comparison table */}
				<div className="max-w-4xl mx-auto">
					<h3 className="text-2xl font-bold text-center mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
						THNYX vs Traditional Call Centers
					</h3>
					<div className="rounded-2xl border bg-card/50 glass-card overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: "0.5s" }}>
						<div className="grid grid-cols-4 gap-4 p-4 bg-muted/50 font-medium text-sm glass">
							<div>Metric</div>
							<div className="text-center">THNYX</div>
							<div className="text-center">Traditional</div>
							<div className="text-center">Improvement</div>
						</div>
						{industryComparison.map((item, index) => (
							<div
								key={item.label}
								className={cn(
									"grid grid-cols-4 gap-4 p-4 border-t transition-all duration-500",
									index % 2 === 0 ? "bg-background/50" : "",
									isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
								)}
								style={{ transitionDelay: `${(index + 4) * 100}ms` }}
							>
								<div className="font-medium">{item.label}</div>
								<div className="text-center font-semibold text-primary">{item.thnyx}</div>
								<div className="text-center text-muted-foreground">{item.traditional}</div>
								<div className="text-center font-semibold text-success">+{item.improvement}</div>
							</div>
						))}
					</div>
				</div>

				{/* ROI Calculator CTA */}
				<div className="mt-16 text-center">
					<div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-primary/5 border border-primary/20 glass-card hover:scale-105 transition-transform cursor-pointer hover:border-primary/40 animate-fade-in" style={{ animationDelay: "0.8s" }}>
						<Award className="h-12 w-12 text-primary animate-float" />
						<h3 className="text-2xl font-bold">Calculate Your ROI</h3>
						<p className="text-muted-foreground max-w-md">
							See how much you could save by switching to THNYX's AI-powered call center
						</p>
						<a
							href="/roi-calculator"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all glow-primary"
						>
							<DollarSign className="h-5 w-5" />
							Calculate Savings
						</a>
					</div>
				</div>

				{/* Background image */}
				<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-5">
					<img
						src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
						alt="Data visualization"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}