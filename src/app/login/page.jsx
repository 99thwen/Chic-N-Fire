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

    <div className="min-h-screen bg-black flex items-center justify-center p-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-[30px] p-10 w-full max-w-md">

        <h1 className="text-5xl font-black text-white">
          Admin Login
        </h1>

        <p className="text-zinc-400 mt-4">
          Sign in to manage orders
        </p>

        <div className="flex flex-col gap-5 mt-10">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-5 text-white outline-none focus:border-orange-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-5 text-white outline-none focus:border-orange-500"
          />

          <button
            onClick={login}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 transition py-5 rounded-2xl text-white font-black text-xl mt-4"
          >

            {loading
              ? "Signing In..."
              : "Login"}

          </button>

        </div>

      </div>

    </div>

  );
}