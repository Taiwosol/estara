"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropertiesSection() {
  return (
    <section className="py-12 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden mb-4"
      >
        {/* Base Image */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        {/* Reveal Image (only on hover) */}
        {isHovering && property.galleryImages[0] && (
          <div className="absolute inset-0">
            <Image
              src={property.galleryImages[0]}
              alt={`${property.title} hover`}
              fill
              className="object-cover"
              style={{
                clipPath: `circle(100px at ${mousePos.x}px ${mousePos.y}px)`,
              }}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{property.title}</h3>
        <p className="text-xl">{property.price}</p>
      </div>
    </Link>
  );
}
