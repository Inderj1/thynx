"use client";

import { LocaleLink, useLocalePathname } from "@i18n/routing";
import { config } from "@repo/config";
import { useSession } from "@saas/auth/hooks/use-session";
import { ColorModeToggle } from "@shared/components/ColorModeToggle";
import { LocaleSwitch } from "@shared/components/LocaleSwitch";
import { Logo } from "@shared/components/Logo";
import { Button } from "@ui/components/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@ui/components/sheet";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { cn } from "@ui/lib";
import { 
	MenuIcon, 
	ChevronDown, 
	Sparkles, 
	Shield, 
	Zap, 
	Users, 
	BookOpen, 
	Phone,
	Building2,
	Heart,
	ShoppingCart,
	Calculator,
	FileText,
	Briefcase
} from "lucide-react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

const solutions = [
	{
		title: "Enterprise Solutions",
		href: "/solutions",
		description: "Scale your call center with AI-powered automation",
		icon: Building2,
	},
	{
		title: "Small Business",
		href: "/solutions/small-business",
		description: "Affordable AI solutions for growing teams",
		icon: Briefcase,
	},
	{
		title: "Healthcare",
		href: "/industries/healthcare",
		description: "HIPAA-compliant patient support",
		icon: Heart,
	},
	{
		title: "E-commerce",
		href: "/industries/ecommerce",
		description: "24/7 customer support automation",
		icon: ShoppingCart,
	},
];

const resources = [
	{
		title: "Documentation",
		href: "/docs",
		description: "Get started with our API",
		icon: BookOpen,
	},
	{
		title: "Blog",
		href: "/blog",
		description: "Latest insights and updates",
		icon: FileText,
	},
	{
		title: "Case Studies",
		href: "/case-studies",
		description: "Success stories from our customers",
		icon: Users,
	},
	{
		title: "ROI Calculator",
		href: "/roi-calculator",
		description: "Calculate your savings",
		icon: Calculator,
	},
];

