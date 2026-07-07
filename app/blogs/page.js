import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-black mb-12">
          Blog
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl leading-normal text-gray-600 max-w-5xl mb-16">
          Welcome to our blog page, where we share insights from a contemporary
          real estate brand founded on trust, deep expertise, and exceptional
          experiences designed to cater to the distinct needs of our audience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article key={blog.slug}>
              <div className="bg-gray-100 p-6 mb-0">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-base mb-5 leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link href={`/blogs/${blog.slug}`} className="inline-block">
                  <button className="px-6 py-4 bg-black text-white text-base cursor-pointer hover:bg-gray-800 transition-all hover:-translate-y-2">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
