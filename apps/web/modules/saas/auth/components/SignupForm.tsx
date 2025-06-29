"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@repo/auth/client";
import { config } from "@repo/config";
import { useAuthErrorMessages } from "@saas/auth/hooks/errors-messages";
import { OrganizationInvitationAlert } from "@saas/organizations/components/OrganizationInvitationAlert";
import { useFormErrors } from "@shared/hooks/form-errors";
import { Alert, AlertDescription, AlertTitle } from "@ui/components/alert";
import { Button } from "@ui/components/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/components/form";
import { Input } from "@ui/components/input";
import {
	AlertTriangleIcon,
	ArrowRightIcon,
	EyeIcon,
	EyeOffIcon,
	MailboxIcon,
	UserPlus,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { withQuery } from "ufo";
import { z } from "zod";
import {
	type OAuthProvider,
	oAuthProviders,
} from "../constants/oauth-providers";
import { SocialSigninButton } from "./SocialSigninButton";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
	name: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export function SignupForm({ prefillEmail }: { prefillEmail?: string }) {
	const t = useTranslations();
	const router = useRouter();
	const { zodErrorMap } = useFormErrors();
	const { getAuthErrorMessage } = useAuthErrorMessages();
	const searchParams = useSearchParams();

	const [showPassword, setShowPassword] = useState(false);
	const invitationId = searchParams.get("invitationId");
	const email = searchParams.get("email");
	const redirectTo = searchParams.get("redirectTo");

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema, {
			errorMap: zodErrorMap,
		}),
		values: {
			name: "",
			email: prefillEmail ?? email ?? "",
			password: "",
		},
	});

	const invitationOnlyMode = !config.auth.enableSignup && invitationId;

	const redirectPath = invitationId
		? `/app/organization-invitation/${invitationId}`
		: (redirectTo ?? config.auth.redirectAfterSignIn);

	const onSubmit: SubmitHandler<FormValues> = async ({
		email,
		password,
		name,
	}) => {
		try {
			const { error } = await authClient.signUp.email({
				email,
				password,
				name,
				callbackURL: redirectPath,
			});

			if (error) {
				throw error;
			}

			if (invitationOnlyMode) {
				const { error } =
					await authClient.organization.acceptInvitation({
						invitationId,
					});

				if (error) {
					throw error;
				}

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
	};

	return (
		<div>
			<div className="text-center mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
					<UserPlus className="h-4 w-4" />
					Join THNYX AI Platform
				</div>
				<h1 className="font-bold text-2xl md:text-3xl mb-2">
					{t("auth.signup.title")}
				</h1>
				<p className="text-foreground/60">
					{t("auth.signup.message")}
				</p>
			</div>

			{form.formState.isSubmitSuccessful && !invitationOnlyMode ? (
				<Alert variant="success">
					<MailboxIcon />
					<AlertTitle>
						{t("auth.signup.hints.verifyEmail")}
					</AlertTitle>
				</Alert>
			) : (
				<>
					{invitationId && (
						<OrganizationInvitationAlert className="mb-6" />
					)}

					<Form {...form}>
						<form
							className="flex flex-col items-stretch gap-4"
							onSubmit={form.handleSubmit(onSubmit)}
						>
							{form.formState.isSubmitted &&
								form.formState.errors.root && (
									<Alert variant="error">
										<AlertTriangleIcon />
										<AlertDescription>
											{form.formState.errors.root.message}
										</AlertDescription>
									</Alert>
								)}

							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{t("auth.signup.name")}
										</FormLabel>
										<FormControl>
											<Input 
												{...field} 
												className="h-12 px-4 border-border/50 focus:border-primary"
												placeholder="John Doe"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{t("auth.signup.email")}
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												autoComplete="email"
												readOnly={!!prefillEmail}
												className="h-12 px-4 border-border/50 focus:border-primary"
												placeholder="you@company.com"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{t("auth.signup.password")}
										</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type={
														showPassword
															? "text"
															: "password"
													}
													className="h-12 pl-4 pr-12 border-border/50 focus:border-primary"
													{...field}
													autoComplete="new-password"
													placeholder="••••••••"
												/>
												<button
													type="button"
													onClick={() =>
														setShowPassword(
															!showPassword,
														)
													}
													className="absolute inset-y-0 right-0 flex items-center pr-4 text-foreground/60 hover:text-foreground transition-colors"
												>
													{showPassword ? (
														<EyeOffIcon className="size-5" />
													) : (
														<EyeIcon className="size-5" />
													)}
												</button>
											</div>
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
								{t("auth.signup.submit")}
								<ArrowRightIcon className="ml-2 h-4 w-4" />
							</Button>
						</form>
					</Form>

					{config.auth.enableSignup &&
						config.auth.enableSocialLogin && (
							<>
								<div className="relative my-8 h-4">
									<hr className="relative top-2 border-border/30" />
									<p className="-translate-x-1/2 absolute top-0 left-1/2 mx-auto inline-block h-4 bg-card px-3 text-center font-medium text-foreground/60 text-xs uppercase tracking-wider leading-tight">
										{t("auth.login.continueWith")}
									</p>
								</div>

								<div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2">
									{Object.keys(oAuthProviders).map(
										(providerId) => (
											<SocialSigninButton
												key={providerId}
												provider={
													providerId as OAuthProvider
												}
												className="h-12 border-border/50 hover:border-primary hover:bg-primary/5 transition-all"
											/>
										),
									)}
								</div>
							</>
						)}
				</>
			)}

			<div className="mt-8 pt-8 border-t border-border/30 text-center text-sm">
				<span className="text-foreground/60">
					{t("auth.signup.alreadyHaveAccount")}{" "}
				</span>
				<Link
					href={withQuery(
						"/auth/login",
						Object.fromEntries(searchParams.entries()),
					)}
					className="text-primary hover:text-primary/80 font-medium transition-colors"
				>
					{t("auth.signup.signIn")}
					<ArrowRightIcon className="ml-1 inline size-4 align-middle" />
				</Link>
			</div>
		</div>
	);
}