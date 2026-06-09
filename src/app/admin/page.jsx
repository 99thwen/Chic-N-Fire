"use client";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  db,
  auth,
} from "../../lib/firebase";

export default function AdminPage() {

  const router = useRouter();

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [orders, setOrders] =
    useState([]);

  const logout = async () => {

    await signOut(auth);

    router.push("/login");

  };

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          if (!user) {

            router.push("/login");

          } else {

            setCheckingAuth(false);

          }

        }
      );

    return () => unsubscribe();

  }, [router]);

  useEffect(() => {

    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe =
      onSnapshot(q, (snapshot) => {

        const ordersData =
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

        setOrders(ordersData);

      });

    return () => unsubscribe();

  }, []);

  const updateStatus =
    async (id, status) => {

      const orderRef =
        doc(db, "orders", id);

      await updateDoc(orderRef, {
        status,
      });

    };

  const pendingOrders =
    useMemo(
      () =>
        orders.filter(
          (order) =>
            order.status === "pending"
        ).length,
      [orders]
    );

  const completedOrders =
    useMemo(
      () =>
        orders.filter(
          (order) =>
            order.status ===
            "completed"
        ).length,
      [orders]
    );

  if (checkingAuth) {

    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center text-zinc-900 text-3xl font-black">
        Loading...
      </div>
    );
  }

 return (
  <div className="min-h-screen bg-zinc-100 text-zinc-900 p-4 md:p-6">
    <div className="max-w-7xl mx-auto">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

        <div>

  <img
    src="/logo.webp"
    alt="Chick n Fire"
    className="h-16 mb-3"
  />

  <h1 className="text-3xl font-bold">
    Orders Dashboard
  </h1>
        

          <p className="text-zinc-500 text-sm mt-1">
            Manage incoming orders
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-md hover:shadow-lg transition">
            <p className="text-zinc-500 text-sm">
              Total Orders
            </p>

            <h3 className="text-2xl font-bold">
              {orders.length}
            </h3>
          </div>

          <div className="bg-[#FFF7CC] border border-[#FFD400] rounded-xl px-4 py-3">
            <p className="text-yellow-800 text-sm font-medium">
              Pending
            </p>

            <h3 className="text-2xl font-bold text-yellow-900">
              {pendingOrders}
            </h3>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-xl px-4 py-3">
            <p className="text-green-800 text-sm font-medium">
              Completed
            </p>

            <h3 className="text-2xl font-bold text-green-900">
              {completedOrders}
            </h3>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-semibold transition"
          >
            Logout
          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm"
          >

            <div className="flex items-start justify-between gap-4">

              <div>
                <h2 className="text-lg font-semibold text-zinc-900">
                  {order.customer.name}
                </h2>

                <p className="text-zinc-600 text-sm mt-1">
                  {order.customer.phone}
                </p>

                <p className="text-zinc-500 text-sm mt-1">
                  {order.customer.address}
                </p>
              </div>

              <div
                className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
                  order.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : order.status === "cancelled"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </div>

            </div>

            <div className="mt-5 space-y-3">

              {order.items.map((item, index) => (

                <div
                  key={index}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl p-3"
                >

                  <div className="flex justify-between gap-3">

                    <div>

                      <h3 className="font-semibold text-base">
                        {item.title}
                      </h3>

                      <p className="text-sm text-zinc-500 mt-1">
                        {item.variation}
                      </p>

                      <p className="text-xs text-zinc-500 mt-1">
                        Qty: {item.quantity}
                      </p>

                      {item.addons?.length > 0 && (

                        <div className="flex flex-wrap gap-2 mt-2">

                          {item.addons.map(
                            (
                              addon,
                              addonIndex
                            ) => (
                              <span
                                key={addonIndex}
                                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                              >
                                {addon}
                              </span>
                            )
                          )}

                        </div>

                      )}

                    </div>

                    <p className="text-orange-500 font-semibold whitespace-nowrap">
                      Rs {item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {order.customer.notes && (

              <div className="mt-4 bg-zinc-50 border border-zinc-200 rounded-xl p-4">

                <p className="text-xs text-zinc-500 font-medium">
                  Customer Notes
                </p>

                <p className="mt-2 text-sm">
                  {order.customer.notes}
                </p>

              </div>

            )}

            <div className="mt-5 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>

                <p className="text-zinc-500 text-sm">
                  Total
                </p>

                <h3 className="text-2xl font-bold text-zinc-900">
                  Rs {order.total}
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {order.status !== "completed" && (
                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        "completed"
                      )
                    }
                    className="bg-[#FFD400] hover:bg-yellow-400 text-black text-white px-4 py-2 rounded-xl font-semibold transition"
                  >
                    Complete
                  </button>
                )}

                {order.status !== "cancelled" && (
                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        "cancelled"
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold transition"
                  >
                    Cancel
                  </button>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  </div>
); }