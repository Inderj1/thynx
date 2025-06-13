"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription, AlertTitle } from "@ui/components/alert";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { AlertTriangleIcon, ArrowLeftIcon, ArrowRightIcon, MailboxIcon, KeyRound } from "lucide-react";

import { authClient } from "@repo/auth/client";
import { useAuthErrorMessages } from "@saas/auth/hooks/errors-messages";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/components/form";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	email: z.string().email(),
});

type FormValues = z.infer<typeof formSchema>;

export function ForgotPasswordForm() {
	const t = useTranslations();
	const { getAuthErrorMessage } = useAuthErrorMessages();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = form.handleSubmit(async ({ email }) => {
		try {
			const redirectTo = new URL(
				"/auth/reset-password",
				window.location.origin,
			).toString();

			const { error } = await authClient.forgetPassword({
				email,
				redirectTo,
			});

			if (error) {
				throw error;
			}
		} catch (e) {
			form.setError("root", {
				message: getAuthErrorMessage(
					e && typeof e === "object" && "code" in e
						? (e.code as string)
						: undefined,
				),
			});
		}
	});

	return (
		<>
			<div className="text-center mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
					<KeyRound className="h-4 w-4" />
					Password Recovery
				</div>
				<h1 className="font-bold text-2xl md:text-3xl mb-2">
					{t("auth.forgotPassword.title")}
				</h1>
				<p className="text-foreground/60">
					{t("auth.forgotPassword.message")}{" "}
				</p>
			</div>

			{form.formState.isSubmitSuccessful ? (
				<Alert variant="success">
					<MailboxIcon />
					<AlertTitle>
						{t("auth.forgotPassword.hints.linkSent.title")}
					</AlertTitle>
					<AlertDescription>
						{t("auth.forgotPassword.hints.linkSent.message")}
					</AlertDescription>
				</Alert>
			) : (
				<Form {...form}>
					<form
						className="flex flex-col items-stretch gap-4"
						onSubmit={onSubmit}
					>
						{form.formState.errors.root && (
							<Alert variant="error">
								<AlertTriangleIcon />
								<AlertTitle>
									{form.formState.errors.root.message}
								</AlertTitle>
							</Alert>
						)}

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("auth.forgotPassword.email")}
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											autoComplete="email"
											className="h-12 px-4 border-border/50 focus:border-primary"
											placeholder="you@company.com"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button 
							loading={form.formState.isSubmitting}
							className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
							size="lg"
						>
							{t("auth.forgotPassword.submit")}
							<ArrowRightIcon className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</Form>
			)}

			<div className="mt-8 pt-8 border-t border-border/30 text-center text-sm">
				<Link 
					href="/auth/login"
					className="text-primary hover:text-primary/80 font-medium transition-colors"
				>
					<ArrowLeftIcon className="mr-1 inline size-4 align-middle" />
					{t("auth.forgotPassword.backToSignin")}
				</Link>
			</div>
		</>
	);
}
