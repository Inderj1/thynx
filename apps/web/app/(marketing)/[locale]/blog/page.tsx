import { PostListItem } from "@marketing/blog/components/PostListItem";
import { getAllPosts } from "@marketing/blog/utils/lib/posts";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: t("blog.title"),
	};
}

export default async function BlogListPage() {
	const locale = await getLocale();
	const t = await getTranslations();

	const posts = await getAllPosts();

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Enhanced background */}
			<div className="absolute inset-0 gradient-mesh opacity-10" />
			<div className="absolute left-1/2 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2" />
			
			<div className="container max-w-6xl pt-32 pb-16 relative">
				<div className="mb-12 pt-8 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 glass-card border border-primary/20 animate-fade-in">
						<span>Blog & Insights</span>
					</div>
					<h1 className="mb-4 font-semibold text-3xl md:text-4xl tracking-tight animate-slide-up">
						{t("blog.title")}
					</h1>
					<p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
						{t("blog.description")}
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{posts
						.filter((post) => post.published && locale === post.locale)
						.sort(
							(a, b) =>
								new Date(b.date).getTime() -
								new Date(a.date).getTime(),
						)
						.map((post, index) => (
							<div 
								key={post.path} 
								className="animate-scale-in" 
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<PostListItem post={post} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
