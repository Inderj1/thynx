"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertTitle } from "@ui/components/alert";
import { Button } from "@ui/components/button";
import { AlertTriangleIcon, ArrowLeftIcon, ArrowRightIcon, MailboxIcon, ShieldCheck } from "lucide-react";

import { authClient } from "@repo/auth/client";
import { config } from "@repo/config";
import { useAuthErrorMessages } from "@saas/auth/hooks/errors-messages";
import { useSession } from "@saas/auth/hooks/use-session";
import { useRouter } from "@shared/hooks/router";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/components/form";
import { PasswordInput } from "@ui/components/password-input";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	password: z.string().min(8),
});

type FormValues = z.infer<typeof formSchema>;

export function ResetPasswordForm() {
	const t = useTranslations();
	const { user } = useSession();
	const router = useRouter();
	const { getAuthErrorMessage } = useAuthErrorMessages();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: "",
		},
	});

	const onSubmit = form.handleSubmit(async ({ password }) => {
		try {
			const { error } = await authClient.resetPassword({
				token: token ?? undefined,
				newPassword: password,
			});

			if (error) {
				throw error;
			}

			if (user) {
				router.push(config.auth.redirectAfterSignIn);
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
					<ShieldCheck className="h-4 w-4" />
					Secure Password Reset
				</div>
				<h1 className="font-bold text-2xl md:text-3xl mb-2">
					{t("auth.resetPassword.title")}
				</h1>
				<p className="text-foreground/60">
					{t("auth.resetPassword.message")}{" "}
				</p>
			</div>

			{form.formState.isSubmitSuccessful ? (
				<Alert variant="success">
					<MailboxIcon />
					<AlertTitle>
						{t("auth.resetPassword.hints.success")}
					</AlertTitle>
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
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("auth.resetPassword.newPassword")}
									</FormLabel>
									<FormControl>
										<PasswordInput
											autoComplete="new-password"
											className="h-12 px-4 border-border/50 focus:border-primary"
											{...field}
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
							{t("auth.resetPassword.submit")}
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
					{t("auth.resetPassword.backToSignin")}
				</Link>
			</div>
		</>
	);
}
