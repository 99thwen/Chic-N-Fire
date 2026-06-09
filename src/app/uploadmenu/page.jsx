"use client";

import { menuData } from "../../data/menuData";

import { db } from "../../lib/firebase";

import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

export default function UploadMenu() {
const uploadMenu = async () => {

  console.log("BUTTON CLICKED");

  try { 

      for (const item of menuData) {

        await setDoc(
          doc(
            collection(db, "menu"),
            item.title
              .toLowerCase()
              .replaceAll(" ", "-")
          ),
          item
        );

      }

      alert("Menu uploaded successfully!");

    } catch (error) {

      console.error(error);

      alert("Upload failed");

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <button
        onClick={uploadMenu}
        className="bg-green-500 text-white px-6 py-4 rounded-xl"
      >
        Upload Menu To Firestore
      </button>

    </div>
  );
}