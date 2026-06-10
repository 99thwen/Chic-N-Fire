import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
     <> 
    <div className="text-sm text-zinc-500 mb-6">
  
  <Link
    href="/"
    className="hover:text-[#FFD400]"
  >
    Home
  </Link>

  <span className="mx-2">/</span>

  <span className="font-medium text-zinc-900">
    Privacy Policy
  </span>

</div>


    <div className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="mb-6 text-zinc-600">
        Last Updated: June 2026
      </p>

      <div className="space-y-6 text-zinc-700">

        <p>
          Chick N Fire respects your privacy and is committed to protecting your personal information.
        </p>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Information We Collect
          </h2>

          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Phone Number</li>
            <li>Delivery Address</li>
            <li>Order Details</li>
            <li>Special Instructions</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            How We Use Information
          </h2>

          <ul className="list-disc pl-6">
            <li>Process and deliver orders</li>
            <li>Contact customers regarding orders</li>
            <li>Improve our services</li>
            <li>Respond to customer inquiries</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Third-Party Services
          </h2>

          <p>
            We may use Firebase, WhatsApp and other services to operate this website.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Contact
          </h2>

          <p>
            For privacy-related concerns, please contact Chick N Fire directly.
          </p>
        </div>

      </div>

    </div>
     </>
  );
}