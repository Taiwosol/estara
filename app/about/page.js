import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Intro Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
                About Estara
              </h1>
            </div>
            <div>
              <p className="text-lg md:text-xl lg:text-xl leading-relaxed text-gray-600">
                A contemporary real estate brand founded on the pillars of
                trust, deep expertise, and exceptional premium experiences that
                cater to our clients' unique needs.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/about-mg-01.png"
              alt="About Estara"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats/Story Section */}
      <section className="py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 max-w-[40%]">
            It's not about the numbers, but they do tell a story.
          </h2>
          <p className="text-lg md:text-xl lg:text-xl leading-relaxed text-gray-600 mb-12">
            Founded in 2013, our real estate agency has spent more than ten
            years providing outstanding services. We take pride in our steadfast
            dedication to quality and our agility in responding to the dynamic
            shifts in the real estate market.
          </p>
          <button className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-all hover:-translate-y-2">
            Contact Us
          </button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 max-w-[40%]">
          It's not about the numbers, but they do tell a story.
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Integrity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-gray-300 pt-8">
              <h3 className="text-xl md:text-2xl font-medium">Integrity</h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                Integrity is at the core of our real estate practice. We are
                committed to providing honest and transparent services that
                enhance and help your property's value.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/integrity-img.jpg"
                  alt="Integrity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Excellence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-gray-300 pt-8">
              <h3 className="text-xl md:text-2xl font-medium">Excellence</h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                At our core, we are committed to crafting exceptional real
                estate experiences that enhance your property's appeal and drive
                sustainable success.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/excellence-img.png"
                  alt="Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Market expertise */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-gray-300 pt-8">
              <h3 className="text-xl md:text-2xl font-medium">
                Market expertise
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                We pride ourselves on our deep understanding of the real estate
                market, crafting personalized experiences that enhance your
                property's appeal.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/expertise-img.jpg"
                  alt="Market expertise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Client satisfaction */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-gray-300 pt-8">
              <h3 className="text-xl md:text-2xl font-medium">
                Client satisfaction
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                We prioritize your needs, crafting personalized real estate
                experiences that enhance and elevate your property journey. Our
                commitment goes beyond aesthetics.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/satisfaction-img.jpg"
                  alt="Client satisfaction"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Image 02 Section */}
      <section className="px-8">
        <div className="relative w-full aspect-[21/9]">
          <Image
            src="/about-mg-02.png"
            alt="About Estara 2"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Elijah Ronald */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/elijah-ronald.png"
                  alt="Elijah Ronald"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Elijah Ronald</h3>
              <p className="text-gray-600">Lead Realtor</p>
            </div>

            {/* Rebecca Victor */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/rebecca-victor.png"
                  alt="Rebecca Victor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Rebecca Victor</h3>
              <p className="text-gray-600">Lead Realtor</p>
            </div>

            {/* Victoria Beckham */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/victoria.png"
                  alt="Victoria Beckham"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Victoria Beckham</h3>
              <p className="text-gray-600">Field Director</p>
            </div>

            {/* Ben Frank */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/ben.png"
                  alt="Ben Frank"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Ben Frank</h3>
              <p className="text-gray-600">Lead Realtor</p>
            </div>

            {/* Amira Lopez */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/amira.png"
                  alt="Amira Lopez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Amira Lopez</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>

            {/* Enzo Fernandez */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/enzo.png"
                  alt="Enzo Fernandez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Enzo Fernandez</h3>
              <p className="text-gray-600">Developer</p>
            </div>

            {/* Joey Geller */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/joey.png"
                  alt="Joey Geller"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Joey Geller</h3>
              <p className="text-gray-600">CTO</p>
            </div>

            {/* Alicia Gonzalez */}
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/alicia.png"
                  alt="Alicia Gonzalez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Alicia Gonzalez</h3>
              <p className="text-gray-600">Lead Realtor</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
