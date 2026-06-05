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

    <div className="min-h-screen bg-zinc-100 text-zinc-900 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-12">

          <div>

            <h1 className="text-5xl font-black">
              Admin Dashboard
            </h1>

            <p className="text-zinc-400 mt-3">
              Manage Chic N Fire Orders
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-4">

            <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl">

              <p className="text-zinc-400 text-sm">
                Total Orders
              </p>

              <h3 className="text-3xl font-black mt-1">
                {orders.length}
              </h3>

            </div>

            <div className="bg-yellow-500 px-6 py-4 rounded-2xl text-black">

              <p className="text-sm font-bold">
                Pending
              </p>

              <h3 className="text-3xl font-black mt-1">
                {pendingOrders}
              </h3>

            </div>

            <div className="bg-green-500 px-6 py-4 rounded-2xl text-black">

              <p className="text-sm font-bold">
                Completed
              </p>

              <h3 className="text-3xl font-black mt-1">
                {completedOrders}
              </h3>

            </div>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition px-7 py-4 rounded-2xl text-white font-black"
            >
              Logout
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-zinc-900 border border-zinc-800 rounded-[30px] p-8"
            >

              <div className="flex items-start justify-between gap-6">

                <div>

                  <h2 className="text-3xl font-black">
                    {order.customer.name}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {order.customer.phone}
                  </p>

                  <p className="text-zinc-500 mt-1 leading-7">
                    {order.customer.address}
                  </p>

                </div>

                <div
                  className={`px-5 py-2 rounded-full text-sm font-black uppercase ${
                    order.status ===
                    "completed"
                      ? "bg-green-500 text-black"

                      : order.status ===
                        "cancelled"

                      ? "bg-red-500 text-white"

                      : "bg-yellow-500 text-black"
                  }`}
                >

                  {order.status}

                </div>

              </div>

              <div className="mt-8 flex flex-col gap-4">

                {order.items.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="bg-zinc-950 rounded-2xl p-5"
                    >

                      <div className="flex items-center justify-between gap-4">

                        <div>

                          <h3 className="text-xl font-bold">
                            {item.title}
                          </h3>

                          <p className="text-zinc-400 mt-1">
                            {item.variation}
                          </p>

                          <p className="text-zinc-500 text-sm mt-2">
                            Qty: {item.quantity}
                          </p>

                          {item.addons
                            ?.length > 0 && (

                            <div className="flex flex-wrap gap-2 mt-3">

                              {item.addons.map(
                                (
                                  addon,
                                  addonIndex
                                ) => (
                                  <span
                                    key={
                                      addonIndex
                                    }
                                    className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs"
                                  >
                                    {addon}
                                  </span>
                                )
                              )}

                            </div>

                          )}

                        </div>

                        <p className="text-orange-500 font-black text-xl whitespace-nowrap">

                          Rs {item.price}

                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

              {order.customer.notes && (

                <div className="mt-6 bg-zinc-950 rounded-2xl p-5">

                  <p className="text-zinc-400 text-sm">
                    Customer Notes
                  </p>

                  <p className="mt-2 leading-7">
                    {order.customer.notes}
                  </p>

                </div>

              )}

              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                <div>

                  <p className="text-zinc-400">
                    Total
                  </p>

                  <h3 className="text-4xl font-black text-white mt-1">

                    Rs {order.total}

                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {order.status !==
                    "completed" && (

                    <button
                      onClick={() =>
                        updateStatus(
                          order.id,
                          "completed"
                        )
                      }
                      className="bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-2xl text-black font-black"
                    >

                      Complete

                    </button>

                  )}

                  {order.status !==
                    "cancelled" && (

                    <button
                      onClick={() =>
                        updateStatus(
                          order.id,
                          "cancelled"
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 transition px-6 py-4 rounded-2xl text-white font-black"
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

  );
}