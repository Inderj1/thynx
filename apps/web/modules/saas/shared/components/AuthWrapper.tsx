import { config } from "@repo/config";
import { Footer } from "@saas/shared/components/Footer";
import { ColorModeToggle } from "@shared/components/ColorModeToggle";
import { LocaleSwitch } from "@shared/components/LocaleSwitch";
import { Logo } from "@shared/components/Logo";
import { cn } from "@ui/lib";
import Link from "next/link";
import { type PropsWithChildren, Suspense } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

export function AuthWrapper({
	children,
	contentClass,
}: PropsWithChildren<{ contentClass?: string }>) {
	return (
		<div className="flex min-h-screen w-full bg-gradient-to-br from-background via-primary/5 to-background">
			{/* Background pattern */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 flex w-full flex-col items-center justify-between gap-8 py-6">
				<div className="container">
					<div className="flex items-center justify-between">
						<Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
							<ArrowLeft className="h-4 w-4" />
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
									<span className="text-primary-foreground font-bold text-lg">T</span>
								</div>
								<span className="font-bold text-lg">THNYX</span>
							</div>
						</Link>

						<div className="flex items-center justify-end gap-2">
							{config.i18n.enabled && (
								<Suspense>
									<LocaleSwitch withLocaleInUrl={false} />
								</Suspense>
							)}
							<ColorModeToggle />
						</div>
					</div>
				</div>

				<div className="container flex justify-center">
					<main
						className={cn(
							"w-full max-w-md rounded-2xl bg-card/95 backdrop-blur-sm p-8 lg:p-10",
							"shadow-2xl border border-border/50",
							"relative overflow-hidden",
							contentClass,
						)}
					>
						{/* Subtle accent */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
						
						<div className="relative z-10">
							{children}
						</div>
					</main>
				</div>

				<div className="container">
					<div className="text-center text-sm text-muted-foreground">
						<p className="flex items-center justify-center gap-2">
							<Sparkles className="h-4 w-4 text-primary" />
							Powered by AI • Enterprise-Ready • Bank-Level Security
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
