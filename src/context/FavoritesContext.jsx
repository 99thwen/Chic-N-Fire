"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesContext =
  createContext();

export function FavoritesProvider({
  children,
}) {

  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {

    const stored =
      localStorage.getItem(
        "favorites"
      );

    if (stored) {

      setFavorites(
        JSON.parse(stored)
      );

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  const toggleFavorite = (
    product
  ) => {

    const exists =
      favorites.some(
        (item) =>
          item.id === product.id
      );

    if (exists) {

      setFavorites(
        favorites.filter(
          (item) =>
            item.id !== product.id
        )
      );

    } else {

      setFavorites([
        ...favorites,
        product,
      ]);

    }

  };

  const isFavorite = (id) =>
    favorites.some(
      (item) =>
        item.id === id
    );

  return (

    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >

      {children}

    </FavoritesContext.Provider>

  );

}

export const useFavorites =
  () =>
    useContext(
      FavoritesContext
    );