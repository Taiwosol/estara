import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Intro Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-12">
            Explore Properties
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl leading-normal text-gray-600 max-w-5xl mb-16">
            Welcome to our properties page, where we showcase a modern real
            estate brand built on trust, extensive knowledge, and outstanding
            experiences tailored to meet the unique needs of our clients and
            also potential clients.
          </p>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 gap-8">
            {properties.map((property) => (
              <Link
                key={property.slug}
                href={`/properties/${property.slug}`}
                className="group"
              >
                <div className="relative aspect-video overflow-hidden mb-4">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-300" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl text-gray-600">
                    {property.title}
                  </h3>
                  <span className="text-xl md:text-2xl text-gray-600">
                    {property.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