export function NavBar() {
	const t = useTranslations();
	const { user } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const localePathname = useLocalePathname();
	const [isTop, setIsTop] = useState(true);

	const debouncedScrollHandler = useDebounceCallback(
		() => {
			setIsTop(window.scrollY <= 10);
		},
		150,
		{
			maxWait: 150,
		},
	);

	useEffect(() => {
		window.addEventListener("scroll", debouncedScrollHandler);
		debouncedScrollHandler();
		return () => {
			window.removeEventListener("scroll", debouncedScrollHandler);
		};
	}, [debouncedScrollHandler]);

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [localePathname]);

	const isDocsPage = localePathname.startsWith("/docs");

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 z-50 w-full transition-all duration-300",
				!isTop || isDocsPage
					? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
					: "bg-transparent",
			)}
			data-test="navigation"
		>
			<div className="container">
				<div
					className={cn(
						"flex items-center justify-between gap-6 transition-[padding] duration-300",
						!isTop || isDocsPage ? "py-4" : "py-6",
					)}
				>
					{/* Logo */}
					<div className="flex items-center">
						<LocaleLink
							href="/"
							className="flex items-center gap-2 hover:no-underline"
						>
							<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-xl">T</span>
							</div>
							<span className="font-bold text-xl hidden sm:block">THNYX</span>
						</LocaleLink>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-6">
						{/* Solutions Dropdown */}
						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
								Solutions
								<ChevronDown className="h-4 w-4" />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[280px]">
								{solutions.map((item) => (
									<DropdownMenuItem key={item.href} asChild>
										<LocaleLink
											href={item.href}
											className="flex items-start gap-3 p-3 cursor-pointer"
										>
											<item.icon className="h-5 w-5 text-primary mt-0.5" />
											<div>
												<div className="font-medium">{item.title}</div>
												<div className="text-sm text-muted-foreground">
													{item.description}
												</div>
											</div>
										</LocaleLink>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>

						<LocaleLink href="/technology" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
							Technology
						</LocaleLink>

						<LocaleLink href="/pricing" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
							Pricing
						</LocaleLink>

						{/* Resources Dropdown */}
						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
								Resources
								<ChevronDown className="h-4 w-4" />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[280px]">
								{resources.map((item) => (
									<DropdownMenuItem key={item.href} asChild>
										<LocaleLink
											href={item.href}
											className="flex items-start gap-3 p-3 cursor-pointer"
										>
											<item.icon className="h-5 w-5 text-primary mt-0.5" />
											<div>
												<div className="font-medium">{item.title}</div>
												<div className="text-sm text-muted-foreground">
													{item.description}
												</div>
											</div>
										</LocaleLink>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>

						<LocaleLink href="/company" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
							Company
						</LocaleLink>
					</div>

					{/* Right side actions */}
					<div className="flex items-center gap-3">
						<ColorModeToggle />
						{config.i18n.enabled && (
							<Suspense>
								<LocaleSwitch />
							</Suspense>
						)}

						{/* Desktop CTAs */}
						<div className="hidden lg:flex items-center gap-3">
							<Button variant="ghost" asChild>
								<LocaleLink href="/investors">
									For Investors
								</LocaleLink>
							</Button>
							{user ? (
								<Button asChild>
									<NextLink href="/app">Dashboard</NextLink>
								</Button>
							) : (
								<>
									<Button variant="ghost" asChild>
										<NextLink href="/auth/login">Sign In</NextLink>
									</Button>
									<Button asChild className="bg-primary hover:bg-primary/90">
										<LocaleLink href="/#demo" className="flex items-center gap-2">
											<Phone className="h-4 w-4" />
											Book Demo
										</LocaleLink>
									</Button>
								</>
							)}
						</div>

						{/* Mobile menu */}
						<Sheet
							open={mobileMenuOpen}
							onOpenChange={(open) => setMobileMenuOpen(open)}
						>
							<SheetTrigger asChild>
								<Button
									className="lg:hidden"
									size="icon"
									variant="ghost"
									aria-label="Menu"
								>
									<MenuIcon className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent className="w-[300px]" side="right">
								<SheetTitle className="text-left">Menu</SheetTitle>
								<div className="flex flex-col gap-4 mt-8">
									{/* Mobile Solutions */}
									<div>
										<h3 className="font-semibold text-sm text-muted-foreground mb-2">Solutions</h3>
										<div className="flex flex-col gap-2">
											{solutions.map((item) => (
												<LocaleLink
													key={item.href}
													href={item.href}
													className="flex items-center gap-2 px-2 py-1.5 text-sm hover:text-primary transition-colors"
												>
													<item.icon className="h-4 w-4" />
													{item.title}
												</LocaleLink>
											))}
										</div>
									</div>

									{/* Mobile main links */}
									<div className="flex flex-col gap-2">
										<LocaleLink href="/technology" className="px-2 py-1.5 text-sm font-medium hover:text-primary">
											Technology
										</LocaleLink>
										<LocaleLink href="/pricing" className="px-2 py-1.5 text-sm font-medium hover:text-primary">
											Pricing
										</LocaleLink>
										<LocaleLink href="/company" className="px-2 py-1.5 text-sm font-medium hover:text-primary">
											Company
										</LocaleLink>
									</div>

									{/* Mobile Resources */}
									<div>
										<h3 className="font-semibold text-sm text-muted-foreground mb-2">Resources</h3>
										<div className="flex flex-col gap-2">
											{resources.map((item) => (
												<LocaleLink
													key={item.href}
													href={item.href}
													className="flex items-center gap-2 px-2 py-1.5 text-sm hover:text-primary transition-colors"
												>
													<item.icon className="h-4 w-4" />
													{item.title}
												</LocaleLink>
											))}
										</div>
									</div>

									{/* Mobile CTAs */}
									<div className="flex flex-col gap-2 mt-4 pt-4 border-t">
										<Button variant="outline" asChild className="w-full">
											<LocaleLink href="/investors">For Investors</LocaleLink>
										</Button>
										{user ? (
											<Button asChild className="w-full">
												<NextLink href="/app">Dashboard</NextLink>
											</Button>
										) : (
											<>
												<Button variant="ghost" asChild className="w-full">
													<NextLink href="/auth/login">Sign In</NextLink>
												</Button>
												<Button asChild className="w-full">
													<LocaleLink href="/demo">Book Demo</LocaleLink>
												</Button>
											</>
										)}
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}