import { properties } from "@/data/properties";
import PropertyDetail from "@/components/PropertyDetail";

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  const currentIndex = properties.findIndex((p) => p.slug === slug);
  const nextProperty = properties[currentIndex + 1];

  return (
    <PropertyDetail
      initialProperty={property}
      initialNextProperty={nextProperty}
    />
  );
}
