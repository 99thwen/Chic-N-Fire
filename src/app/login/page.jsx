"use client";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const login = async () => {

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/admin");

    } catch (error) {

      alert("Invalid credentials");

    } finally {

      setLoading(false);

    }

  };

 return (
  <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">

    <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-8 shadow-lg">

      <div className="flex justify-center mb-6">
        <img
          src="/logo.webp"
          alt="Chick n Fire"
          className="h-20 object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold text-center text-zinc-900">
        Admin Login
      </h1>

      <p className="text-center text-zinc-500 mt-2">
        Sign in to manage orders
      </p>

      <div className="flex flex-col gap-4 mt-8">

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-xl border border-zinc-300 bg-white px-4 outline-none focus:border-[#FFD400]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 rounded-xl border border-zinc-300 bg-white px-4 outline-none focus:border-[#FFD400]"
        />

        <button
          onClick={login}
          disabled={loading}
          className="h-12 rounded-xl bg-[#FFD400] hover:bg-yellow-400 text-black font-semibold transition"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

      </div>

    </div>

  </div>
);
}