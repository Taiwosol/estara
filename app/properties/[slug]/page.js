import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default function PropertyPage({ params }) {
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center py-20 px-8">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <Link href="/properties" className="text-lg text-blue-600 hover:underline">
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12">
            {property.title}
          </h1>
          <div className="relative aspect-video mb-12">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <Link
            href="/properties"
            className="inline-block px-6 py-4 bg-black text-white font-medium hover:bg-gray-900 transition-all hover:-translate-y-2"
          >
            Back to Properties
          </Link>
        </div>
      </section>
    </div>
  );
}
