"use client";

import { LocaleLink } from "@i18n/routing";
import type { Post } from "@marketing/blog/types";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

export function PostListItem({ post }: { post: Post }) {
	const { title, excerpt, authorName, image, date, path, authorImage, tags } =
		post;

	return (
		<div className="group rounded-2xl border bg-card/50 glass-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 card-3d">
			{image && (
				<div className="-mx-6 -mt-6 relative mb-6 aspect-[16/9] overflow-hidden rounded-t-2xl">
					<Image
						src={image}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					<LocaleLink
						href={`/blog/${path}`}
						className="absolute inset-0"
					/>
				</div>
			)}

			{tags && (
				<div className="mb-3 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
						>
							{tag}
						</span>
					))}
				</div>
			)}

			<LocaleLink
				href={`/blog/${path}`}
				className="inline-block font-semibold text-lg md:text-xl mb-2 hover:text-primary transition-colors group-hover:gradient-blue"
			>
				{title}
			</LocaleLink>
			{excerpt && (
				<p className="text-sm text-muted-foreground line-clamp-2 mb-4">
					{excerpt}
				</p>
			)}

			<div className="flex items-center justify-between pt-4 border-t border-border/50">
				{authorName && (
					<div className="flex items-center gap-2">
						{authorImage && (
							<div className="relative size-8 overflow-hidden rounded-full ring-2 ring-border">
								<Image
									src={authorImage}
									alt={authorName}
									fill
									sizes="32px"
									className="object-cover object-center"
								/>
							</div>
						)}
						<div className="flex items-center gap-2 text-xs">
							<User className="h-3 w-3 text-muted-foreground" />
							<span className="font-medium">{authorName}</span>
						</div>
					</div>
				)}

				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<Calendar className="h-3 w-3" />
					<time dateTime={date}>
						{Intl.DateTimeFormat("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric"
						}).format(new Date(date))}
					</time>
				</div>
			</div>

			<LocaleLink
				href={`/blog/${path}`}
				className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
			>
				Read more
				<ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
			</LocaleLink>
		</div>
	);
}
