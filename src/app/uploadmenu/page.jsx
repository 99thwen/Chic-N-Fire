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

      alert("Menu Uploaded Successfully");

    } catch (error) {

      console.error(error);
      alert("Upload Failed");

    }

  };

  return (
    <div className="p-10">
      <button
        onClick={uploadMenu}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Upload Menu
      </button>
    </div>
  );
}