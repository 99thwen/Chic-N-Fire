import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-zinc-500 mb-8">
        <Link href="/" className="hover:text-[#FFD400]">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>Privacy Policy</span>
      </div>

      {/* White Card */}
      <div className="bg-white rounded-[32px] border border-zinc-200 p-8 md:p-12">

        <h1 className="text-4xl font-bold text-black mb-3">
          Privacy Policy
        </h1>

        <p className="text-zinc-500 mb-10">
          Last Updated: June 2026
        </p>

        <div className="space-y-8 text-zinc-700">

          <p>
            Chick N Fire respects your privacy and is committed to
            protecting your personal information.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Information We Collect
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Delivery Address</li>
              <li>Order Details</li>
              <li>Special Instructions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              How We Use Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Process and deliver orders</li>
              <li>Contact customers regarding orders</li>
              <li>Improve our services</li>
              <li>Respond to customer inquiries</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Third-Party Services
            </h2>

            <p>
              We may use Firebase, WhatsApp and other services to operate
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Contact
            </h2>

            <p>
              For privacy-related concerns, please contact Chick N Fire directly.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}