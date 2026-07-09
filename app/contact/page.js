import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Intro Section */}
      <section className="py-20 px-8">
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
            <div className="space-y-8">
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base text-gray-800 mb-3">
                  How did you hear about us?
                </label>
                <input
                  type="text"
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
                  placeholder="Type your message"
                  className="w-full bg-gray-100 py-4 px-6 text-lg focus:outline-none resize-y"
                />
              </div>
              <button className="w-full max-w-xs bg-gray-400 text-white font-medium py-4 px-8 hover:bg-gray-500 transition-all flex items-center justify-center gap-3 cursor-pointer">
                SUBMIT <span>↗</span>
              </button>
            </div>

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
