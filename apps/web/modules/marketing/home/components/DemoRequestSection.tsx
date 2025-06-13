"use client";

import { useState } from "react";
import { 
	Calendar,
	Clock,
	Phone,
	Mail,
	Building2,
	Users,
	CheckCircle,
	ArrowRight,
	Zap,
	PhoneCall,
	Monitor,
	CalendarCheck
} from "lucide-react";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { Label } from "@ui/components/label";
import { Textarea } from "@ui/components/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/components/select";
import { cn } from "@ui/lib";

const benefits = [
	{
		icon: Clock,
		title: "30-minute personalized demo",
		description: "See THNYX in action, tailored to your use case"
	},
	{
		icon: Users,
		title: "Talk to our experts",
		description: "Get answers from our AI and call center specialists"
	},
	{
		icon: CheckCircle,
		title: "Custom ROI analysis",
		description: "See exactly how much you'll save with THNYX"
	}
];

const demoTypes = [
	{
		id: "live-demo",
		icon: PhoneCall,
		title: "Live Demo Call",
		description: "Join a video call with our team for a personalized walkthrough",
		duration: "30 minutes"
	},
	{
		id: "self-guided",
		icon: Monitor,
		title: "Self-Guided Demo",
		description: "Explore THNYX at your own pace with our interactive demo",
		duration: "15 minutes"
	},
	{
		id: "schedule-later",
		icon: CalendarCheck,
		title: "Schedule for Later",
		description: "Book a time that works best for your team",
		duration: "Flexible"
	}
];

export function DemoRequestSection() {
	const [selectedType, setSelectedType] = useState("live-demo");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return (
			<section id="demo" className="py-20 relative overflow-hidden">
				<div className="container">
					<div className="max-w-2xl mx-auto text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
							<CheckCircle className="h-8 w-8 text-success" />
						</div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Demo Request Received!
						</h2>
						<p className="text-xl text-muted-foreground mb-8">
							Thank you for your interest in THNYX. Our team will contact you within 24 hours to schedule your demo.
						</p>
						<Button 
							onClick={() => setIsSubmitted(false)}
							variant="outline"
						>
							Submit Another Request
						</Button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="demo" className="py-20 relative overflow-hidden bg-muted/30">
			<div className="container">
				{/* Section header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						<Zap className="h-4 w-4" />
						See THNYX in Action
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Request a Demo Today
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover how THNYX can transform your call center operations and reduce costs by 70%
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Left side - Benefits */}
					<div>
						<h3 className="text-2xl font-bold mb-8">What to expect</h3>
						
						<div className="space-y-6 mb-8">
							{benefits.map((benefit, idx) => (
								<div 
									key={benefit.title}
									className="flex gap-4 animate-slide-up"
									style={{ animationDelay: `${idx * 100}ms` }}
								>
									<div className="p-3 rounded-lg bg-primary/10 h-fit">
										<benefit.icon className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h4 className="font-semibold mb-1">{benefit.title}</h4>
										<p className="text-muted-foreground">{benefit.description}</p>
									</div>
								</div>
							))}
						</div>

						{/* Demo type selector */}
						<div className="space-y-4">
							<h4 className="font-semibold">Choose your demo experience</h4>
							<div className="space-y-3">
								{demoTypes.map((type) => (
									<button
										key={type.id}
										onClick={() => setSelectedType(type.id)}
										className={cn(
											"w-full p-4 rounded-lg border text-left transition-all",
											"hover:border-primary/50",
											selectedType === type.id
												? "border-primary bg-primary/5"
												: "border-border bg-card"
										)}
									>
										<div className="flex items-start gap-3">
											<type.icon className={cn(
												"h-5 w-5 mt-0.5",
												selectedType === type.id ? "text-primary" : "text-muted-foreground"
											)} />
											<div className="flex-1">
												<div className="font-medium mb-1">{type.title}</div>
												<div className="text-sm text-muted-foreground">{type.description}</div>
												<div className="text-xs text-primary mt-1">Duration: {type.duration}</div>
											</div>
										</div>
									</button>
								))}
							</div>
						</div>

						{/* Stats */}
						<div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
							<div className="grid grid-cols-3 gap-4 text-center">
								<div>
									<div className="text-2xl font-bold text-primary">500+</div>
									<div className="text-xs text-muted-foreground">Demos Given</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-primary">4.9/5</div>
									<div className="text-xs text-muted-foreground">Demo Rating</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-primary">24hr</div>
									<div className="text-xs text-muted-foreground">Response Time</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right side - Form */}
					<div>
						<div className="rounded-2xl bg-card border p-8">
							<h3 className="text-xl font-semibold mb-6">Fill out the form to get started</h3>
							
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<Label htmlFor="firstName">First Name *</Label>
										<Input 
											id="firstName"
											required
											placeholder="John"
											className="mt-1.5"
										/>
									</div>
									<div>
										<Label htmlFor="lastName">Last Name *</Label>
										<Input 
											id="lastName"
											required
											placeholder="Doe"
											className="mt-1.5"
										/>
									</div>
								</div>

								<div>
									<Label htmlFor="email">Work Email *</Label>
									<Input 
										id="email"
										type="email"
										required
										placeholder="john@company.com"
										className="mt-1.5"
									/>
								</div>

								<div>
									<Label htmlFor="phone">Phone Number</Label>
									<Input 
										id="phone"
										type="tel"
										placeholder="+1 (555) 123-4567"
										className="mt-1.5"
									/>
								</div>

								<div>
									<Label htmlFor="company">Company *</Label>
									<Input 
										id="company"
										required
										placeholder="Acme Corp"
										className="mt-1.5"
									/>
								</div>

								<div>
									<Label htmlFor="companySize">Company Size *</Label>
									<Select required>
										<SelectTrigger className="mt-1.5">
											<SelectValue placeholder="Select company size" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1-50">1-50 employees</SelectItem>
											<SelectItem value="51-200">51-200 employees</SelectItem>
											<SelectItem value="201-500">201-500 employees</SelectItem>
											<SelectItem value="501-1000">501-1000 employees</SelectItem>
											<SelectItem value="1000+">1000+ employees</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<Label htmlFor="callVolume">Monthly Call Volume</Label>
									<Select>
										<SelectTrigger className="mt-1.5">
											<SelectValue placeholder="Select call volume" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="<1000">Less than 1,000</SelectItem>
											<SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
											<SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
											<SelectItem value="10000-50000">10,000 - 50,000</SelectItem>
											<SelectItem value="50000+">50,000+</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<Label htmlFor="useCase">Tell us about your use case</Label>
									<Textarea 
										id="useCase"
										placeholder="What challenges are you looking to solve with THNYX?"
										className="mt-1.5 min-h-[100px]"
									/>
								</div>

								<Button 
									type="submit"
									className="w-full h-12 bg-primary hover:bg-primary/90"
									size="lg"
									loading={isSubmitting}
								>
									{selectedType === "self-guided" ? "Start Self-Guided Demo" : "Request Demo"}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>

								<p className="text-xs text-center text-muted-foreground">
									By submitting this form, you agree to our{" "}
									<a href="/legal/privacy-policy" className="underline">Privacy Policy</a> and{" "}
									<a href="/legal/terms" className="underline">Terms of Service</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}