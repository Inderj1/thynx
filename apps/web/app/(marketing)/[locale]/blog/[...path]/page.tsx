import { LocaleLink, localeRedirect } from "@i18n/routing";
import { PostContent } from "@marketing/blog/components/PostContent";
import { getPostBySlug } from "@marketing/blog/utils/lib/posts";
import { getBaseUrl } from "@repo/utils";
import { getActivePathFromUrlParam } from "@shared/lib/content";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Params = {
	path: string;
	locale: string;
};

export async function generateMetadata(props: { params: Promise<Params> }) {
	const params = await props.params;

	const { path } = params;

	const locale = await getLocale();
	const slug = getActivePathFromUrlParam(path);
	const post = await getPostBySlug(slug, { locale });

	return {
		title: post?.title,
		description: post?.excerpt,
		openGraph: {
			title: post?.title,
			description: post?.excerpt,
			images: post?.image
				? [
						post.image.startsWith("http")
							? post.image
							: new URL(post.image, getBaseUrl()).toString(),
					]
				: [],
		},
	};
}

export default async function BlogPostPage(props: { params: Promise<Params> }) {
	const { path, locale } = await props.params;
	setRequestLocale(locale);

	const t = await getTranslations();

	const slug = getActivePathFromUrlParam(path);
	const post = await getPostBySlug(slug, { locale });

	if (!post) {
		return localeRedirect({ href: "/blog", locale });
	}

	const { title, date, authorName, authorImage, tags, image, body } = post;

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Enhanced background */}
			<div className="absolute inset-0 gradient-mesh opacity-10" />
			<div className="absolute left-1/2 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2" />
			
			<div className="container max-w-6xl pt-32 pb-24 relative">
				<div className="mx-auto max-w-3xl">
					<div className="mb-8 animate-fade-in">
						<LocaleLink 
							href="/blog"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							<span>&larr;</span>
							<span>{t("blog.back")}</span>
						</LocaleLink>
					</div>

					<h1 className="font-semibold text-3xl md:text-4xl tracking-tight mb-6 animate-slide-up">
						{title}
					</h1>

					<div className="flex flex-wrap items-center gap-4 pb-8 border-b border-border/50 animate-slide-up" style={{ animationDelay: "0.1s" }}>
						{authorName && (
							<div className="flex items-center gap-3">
								{authorImage && (
									<div className="relative size-10 overflow-hidden rounded-full ring-2 ring-border">
										<Image
											src={authorImage}
											alt={authorName}
											fill
											sizes="40px"
											className="object-cover object-center"
										/>
									</div>
								)}
								<div>
									<p className="font-medium text-sm">{authorName}</p>
									<p className="text-xs text-muted-foreground">Author</p>
								</div>
							</div>
						)}

						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<span>•</span>
							<time dateTime={date}>
								{Intl.DateTimeFormat("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric"
								}).format(new Date(date))}
							</time>
						</div>

						{tags && (
							<div className="flex flex-wrap gap-2 ml-auto">
								{tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
									>
										{tag}
									</span>
								))}
							</div>
						)}
					</div>
				</div>

				{image && (
					<div className="relative mt-8 mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl animate-scale-in" style={{ animationDelay: "0.2s" }}>
						<Image
							src={image}
							alt={title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
							className="object-cover object-center"
							priority
						/>
					</div>
				)}

				<div className="mx-auto max-w-3xl prose prose-lg dark:prose-invert animate-fade-in" style={{ animationDelay: "0.3s" }}>
					<PostContent content={body} />
				</div>
			</div>
		</div>
	);
}
