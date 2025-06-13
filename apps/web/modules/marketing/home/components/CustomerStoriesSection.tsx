"use client";

import { useState } from "react";
import { 
	Quote, 
	Star, 
	TrendingUp,
	DollarSign,
	Users,
	Clock,
	ChevronLeft,
	ChevronRight,
	Play,
	Building2
} from "lucide-react";
import { cn } from "@ui/lib";

const caseStudies = [
	{
		id: "megastore",
		company: "MegaStore",
		industry: "E-commerce",
		logo: "🛒",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
		quote: "THNYX transformed our customer service overnight. What used to take a team of 200 agents now runs smoothly with AI handling 95% of inquiries.",
		author: "Sarah Chen",
		role: "VP of Operations",
		metrics: {
			costReduction: "73%",
			callVolume: "50K/day",
			satisfaction: "4.9/5",
			roi: "420%"
		},
		story: {
			challenge: "Struggling with seasonal spikes and 24/7 support demands",
			solution: "Deployed THNYX AI agents with custom e-commerce training",
			results: [
				"Reduced average response time from 5 min to 3 seconds",
				"Handled Black Friday traffic with zero downtime",
				"Saved $3.2M annually in operational costs"
			]
		}
	},
	{
		id: "healthfirst",
		company: "HealthFirst Network",
		industry: "Healthcare",
		logo: "🏥",
		image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
		quote: "Patient satisfaction scores increased by 40% while we cut costs in half. THNYX is the future of healthcare communication.",
		author: "Dr. Michael Ross",
		role: "CEO",
		metrics: {
			costReduction: "68%",
			callVolume: "25K/day",
			satisfaction: "4.8/5",
			roi: "380%"
		},
		story: {
			challenge: "HIPAA compliance while scaling patient support",
			solution: "HIPAA-compliant AI with medical terminology training",
			results: [
				"Reduced appointment no-shows by 35%",
				"Automated 80% of prescription refill requests",
				"Zero compliance violations"
			]
		}
	},
	{
		id: "securebank",
		company: "SecureBank",
		industry: "Financial Services",
		logo: "🏦",
		image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
		quote: "We handle sensitive financial data with complete confidence. THNYX exceeds our strictest security requirements.",
		author: "James Liu",
		role: "CTO",
		metrics: {
			costReduction: "71%",
			callVolume: "100K/day",
			satisfaction: "4.7/5",
			roi: "350%"
		},
		story: {
			challenge: "24/7 fraud monitoring and customer verification",
			solution: "AI with real-time fraud detection and biometric verification",
			results: [
				"Prevented $12M in fraudulent transactions",
				"Reduced false positives by 60%",
				"Improved customer verification time by 90%"
			]
		}
	}
];

