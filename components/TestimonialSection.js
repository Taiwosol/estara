"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const TestimonialCard = ({ testimonial, isLast = false }) => (
  <div
    className={`flex-shrink-0 w-80 md:w-96 p-6 rounded-xl mx-4 border border-gray-200 flex flex-col justify-between ${testimonial.bgColor}`}
  >
    <div>
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-900 text-xl leading-relaxed mb-4">
        {testimonial.text}
      </p>
    </div>

    {/* Name & Image */}
    <div className="flex items-center gap-3 mt-4">
      <div className="w-10 h-10 relative rounded-full overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="font-medium text-xl">{testimonial.name}</h4>
    </div>
  </div>
);

export default function TestimonialSection() {
  // Duplicate testimonials THREE times for smooth infinite scroll
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-12 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          What Top Clients <br /> Say About Us
        </h2>

        {/* Desktop - Animated Rows */}
        <div className="hidden md:block">
          {/* Top Row - Right to Left */}
          <div className="relative mb-8 overflow-hidden">
            <div className="flex animate-scroll-left">
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`top-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`bottom-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile - Swipeable Carousel */}
        <div className="md:hidden">
          <MobileCarousel />
        </div>
      </div>
    </section>
  );
}

function MobileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next slide
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - previous slide
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
            <div
              className={`rounded-xl p-6 border border-gray-200 flex flex-col justify-between min-h-[320px] ${testimonial.bgColor}`}
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-900 text-xl leading-relaxed mb-4">
                  {testimonial.text}
                </p>
              </div>

              {/* Name & Image */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium text-xl">{testimonial.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
