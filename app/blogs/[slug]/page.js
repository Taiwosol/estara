"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "@/data/blogs";

export default function BlogPostPage() {
  const params = useParams();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <p>Looking for: {params.slug}</p>
          <p className="mt-4">
            Available slugs: {blogs.map((b) => b.slug).join(", ")}
          </p>
        </div>
      </div>
    );
  }

  const currentIndex = blogs.findIndex((b) => b.slug === params.slug);
  const nextBlog = blogs[currentIndex + 1];

  return (
    <article>
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight">
            {blog.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-gray-500 text-xl md:text-2xl font-medium">
                {blog.author}
              </p>
              <p className="text-gray-500 text-xl md:text-2xl font-medium">
                {blog.category}
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-gray-500 text-xl md:text-2xl font-medium">
                {blog.date}
              </p>
              <p className="text-gray-500 text-xl md:text-2xl font-medium">
                {blog.tags.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="relative w-full aspect-video">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {blog.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl leading-normal mb-12"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {nextBlog && (
        <section className="px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-bold">Next Article</h2>
              </div>
              <div className="md:col-span-4">
                <Link href={`/blogs/${nextBlog.slug}`} className="block">
                  <div className="relative aspect-video">
                    <Image
                      src={nextBlog.image}
                      alt={nextBlog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