export function CustomerStoriesSection() {
	const [activeStory, setActiveStory] = useState(0);
	const [showVideo, setShowVideo] = useState(false);

	const currentStory = caseStudies[activeStory];

	const nextStory = () => {
		setActiveStory((prev) => (prev + 1) % caseStudies.length);
	};

	const prevStory = () => {
		setActiveStory((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
	};

	return (
		<section className="py-20 relative overflow-hidden bg-muted/30">
			<div className="container relative">
				{/* Section header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Star className="h-4 w-4" />
						Customer Success
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Real Results from Real Companies
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						See how industry leaders are transforming their call centers with THNYX
					</p>
				</div>

				{/* Main case study display */}
				<div className="max-w-6xl mx-auto mb-16">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left side - Story content */}
						<div className="space-y-6">
							{/* Company header */}
							<div className="flex items-center gap-4">
								<div className="text-4xl">{currentStory.logo}</div>
								<div>
									<h3 className="text-2xl font-bold">{currentStory.company}</h3>
									<p className="text-muted-foreground">{currentStory.industry}</p>
								</div>
							</div>

							{/* Quote */}
							<div className="relative">
								<Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
								<p className="text-xl italic pl-6">
									"{currentStory.quote}"
								</p>
								<div className="mt-4 pl-6">
									<div className="font-semibold">{currentStory.author}</div>
									<div className="text-sm text-muted-foreground">{currentStory.role}</div>
								</div>
							</div>

							{/* Metrics */}
							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 rounded-lg bg-card border border-border">
									<DollarSign className="h-5 w-5 text-primary mb-2" />
									<div className="text-2xl font-bold">{currentStory.metrics.costReduction}</div>
									<div className="text-sm text-muted-foreground">Cost Reduction</div>
								</div>
								<div className="p-4 rounded-lg bg-card border border-border">
									<Users className="h-5 w-5 text-primary mb-2" />
									<div className="text-2xl font-bold">{currentStory.metrics.callVolume}</div>
									<div className="text-sm text-muted-foreground">Daily Calls</div>
								</div>
								<div className="p-4 rounded-lg bg-card border border-border">
									<Star className="h-5 w-5 text-primary mb-2" />
									<div className="text-2xl font-bold">{currentStory.metrics.satisfaction}</div>
									<div className="text-sm text-muted-foreground">Satisfaction</div>
								</div>
								<div className="p-4 rounded-lg bg-card border border-border">
									<TrendingUp className="h-5 w-5 text-primary mb-2" />
									<div className="text-2xl font-bold">{currentStory.metrics.roi}</div>
									<div className="text-sm text-muted-foreground">ROI</div>
								</div>
							</div>

							{/* Story details */}
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">The Challenge</h4>
									<p className="text-muted-foreground">{currentStory.story.challenge}</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">The Solution</h4>
									<p className="text-muted-foreground">{currentStory.story.solution}</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">The Results</h4>
									<ul className="space-y-2">
										{currentStory.story.results.map((result, idx) => (
											<li key={idx} className="flex items-start gap-2">
												<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
												<span className="text-muted-foreground">{result}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						{/* Right side - Image/Video */}
						<div className="relative">
							<div className="relative rounded-2xl overflow-hidden shadow-2xl">
								<img
									src={currentStory.image}
									alt={currentStory.company}
									className="w-full h-[500px] object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
								
								{/* Play button overlay */}
								<button
									onClick={() => setShowVideo(true)}
									className="absolute inset-0 flex items-center justify-center group"
								>
									<div className="p-6 rounded-full bg-white/90 group-hover:bg-white transition-colors">
										<Play className="h-8 w-8 text-foreground ml-1" />
									</div>
								</button>

								{/* Logo overlay */}
								<div className="absolute bottom-6 left-6">
									<div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-background/90 backdrop-blur-sm">
										<span className="text-2xl">{currentStory.logo}</span>
										<span className="font-semibold">{currentStory.company}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Navigation */}
				<div className="flex items-center justify-center gap-4 mb-16">
					<button
						onClick={prevStory}
						className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>
					<div className="flex gap-2">
						{caseStudies.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setActiveStory(idx)}
								className={cn(
									"w-2 h-2 rounded-full transition-all",
									activeStory === idx ? "w-8 bg-primary" : "bg-border"
								)}
							/>
						))}
					</div>
					<button
						onClick={nextStory}
						className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>

				{/* Bottom logos */}
				<div className="text-center">
					<p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders</p>
					<div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
						{caseStudies.map((study) => (
							<div key={study.id} className="flex items-center gap-2">
								<span className="text-2xl">{study.logo}</span>
								<span className="font-semibold">{study.company}</span>
							</div>
						))}
						<div className="flex items-center gap-2">
							<Building2 className="h-6 w-6" />
							<span className="font-semibold">500+ More</span>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-16 text-center">
					<a
						href="/case-studies"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
					>
						View All Case Studies
						<ChevronRight className="h-5 w-5" />
					</a>
				</div>
			</div>
		</section>
	);
}