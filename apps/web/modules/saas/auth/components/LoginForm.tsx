"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@repo/auth/client";
import { config } from "@repo/config";
import { useAuthErrorMessages } from "@saas/auth/hooks/errors-messages";
import { sessionQueryKey } from "@saas/auth/lib/api";
import { OrganizationInvitationAlert } from "@saas/organizations/components/OrganizationInvitationAlert";
import { useRouter } from "@shared/hooks/router";
import { useQueryClient } from "@tanstack/react-query";
import { Alert, AlertDescription, AlertTitle } from "@ui/components/alert";
import { Button } from "@ui/components/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@ui/components/form";
import { Input } from "@ui/components/input";
import {
	AlertTriangleIcon,
	ArrowRightIcon,
	EyeIcon,
	EyeOffIcon,
	KeyIcon,
	MailboxIcon,
	Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { withQuery } from "ufo";
import { z } from "zod";
import {
	type OAuthProvider,
	oAuthProviders,
} from "../constants/oauth-providers";
import { useSession } from "../hooks/use-session";
import { LoginModeSwitch } from "./LoginModeSwitch";
import { SocialSigninButton } from "./SocialSigninButton";

const formSchema = z.union([
	z.object({
		mode: z.literal("magic-link"),
		email: z.string().email(),
	}),
	z.object({
		mode: z.literal("password"),
		email: z.string().email(),
		password: z.string().min(1),
	}),
]);

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
	const t = useTranslations();
	const { getAuthErrorMessage } = useAuthErrorMessages();
	const router = useRouter();
	const queryClient = useQueryClient();
	const searchParams = useSearchParams();
	const { user, loaded: sessionLoaded } = useSession();

	const [showPassword, setShowPassword] = useState(false);
	const invitationId = searchParams.get("invitationId");
	const email = searchParams.get("email");
	const redirectTo = searchParams.get("redirectTo");

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: email ?? "",
			password: "",
			mode: config.auth.enablePasswordLogin ? "password" : "magic-link",
		},
	});

	const redirectPath = invitationId
		? `/app/organization-invitation/${invitationId}`
		: (redirectTo ?? config.auth.redirectAfterSignIn);

	useEffect(() => {
		if (sessionLoaded && user) {
			router.replace(redirectPath);
		}
	}, [user, sessionLoaded]);

	const onSubmit: SubmitHandler<FormValues> = async (values) => {
		try {
			if (values.mode === "password") {
				const { data, error } = await authClient.signIn.email({
					...values,
				});

				if (error) {
					throw error;
				}

				if ((data as any).twoFactorRedirect) {
					router.replace(
						withQuery(
							"/auth/verify",
							Object.fromEntries(searchParams.entries()),
						),
					);
					return;
				}

				queryClient.invalidateQueries({
					queryKey: sessionQueryKey,
				});

				router.replace(redirectPath);
			} else {
				const { error } = await authClient.signIn.magicLink({
					...values,
					callbackURL: redirectPath,
				});

				if (error) {
					throw error;
				}
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

	const signInWithPasskey = async () => {
		try {
			await authClient.signIn.passkey();

			router.replace(redirectPath);
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

	const signinMode = form.watch("mode");

	return (
		<div>
			<div className="text-center mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
					<Sparkles className="h-4 w-4" />
					AI-Powered Call Center
				</div>
				<h1 className="font-bold text-2xl md:text-3xl mb-2">
					{t("auth.login.title")}
				</h1>
				<p className="text-foreground/60">
					{t("auth.login.subtitle")}
				</p>
			</div>

			{form.formState.isSubmitSuccessful &&
			signinMode === "magic-link" ? (
				<Alert variant="success">
					<MailboxIcon />
					<AlertTitle>
						{t("auth.login.hints.linkSent.title")}
					</AlertTitle>
					<AlertDescription>
						{t("auth.login.hints.linkSent.message")}
					</AlertDescription>
				</Alert>
			) : (
				<>
					{invitationId && (
						<OrganizationInvitationAlert className="mb-6" />
					)}

					<Form {...form}>
						<form
							className="space-y-4"
							onSubmit={form.handleSubmit(onSubmit)}
						>
							{config.auth.enableMagicLink &&
								config.auth.enablePasswordLogin && (
									<LoginModeSwitch
										activeMode={signinMode}
										onChange={(mode) =>
											form.setValue(
												"mode",
												mode as typeof signinMode,
											)
										}
									/>
								)}

							{form.formState.isSubmitted &&
								form.formState.errors.root?.message && (
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
											{t("auth.signup.email")}
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												autoComplete="email"
												className="h-12 px-4 border-border/50 focus:border-primary"
												placeholder="you@company.com"
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							{config.auth.enablePasswordLogin &&
								signinMode === "password" && (
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<div className="flex justify-between gap-4">
													<FormLabel>
														{t(
															"auth.signup.password",
														)}
													</FormLabel>

													<Link
														href="/auth/forgot-password"
														className="text-primary hover:text-primary/80 text-xs font-medium transition-colors"
													>
														{t(
															"auth.login.forgotPassword",
														)}
													</Link>
												</div>
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
															autoComplete="current-password"
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
											</FormItem>
										)}
									/>
								)}

							<Button
								className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
								type="submit"
								size="lg"
								loading={form.formState.isSubmitting}
							>
								{signinMode === "magic-link"
									? t("auth.login.sendMagicLink")
									: t("auth.login.submit")}
								<ArrowRightIcon className="ml-2 h-4 w-4" />
							</Button>
						</form>
					</Form>

					{(config.auth.enablePasskeys ||
						(config.auth.enableSignup &&
							config.auth.enableSocialLogin)) && (
						<>
							<div className="relative my-8 h-4">
								<hr className="relative top-2 border-border/30" />
								<p className="-translate-x-1/2 absolute top-0 left-1/2 mx-auto inline-block h-4 bg-card px-3 text-center font-medium text-foreground/60 text-xs uppercase tracking-wider leading-tight">
									{t("auth.login.continueWith")}
								</p>
							</div>

							<div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2">
								{config.auth.enableSignup &&
									config.auth.enableSocialLogin &&
									Object.keys(oAuthProviders).map(
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

								{config.auth.enablePasskeys && (
									<Button
										variant="outline"
										className="w-full h-12 sm:col-span-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
										onClick={() => signInWithPasskey()}
									>
										<KeyIcon className="mr-2 size-4 text-primary" />
										{t("auth.login.loginWithPasskey")}
									</Button>
								)}
							</div>
						</>
					)}

					{config.auth.enableSignup && (
						<div className="mt-8 pt-8 border-t border-border/30 text-center text-sm">
							<span className="text-foreground/60">
								{t("auth.login.dontHaveAnAccount")}{" "}
							</span>
							<Link
								href={withQuery(
									"/auth/signup",
									Object.fromEntries(searchParams.entries()),
								)}
								className="text-primary hover:text-primary/80 font-medium transition-colors"
							>
								{t("auth.login.createAnAccount")}
								<ArrowRightIcon className="ml-1 inline size-4 align-middle" />
							</Link>
						</div>
					)}
				</>
			)}
		</div>
	);
}