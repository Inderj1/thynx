"use client";

import { Button } from "@ui/components/button";
import { cn } from "@ui/lib";
import { forwardRef } from "react";
import type { ButtonProps } from "@ui/components/button";

interface EnhancedButtonProps extends ButtonProps {
	glow?: boolean;
	float?: boolean;
	gradient?: boolean;
}

export const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
	({ className, children, variant = "default", glow = false, float = false, gradient = false, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				variant={variant}
				className={cn(
					"relative overflow-hidden transition-all duration-300",
					"hover:shadow-xl hover:-translate-y-0.5",
					glow && "animate-pulse-glow",
					float && "animate-float",
					gradient && variant === "default" && "bg-gradient-to-r from-primary to-primary-dark border-0",
					gradient && variant === "outline" && "border-gradient",
					className
				)}
				{...props}
			>
				{/* Shimmer effect on hover */}
				<span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
				<span className="relative z-10 flex items-center gap-2">
					{children}
				</span>
			</Button>
		);
	}
);

EnhancedButton.displayName = "EnhancedButton";