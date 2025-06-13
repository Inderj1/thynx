"use client";

import { LocaleLink } from "@i18n/routing";
import { Button } from "@ui/components/button";
import { ArrowRightIcon, Phone, Play, CheckCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@ui/lib";

// Rotating text for the hero
const rotatingPhrases = [
	"Reduce costs by 70%",
	"Handle 10,000+ calls/day",
	"95% first call resolution",
	"50+ languages supported",
	"24/7 availability",
];

// Key metrics for VC appeal
const metrics = [
	{ value: "$400B", label: "Market Size" },
	{ value: "70%", label: "Cost Reduction" },
	{ value: "90%", label: "Satisfaction Rate" },
	{ value: "50ms", label: "Response Time" },
];

export function Hero() {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative overflow-hidden noise-overlay">
			{/* Enhanced background with mesh gradient */}
			<div className="absolute inset-0 gradient-mesh opacity-30" />
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
			<div className="absolute left-1/2 -translate-x-1/2 top-0 h-[500px] w-[1000px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
			<div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
			<div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]" />

			<div className="container relative z-10 pt-36 pb-20">
				{/* Announcement badge */}
				<div className="mb-8 flex justify-center animate-fade-in">
					<div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 glass-card hover:border-primary/40 transition-all cursor-pointer group">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
						</span>
						<span className="text-sm font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
							Series A Funding Round Open
						</span>
						<ArrowRightIcon className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
					</div>
				</div>

				{/* Main headline */}
				<h1 className="mx-auto max-w-5xl text-center text-hero font-bold animate-slide-up relative">
					<span className="relative z-10">
						The Future of Call Centers
						<span className="gradient-blue text-glow"> is AI-Powered</span>
					</span>
					<div className="absolute inset-0 blur-3xl">
						<span className="text-hero font-bold opacity-20 gradient-blue">The Future of Call Centers is AI-Powered</span>
					</div>
				</h1>

				{/* Rotating subheadline */}
				<div className="mt-6 text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
					<p className="text-xl text-muted-foreground">
						Transform your customer service:
					</p>
					<p className="text-2xl font-semibold text-primary mt-2 h-8">
						{rotatingPhrases[currentPhraseIndex]}
					</p>
				</div>

				{/* Description */}
				<p className="mx-auto mt-8 max-w-2xl text-center text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
					THNYX revolutionizes call centers with proprietary AI that handles 95% of customer interactions autonomously, 
					reducing operational costs while improving customer satisfaction.
				</p>

				{/* CTA Buttons */}
				<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
					<Button size="lg" asChild className="min-w-[200px] bg-primary hover:bg-primary/90">
						<LocaleLink href="/demo" className="flex items-center gap-2">
							<Phone className="h-5 w-5" />
							Book Live Demo
							<ArrowRightIcon className="h-4 w-4" />
						</LocaleLink>
					</Button>
					<Button size="lg" variant="outline" asChild className="min-w-[200px]">
						<LocaleLink href="/investors" className="flex items-center gap-2">
							<Play className="h-5 w-5" />
							Watch 2-min Pitch
						</LocaleLink>
					</Button>
				</div>

				{/* Trust indicators */}
				<div className="mt-12 flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
					<p className="text-sm text-muted-foreground font-medium">
						BACKED BY LEADING INVESTORS
					</p>
					<div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
						{/* Placeholder for investor logos */}
						<div className="h-8 w-32 bg-muted rounded" />
						<div className="h-8 w-32 bg-muted rounded" />
						<div className="h-8 w-32 bg-muted rounded" />
						<div className="h-8 w-32 bg-muted rounded" />
					</div>
				</div>

				{/* Key metrics */}
				<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in" style={{ animationDelay: "0.5s" }}>
					{metrics.map((metric, index) => (
						<div
							key={metric.label}
							className="text-center"
							style={{ animationDelay: `${0.5 + index * 0.1}s` }}
						>
							<div className="text-3xl md:text-4xl font-bold gradient-blue">
								{metric.value}
							</div>
							<div className="text-sm text-muted-foreground mt-1">
								{metric.label}
							</div>
						</div>
					))}
				</div>

				{/* Hero image/demo */}
				<div className="mt-20 relative animate-scale-in" style={{ animationDelay: "0.6s" }}>
					<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl blur-2xl" />
					<div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-1 shadow-2xl">
						<div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12">
							{/* AI Call Center Dashboard Preview */}
							<div className="space-y-4">
								<div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg backdrop-blur-sm">
									<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
										<Phone className="h-6 w-6 text-primary" />
									</div>
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<span className="font-medium">AI Agent Processing</span>
											<span className="text-sm text-success flex items-center gap-1">
												<CheckCircle className="h-4 w-4" />
												Live
											</span>
										</div>
										<div className="text-sm text-muted-foreground">
											Handling 2,847 concurrent calls
										</div>
									</div>
								</div>

								<div className="grid grid-cols-3 gap-4">
									<div className="p-4 bg-background/80 rounded-lg backdrop-blur-sm">
										<TrendingUp className="h-5 w-5 text-success mb-2" />
										<div className="text-2xl font-bold">98.5%</div>
										<div className="text-xs text-muted-foreground">Resolution Rate</div>
									</div>
									<div className="p-4 bg-background/80 rounded-lg backdrop-blur-sm">
										<TrendingUp className="h-5 w-5 text-primary mb-2" />
										<div className="text-2xl font-bold">4.8/5</div>
										<div className="text-xs text-muted-foreground">Customer Score</div>
									</div>
									<div className="p-4 bg-background/80 rounded-lg backdrop-blur-sm">
										<TrendingUp className="h-5 w-5 text-accent mb-2" />
										<div className="text-2xl font-bold">$127K</div>
										<div className="text-xs text-muted-foreground">Monthly Savings</div>
									</div>
								</div>

								{/* Sample conversation */}
								<div className="p-4 bg-background/80 rounded-lg backdrop-blur-sm space-y-3">
									<div className="flex gap-3">
										<div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">C</div>
										<div className="flex-1 p-3 bg-muted rounded-lg text-sm">
											I need to change my delivery address for order #12345
										</div>
									</div>
									<div className="flex gap-3">
										<div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">AI</div>
										<div className="flex-1 p-3 bg-primary/10 rounded-lg text-sm">
											I can help you with that! I've located your order. What's the new delivery address?
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}