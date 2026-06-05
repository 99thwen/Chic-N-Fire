import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-6">

      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 items-start">

          <div>

            <div className="flex items-center gap-6">

              <Image
                src="/logo.webp"
                alt="Chic N Fire"
                width={220}
                height={70}
              />

              <div className="space-y-3 text-zinc-600">

                <p>
                  <span className="font-semibold text-zinc-900">
                    Phone:
                  </span>{" "}
                  +92 333 5823184
                </p>

                <p>
                  <span className="font-semibold text-zinc-900">
                    Email:
                  </span>{" "}
                  info@chicnfire.com
                </p>

                <p>
                  <span className="font-semibold text-zinc-900">
                    Address:
                  </span>{" "}
                  5-A, Block A, Yousafzai Market Phase 3,
                  Hayatabad, Peshawar
                </p>

              </div>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              Our Timings
            </h3>

            <div className="space-y-2 text-zinc-600 mb-6">

              <p>Monday - Sunday</p>

              <p>11:00 AM - 02:00 AM</p>

            </div>

            <div className="flex flex-wrap gap-5 text-sm text-zinc-500">

              <a
                href="#"
                className="hover:text-orange-500 transition"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="hover:text-orange-500 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-orange-500 transition"
              >
                Sitemap
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-200 mt-8 pt-5 text-center text-zinc-500">

          © 2026 Chic N Fire. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}