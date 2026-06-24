import Link from "next/link";

export default function TermsPage() {
  return (



<div className="max-w-6xl mx-auto px-6 py-12">

  {/* breadcrumb */}
  <div className="mb-8 text-sm text-zinc-500">
    <Link href="/">Home</Link>
    <span className="mx-2">/</span>
    <span>Terms & Conditions</span>
  </div>

  {/* white card */}
  <div className="bg-white rounded-[32px] border border-zinc-200 p-8 md:p-12">

    <h1 className="text-4xl font-bold text-black mb-4">
  Terms & Conditions
</h1>

   <p className="text-zinc-500 mb-8">
  Last Updated: June 2026
</p>

        <div className="space-y-8 text-zinc-700">

          <p>
            By using the Chick N Fire website, you agree to these
            terms and conditions.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Orders
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>All orders are subject to confirmation.</li>
              <li>Prices may change without notice.</li>
              <li>Product availability may vary.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Delivery
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery times are estimates.</li>
              <li>Customers must provide accurate delivery information.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Cancellations
            </h2>

            <p>
              Orders may not be cancelled once preparation has begun.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Liability
            </h2>

            <p>
              Chick N Fire is not responsible for delays caused by
              circumstances beyond its control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Contact
            </h2>

            <p>
              For questions regarding these terms, please contact
              Chick N Fire directly.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}