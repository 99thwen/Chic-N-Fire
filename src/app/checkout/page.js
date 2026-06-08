"use client";

import { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { db } from "../../lib/firebase";

import { useCart } from "../../context/CartContext";
import { FaMoneyBillWave } from "react-icons/fa";
import Footer from "../../components/layout/Footer";
import { useRouter } from "next/navigation";
export default function CheckoutPage() {

  const {
    cartItems,
    clearCart,
  } = useCart();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  address: "",
  notes: "",
});
  const total = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );
const router = useRouter();
useEffect(() => {
  if (cartItems.length === 0) {
    router.push("/");
  }
}, [cartItems]);

  if (success) {

    return (

      <div className="min-h-screen bg-zinc-100 text-zinc-900 flex items-center justify-center p-4 md:p-6">

        <div className="bg-white border border-zinc-200 rounded-[30px] p-5 md:p-8  shadow-sm h-fit lg:sticky lg:top-24">

          <h1 className="text-5xl font-black text-[#FFD400]">
            Order Placed
          </h1>

          <p className="text-zinc-600 mt-6 text-lg">
            Your order has been placed successfully.
          </p>

          <button
            onClick={() =>
              window.location.href = "/"
            }
            className="mt-8 bg-[#FFD400] hover:bg-[#E6BE00] transition px-8 py-4 rounded-2xl text-black font-black"
          >
            Back To Home
          </button>

        </div>

      </div>

    );

  }

  if (cartItems.length === 0) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-2xl font-semibold">
          Your cart is empty
        </h1>

      </div>

    );

  }

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const placeOrder = async () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Fill all required fields");
      return;
    }
if (!/^03\d{9}$/.test(formData.phone)) {
  alert("Enter valid phone number");
  return;
}
    try {

      setLoading(true);
const savedLocation =
  JSON.parse(
    localStorage.getItem("location")
  ) || null;
  
      await addDoc(
        collection(db, "orders"),
        {
          customer: formData,
          items: cartItems,
          total,
          createdAt:
            serverTimestamp(),
          status: "pending",
        }
      );

      clearCart();
      setSuccess(true);

    } catch (error) {

      console.log(error);
      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };
return (
  <>
   <div className="min-h-screen bg-zinc-100 py-6 md:py-16 px-3 md:px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto mb-6">
        <div className="text-sm text-zinc-500 flex items-center gap-2">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <span>/</span>
          <span className="font-medium text-zinc-900">
            Checkout
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-5 md:gap-8">

       <div className="bg-white border border-zinc-200 rounded-3xl p-4 md:p-8 shadow-sm">

          <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-6 md:mb-8">
  Checkout
</h1>

          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-4 md:p-6 mb-5">

            <h3  className="font-bold text-lg text-black mb-5">
              Customer Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-zinc-200 bg-white rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#FFD400]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="03XXXXXXXXX"
                maxLength={11}
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-zinc-200 bg-white rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#FFD400]"
                
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-zinc-200 bg-white rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#FFD400]"
              />

            </div>

          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-4 md:p-6 mb-5">

            <h3 className="font-bold text-lg text-black mb-5">
              Delivery Address
            </h3>

            <div className="bg-white border border-zinc-200 rounded-2xl p-4 mb-4">

              <p className="text-sm text-zinc-500">
                Delivery Area
              </p>

              <p className="font-semibold text-zinc-900 mt-1">
                Peshawar
              </p>

            </div>

            <textarea
              name="address"
              placeholder="Enter complete delivery address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-zinc-200 bg-white rounded-2xl  px-4 py-3 outline-none focus:border-[#FFD400]"
            />

          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl  p-4 md:p-6 mb-5">

            <h3 className="font-bold text-lg text-black mb-5">
              Delivery Time
            </h3>

            <div className="bg-white border border-zinc-200 rounded-2xl px-4 py-3 text-zinc-700">
              ASAP (Default)
            </div>

          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-4 md:p-6 mb-5">

            <h3 className="font-bold text-lg text-black mb-5">
              Special Instructions
            </h3>

            <textarea
              name="notes"
              placeholder="Add any comments, allergies or delivery instructions..."
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-zinc-200 bg-white rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#FFD400]"
            />

          </div>


      <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-4 mb-5">

  <h3 className="font-bold text-lg text-black mb-5">
    Payment Method
  </h3>

  <div className="border border-[#FFD400] bg-white rounded-xl px-4 py-3 flex items-center gap-2 font-medium">

    <FaMoneyBillWave
      className="text-[#FFD400]"
      size={18}
    />

    <span>Cash On Delivery</span>

  </div>

</div>

          <button
            onClick={placeOrder}
            disabled={loading}        
             className="w-full bg-[#FFD400] hover:bg-orange-500 text-black hover:text-white py-4 rounded-xl font-black text-lg transition-all duration-300"
>
          
            {loading
              ? "Placing Order..."
              : `Place Order • Rs ${total}`}
          </button>

        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-4 md:p-8 shadow-sm h-fit lg:sticky lg:top-24">

          <h2 className="text-3xl font-black mb-8 text-zinc-900">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cartItems.map((item) => (

              <div
                key={item.cartId}
                className="border border-zinc-200 rounded-2xl p-4"
              >

                <div className="flex gap-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-zinc-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      {item.variation}
                    </p>

                    <p className="text-sm text-zinc-500">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p className="font-black text-orange-500">
                    Rs {item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6 space-y-4">

            <div className="flex justify-between">
              <span className="text-zinc-500">Subtotal</span>
              <span>Rs {total}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">Delivery Charges</span>
              <span>Rs 0</span>
            </div>

            
              <div className="flex justify-between text-2xl font-black text-black">

              <span>Grand Total</span>
              <span>Rs {total}</span>
            </div>

          </div>

        </div>

      </div>

  <div className="mt-8 md:mt-16">
  <Footer />
</div>

    </div>
  </>
); }