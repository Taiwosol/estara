import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Twitter(x)", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="w-full bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-xl font-medium overflow-hidden inline-block w-fit"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Email
            </h3>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-1">
                <Link
                  href="mailto:hello@estara.com"
                  className="group relative text-xl font-medium overflow-hidden inline-block w-fit"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    hello@estara.com
                  </span>
                  <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    hello@estara.com
                  </span>
                </Link>
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-gray-400">
                  Collaboration
                </h4>
                <Link
                  href="mailto:work@estara.com"
                  className="group relative text-xl font-medium overflow-hidden inline-block w-fit"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    work@estara.com
                  </span>
                  <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    work@estara.com
                  </span>
                </Link>
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-gray-400">
                  Press
                </h4>
                <Link
                  href="mailto:press@estara.com"
                  className="group relative text-xl font-medium overflow-hidden inline-block w-fit"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    press@estara.com
                  </span>
                  <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    press@estara.com
                  </span>
                </Link>
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-gray-400">
                  Phone
                </h4>
                <Link
                  href="tel:+555908678802"
                  className="group relative text-xl font-medium overflow-hidden inline-block w-fit"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    +555 908 6788 02
                  </span>
                  <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    +555 908 6788 02
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Social
            </h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-xl font-medium overflow-hidden inline-block w-fit"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <p className="text-sm text-gray-400">
                Copyrights © {new Date().getFullYear()} Estara
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3]">
            <Image
              src="/footer-img.png"
              alt="Footer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 text-center overflow-hidden w-full">
          <span className="inline-block text-[3.5rem] xs:text-[4.5rem] sm:text-[8rem] md:text-[14rem] lg:text-[16rem] xl:text-[20rem] font-black italic tracking-tighter leading-none text-center w-full">
            ESTARA
          </span>
        </div>
      </div>
    </footer>
  );
}
