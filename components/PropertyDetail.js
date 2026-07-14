"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PropertyDetail({ initialProperty, initialNextProperty }) {
  const [property, setProperty] = useState(initialProperty);
  const [nextProperty, setNextProperty] = useState(initialNextProperty);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    listingTitle: initialProperty ? initialProperty.title : "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setProperty(initialProperty);
    setNextProperty(initialNextProperty);
    if (initialProperty) {
      setFormData((prev) => ({ ...prev, listingTitle: initialProperty.title }));
    }
  }, [initialProperty, initialNextProperty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          source: `Property Inquiry: ${formData.listingTitle}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData((prev) => ({ ...prev, name: "", email: "", message: "" }));
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!property) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center py-20 px-8">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <Link
          href="/properties"
          className="text-lg text-blue-600 hover:underline"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Title and Details Section (First Screenshot) */}
      {property.description && (
        <section className="py-8 px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12">
              {property.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 mb-12">
              {property.description}
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-base text-gray-500 mb-2">Price</p>
                <p className="text-2xl md:text-3xl font-medium">
                  {property.price}
                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-2">Address</p>
                <p className="text-2xl md:text-3xl font-medium">
                  {property.address}
                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-2">Size</p>
                <p className="text-2xl md:text-3xl font-medium">
                  {property.size}
                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-2">Unit</p>
                <p className="text-2xl md:text-3xl font-medium">
                  {property.units}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Image Section */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video mb-8">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Paragraphs Section (Second Screenshot) */}
      {property.contentParagraphs && property.contentParagraphs.length > 0 && (
        <section className="py-8 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {property.contentParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xl md:text-2xl lg:text-3xl leading-normal text-gray-600"
                >
                  {paragraph}
                </p>
              ))}
              {property.details && (
                <p className="text-xl md:text-2xl lg:text-3xl leading-normal text-gray-600">
                  {property.details}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section (Four Images) */}
      {property.galleryImages && property.galleryImages.length > 0 && (
        <section className="py-8 px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Image 01: full width */}
            {property.galleryImages[0] && (
              <div className="relative aspect-video">
                <Image
                  src={property.galleryImages[0]}
                  alt={`${property.title} gallery 1`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Images 02 & 03: half width each */}
            {property.galleryImages[1] && property.galleryImages[2] && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-video">
                  <Image
                    src={property.galleryImages[1]}
                    alt={`${property.title} gallery 2`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src={property.galleryImages[2]}
                    alt={`${property.title} gallery 3`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Image 04: full width */}
            {property.galleryImages[3] && (
              <div className="relative aspect-video">
                <Image
                  src={property.galleryImages[3]}
                  alt={`${property.title} gallery 4`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Agent and Contact Form Section (Screenshots 3 & 4) */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          {property.agent && (
            <div className="mb-12">
              <p className="text-xl mb-4">
                Listed by {property.agent.title} {property.agent.name}
              </p>
              <div className="relative aspect-video mb-6">
                <Image
                  src={property.agent.image}
                  alt={property.agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                href="/contact"
                className="inline-block px-6 py-4 bg-black text-white font-medium hover:bg-gray-900 transition-all hover:-translate-y-2 cursor-pointer"
              >
                Contact Agent
              </Link>
            </div>
          )}

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in this property?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Fill in the form and we'll arrange a tour so you can explore this
              for yourself.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xl mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-8 py-6 bg-gray-100 text-xl focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xl mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full px-8 py-6 bg-gray-100 text-xl focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xl mb-3">Listing Title</label>
                <input
                  type="text"
                  name="listingTitle"
                  value={formData.listingTitle}
                  onChange={handleChange}
                  placeholder="Listing Title"
                  className="w-full px-8 py-6 bg-gray-100 text-xl focus:outline-none"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xl mb-3">Your message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  rows={8}
                  className="w-full px-8 py-6 bg-gray-100 text-xl focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full md:w-1/3 px-6 py-6 bg-black text-white text-xl font-medium hover:bg-gray-900 transition-all hover:-translate-y-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "SENDING..."
                  : status === "success"
                    ? "SENT!"
                    : "SUBMIT →"}
              </button>
              {status === "success" && (
                <p className="text-green-600 font-medium text-xl">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-xl">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Next Project Section (if not last property) */}
      {nextProperty && (
        <section className="py-8 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Next Project
            </h2>
            <Link
              href={`/properties/${nextProperty.slug}`}
              className="block group"
            >
              <div className="relative aspect-video mb-4 overflow-hidden">
                <Image
                  src={nextProperty.image}
                  alt={nextProperty.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl group-hover:underline">
                  {nextProperty.title}
                </p>
                <p className="text-xl">{nextProperty.price}</p>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
