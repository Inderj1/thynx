"use client";

import { 
	Calendar,
	Settings,
	Users,
	Rocket,
	CheckCircle,
	ArrowRight,
	Clock,
	HeadphonesIcon
} from "lucide-react";
import { cn } from "@ui/lib";

const phases = [
	{
		week: "Week 1",
		title: "Discovery & Planning",
		icon: Calendar,
		activities: [
			"Stakeholder alignment meetings",
			"Current state analysis",
			"Use case prioritization",
			"Success metrics definition"
		],
		deliverables: "Implementation roadmap & timeline"
	},
	{
		week: "Week 2",
		title: "Integration & Setup",
		icon: Settings,
		activities: [
			"CRM & system integrations",
			"Data migration planning",
			"Security configuration",
			"API setup & testing"
		],
		deliverables: "Connected systems & test environment"
	},
	{
		week: "Week 3",
		title: "AI Training & Customization",
		icon: Users,
		activities: [
			"Knowledge base import",
			"Custom AI model training",
			"Voice & tone configuration",
			"Workflow automation setup"
		],
		deliverables: "Trained AI agents ready for testing"
	},
	{
		week: "Week 4",
		title: "Testing & Optimization",
		icon: CheckCircle,
		activities: [
			"UAT with your team",
			"Performance optimization",
			"Edge case handling",
			"Staff training sessions"
		],
		deliverables: "Optimized system ready for launch"
	},
	{
		week: "Week 5",
		title: "Pilot Launch",
		icon: Rocket,
		activities: [
			"Soft launch with subset",
			"Real-time monitoring",
			"Feedback collection",
			"Rapid iterations"
		],
		deliverables: "Validated solution handling real calls"
	},
	{
		week: "Week 6-7",
		title: "Full Deployment",
		icon: HeadphonesIcon,
		activities: [
			"Phased rollout plan",
			"24/7 monitoring setup",
			"Performance dashboards",
			"Success team handoff"
		],
		deliverables: "Fully operational AI call center"
	}
];

export function ImplementationProcess() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
							<Clock className="h-4 w-4" />
							Implementation Timeline
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Live in 7 Weeks
							<span className="block mt-2 text-2xl font-normal text-muted-foreground">
								Our proven implementation process
							</span>
						</h2>
					</div>

					{/* Timeline */}
					<div className="relative">
						{/* Connection line */}
						<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

						<div className="space-y-6">
							{phases.map((phase, idx) => (
								<div
									key={phase.title}
									className={cn(
										"relative grid lg:grid-cols-[120px,1fr] gap-6",
										"animate-slide-up"
									)}
									style={{ animationDelay: `${idx * 100}ms` }}
								>
									{/* Week indicator */}
									<div className="lg:text-right">
										<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
											{phase.week}
										</div>
									</div>

									{/* Content card */}
									<div className="relative">
										{/* Connection dot */}
										<div className="absolute -left-[52px] top-4 w-4 h-4 rounded-full bg-primary border-2 border-background hidden lg:block" />
										
										<div className="p-6 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
											<div className="flex items-start gap-4">
												<div className="p-3 rounded-lg bg-primary/10">
													<phase.icon className="h-6 w-6 text-primary" />
												</div>
												<div className="flex-1">
													<h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
													
													<div className="grid md:grid-cols-2 gap-6">
														<div>
															<h4 className="text-sm font-medium text-muted-foreground mb-2">Key Activities</h4>
															<ul className="space-y-1">
																{phase.activities.map((activity) => (
																	<li key={activity} className="flex items-start gap-2 text-sm">
																		<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
																		<span>{activity}</span>
																	</li>
																))}
															</ul>
														</div>
														<div>
															<h4 className="text-sm font-medium text-muted-foreground mb-2">Deliverables</h4>
															<p className="text-sm">{phase.deliverables}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Support info */}
					<div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
						<h3 className="text-2xl font-bold mb-4">
							Dedicated Implementation Team
						</h3>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							Your success is guaranteed with our experienced implementation specialists, 
							solution architects, and customer success managers guiding you every step of the way.
						</p>
						<div className="flex flex-wrap justify-center gap-8">
							<div>
								<div className="text-3xl font-bold text-primary">100%</div>
								<div className="text-sm text-muted-foreground">Success Rate</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-primary">24/7</div>
								<div className="text-sm text-muted-foreground">Support During Launch</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-primary">500+</div>
								<div className="text-sm text-muted-foreground">Implementations</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}