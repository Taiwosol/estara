import Image from "next/image";
import Link from "next/link";
import HeroNavbar from "@/components/HeroNavbar";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] bg-white">
        <HeroNavbar />

        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-img.png"
            alt="Luxury home hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-[100vh] flex flex-col justify-end pb-16 md:justify-center md:pb-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-2xl">
                Luxury homes, <br />
                thoughtfully curated.
              </h1>
              <p className="text-lg md:text-xl text-white max-w-lg">
                Discover exceptional properties designed for modern living,
                premium comfort, and long-term value.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors text-center"
              >
                Book a Viewing
              </Link>
              <Link
                href="/properties"
                className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors text-center"
              >
                All properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-normal font-normal mb-12">
            At Estara, we pride ourselves on bridging the gap between
            individuals and their dream homes. Our commitment is rooted in trust
            and expertise, allowing us to navigate the complexities of the real
            estate market with a profound understanding. We believe that finding
            the perfect home is not just a transaction; it's a journey that we
            embark on together with our clients, ensuring they feel supported
            every step of the way.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-4 bg-black text-white font-medium hover:bg-gray-900 transition-all hover:-translate-y-2"
          >
            More About Us
          </Link>
        </div>
      </section>

      {/* Home Image 01 Section */}
      <section className="px-8">
        <div className="relative w-full aspect-video">
          <Image
            src="/home-img-01.png"
            alt="Home image 1"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-inter">
                <AnimatedCounter target={80} suffix="%" />
              </div>
              <p className="text-gray-600 text-lg">Satisfactory Rate</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-inter">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p className="text-gray-600 text-lg">Guided Tours Annually</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-inter">
                <AnimatedCounter target={150} suffix="+" />
              </div>
              <p className="text-gray-600 text-lg">Destinations</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-inter">
                <AnimatedCounter target={3000} suffix="+" />
              </div>
              <p className="text-gray-600 text-lg">Positive Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Image 02 Section */}
      <section className="px-8">
        <div className="relative w-full aspect-video">
          <Image
            src="/home-img-02.png"
            alt="Home image 2"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700">
                At Estara, we believe the future of real estate is not just
                about listings; it's about creating an engaging and interactive
                experience. We understand that traditional text descriptions
                fall short. That's why we're dedicated to innovative research
                and developing systems that harness the power of rich
                multimedia.
              </p>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/3]">
              <Image
                src="/how-img.png"
                alt="How we work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
