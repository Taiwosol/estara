import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-img-02.png"
          alt="Dream home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center py-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
          Discover Your Dream <br />
          Home Today!
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-white mb-12 max-w-2xl mx-auto">
          We're a dedicated team of real estate experts, designers, and market
          strategists transforming the way you find your perfect property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors cursor-pointer">
            Book a Viewing
          </button>
          <button className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors cursor-pointer">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
