'use client';

import { useState } from "react";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", source: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Intro Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Get in Touch
              </h1>
            </div>
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-500">
                let&apos;s work together to transform your dream home into a
                beautiful reality that reflects your unique style and
                personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="How did you hear about us?"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  Your message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none resize-y"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full max-w-xs bg-gray-400 text-white font-medium py-4 px-8 hover:bg-gray-500 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "SENDING..."
                  : status === "success"
                  ? "SENT!"
                  : "SUBMIT"} <span>↗</span>
              </button>
              {status === "success" && (
                <p className="text-green-600 font-medium">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* Contact Info */}
            <div className="space-y-6 text-right">
              <div>
                <p className="text-base text-gray-800">
                  123 Innovation Way, Suite 456, Tech City, CA 90210
                </p>
              </div>
              <div>
                <p className="text-base text-gray-800">
                  789 Creative Lane, Apt 101, Future Town, CA 90211
                </p>
              </div>
              <div className="pt-8">
                <p className="text-xl font-medium text-gray-800">
                  (+234) 814-3577-803
                </p>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-800">
                  (+234) 816-0948-029
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Headquarters Section */}
      <section className="py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8">
            Headquarters in Prague
          </h2>
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/prague.jpg"
              alt="Headquarters in Prague"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
