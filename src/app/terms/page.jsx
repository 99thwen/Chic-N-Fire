import Link from "next/link";

export default function TermsPage() {

  return (
   <>
   <div className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <p className="mb-6 text-zinc-600">
        Last Updated: June 2026
      </p>

      <div className="space-y-6 text-zinc-700">

        <p>
          By using the Chick N Fire website, you agree to these terms and conditions.
        </p>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Orders
          </h2>

          <ul className="list-disc pl-6">
            <li>All orders are subject to confirmation.</li>
            <li>Prices may change without notice.</li>
            <li>Product availability may vary.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Delivery
          </h2>

          <ul className="list-disc pl-6">
            <li>Delivery times are estimates.</li>
            <li>Customers must provide accurate delivery information.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Cancellations
          </h2>

          <p>
            Orders may not be cancelled once preparation has begun.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Liability
          </h2>

          <p>
            Chick N Fire is not responsible for delays caused by circumstances beyond its control.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">
            Contact
          </h2>

          <p>
            For questions regarding these terms, please contact Chick N Fire directly.
          </p>
        </div>

      </div>

    </div>
     </>
  );
}