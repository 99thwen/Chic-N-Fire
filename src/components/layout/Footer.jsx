import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-6">

      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-6 items-start">

          <div>

           <div className="flex flex-col md:flex-row items-center md:items-center gap-4 text-center md:text-left">

              <Image
                src="/logo.webp"
                alt="Chick N Fire"
                 width={160}
                 height={50}
              />

              <div className="space-y-3 text-zinc-600">

               <div>
  <span className="font-semibold text-zinc-900">
    Phone:
  </span>

  <div className="flex flex-col mt-1">
    <a
      href="tel:0915823184"
      className="hover:text-orange-500 transition"
    >
      091-5823184
    </a>

    <a
      href="tel:0915823183"
      className="hover:text-orange-500 transition"
    >
      091-5823183
    </a>

    <a
      href="tel:03335823184"
      className="hover:text-orange-500 transition"
    >
      0333-5823184
    </a>

    <a
      href="tel:03348929476"
      className="hover:text-orange-500 transition"
    >
      0334-8929476
    </a>
  </div>
</div>

                <p>
                  <span className="font-semibold text-zinc-900">
                    Email:
                  </span>{" "}
                  <a
  href="mailto:chick.n.fire110@gmail.com"
  className="hover:text-orange-500 transition"
>
  chick.n.fire110@gmail.com 
</a>
                </p>

               <p>
  <span className="font-semibold text-zinc-900">
    Address:
  </span>{" "}
  <a
    href="https://maps.google.com/?q=5-A+Block+A+Yousafzai+Market+Phase+3+Hayatabad+Peshawar"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500 transition"
  >
    5-A, Block A, Yousafzai Market Phase 3, Hayatabad, Peshawar
  </a>
</p>

              </div>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              
              Our Timings
            </h3>

<div className="space-y-2 text-zinc-600 text-sm md:text-base">
              <p>Monday - Sunday</p>
              <p>Open 24 Hours Delivery & Pickup</p>

            </div>
<div className="flex flex-wrap justify-center gap-4">

  <Link
    href="/terms"
    className="hover:text-[#FFD400]"
  >
    Terms & Conditions
  </Link>

  <Link
    href="/privacy-policy"
    className="hover:text-[#FFD400]"
  >
    Privacy Policy
  </Link>

</div>

          </div>

        </div>

      <div className="border-t border-zinc-200 mt-8 pt-5 text-center text-zinc-500">

  © {new Date().getFullYear()} Chick N Fire. All Rights Reserved. ·{" "}

  <a >
    Developed by Studio MS
  </a>

</div>

      </div>

    </footer>
  );
}