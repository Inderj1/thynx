"use client";

import { useState } from "react";
import { 
	Calculator,
	DollarSign,
	TrendingUp,
	Users,
	Clock,
	ArrowRight,
	CheckCircle
} from "lucide-react";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { Label } from "@ui/components/label";
import { cn } from "@ui/lib";

export function ROICalculator() {
	const [agents, setAgents] = useState(50);
	const [avgSalary, setAvgSalary] = useState(40000);
	const [callsPerDay, setCallsPerDay] = useState(100);
	const [avgHandleTime, setAvgHandleTime] = useState(6);

	// Calculations
	const currentCost = agents * avgSalary;
	const thnyxAgentsNeeded = Math.ceil(agents * 0.2); // 80% reduction in agents
	const thnyxCost = callsPerDay * agents * 365 * 0.10; // $0.10 per call
	const annualSavings = currentCost - thnyxCost;
	const savingsPercentage = Math.round((annualSavings / currentCost) * 100);
	const timeRecovered = (avgHandleTime * 0.6 * callsPerDay * agents * 365) / 60; // Hours saved

	return (
		<section className="py-20 bg-muted/30">
			<div className="container">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
							<Calculator className="h-4 w-4" />
							ROI Calculator
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Calculate Your Savings
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							See how much THNYX can save your enterprise in just 60 seconds
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{/* Calculator inputs */}
						<div className="rounded-2xl border bg-card p-8">
							<h3 className="text-xl font-semibold mb-6">Your Current Setup</h3>
							
							<div className="space-y-6">
								<div>
									<Label htmlFor="agents" className="flex items-center gap-2 mb-2">
										<Users className="h-4 w-4" />
										Number of Call Center Agents
									</Label>
									<Input
										id="agents"
										type="number"
										value={agents}
										onChange={(e) => setAgents(parseInt(e.target.value) || 0)}
										className="text-lg"
									/>
								</div>

								<div>
									<Label htmlFor="salary" className="flex items-center gap-2 mb-2">
										<DollarSign className="h-4 w-4" />
										Average Agent Salary (Annual)
									</Label>
									<Input
										id="salary"
										type="number"
										value={avgSalary}
										onChange={(e) => setAvgSalary(parseInt(e.target.value) || 0)}
										className="text-lg"
										step="1000"
									/>
								</div>

								<div>
									<Label htmlFor="calls" className="flex items-center gap-2 mb-2">
										<Clock className="h-4 w-4" />
										Calls per Agent per Day
									</Label>
									<Input
										id="calls"
										type="number"
										value={callsPerDay}
										onChange={(e) => setCallsPerDay(parseInt(e.target.value) || 0)}
										className="text-lg"
									/>
								</div>

								<div>
									<Label htmlFor="handle-time" className="flex items-center gap-2 mb-2">
										<Clock className="h-4 w-4" />
										Average Handle Time (minutes)
									</Label>
									<Input
										id="handle-time"
										type="number"
										value={avgHandleTime}
										onChange={(e) => setAvgHandleTime(parseInt(e.target.value) || 0)}
										className="text-lg"
									/>
								</div>
							</div>
						</div>

						{/* Results */}
						<div className="rounded-2xl border-2 border-primary bg-primary/5 p-8">
							<h3 className="text-xl font-semibold mb-6">Your Savings with THNYX</h3>
							
							<div className="space-y-6">
								{/* Annual savings */}
								<div className="text-center p-6 rounded-xl bg-card border border-primary/20">
									<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
										${annualSavings.toLocaleString()}
									</div>
									<div className="text-muted-foreground">Annual Savings</div>
									<div className="text-2xl font-semibold text-success mt-2">
										{savingsPercentage}% Cost Reduction
									</div>
								</div>

								{/* Breakdown */}
								<div className="space-y-4">
									<div className="flex justify-between items-center p-3 rounded-lg bg-card">
										<span className="text-sm text-muted-foreground">Current Annual Cost</span>
										<span className="font-semibold">${currentCost.toLocaleString()}</span>
									</div>
									<div className="flex justify-between items-center p-3 rounded-lg bg-card">
										<span className="text-sm text-muted-foreground">THNYX Annual Cost</span>
										<span className="font-semibold text-primary">${Math.round(thnyxCost).toLocaleString()}</span>
									</div>
									<div className="flex justify-between items-center p-3 rounded-lg bg-card">
										<span className="text-sm text-muted-foreground">Human Agents Needed</span>
										<span className="font-semibold">{thnyxAgentsNeeded} (for escalations)</span>
									</div>
									<div className="flex justify-between items-center p-3 rounded-lg bg-card">
										<span className="text-sm text-muted-foreground">Time Saved Annually</span>
										<span className="font-semibold">{Math.round(timeRecovered).toLocaleString()} hours</span>
									</div>
								</div>

								{/* Additional benefits */}
								<div className="space-y-2 pt-4 border-t">
									<div className="flex items-center gap-2 text-sm">
										<CheckCircle className="h-4 w-4 text-success" />
										<span>24/7 availability vs limited hours</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<CheckCircle className="h-4 w-4 text-success" />
										<span>Instant scaling during peak times</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<CheckCircle className="h-4 w-4 text-success" />
										<span>50+ language support included</span>
									</div>
								</div>

								{/* CTA */}
								<Button className="w-full" size="lg" asChild>
									<a href="/#demo">
										Get Detailed ROI Report
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</Button>
							</div>
						</div>
					</div>

					{/* Disclaimer */}
					<p className="text-center text-sm text-muted-foreground mt-8">
						* Calculations based on industry averages. Actual savings may vary based on your specific use case and implementation.
					</p>
				</div>
			</div>
		</section>
	);
}