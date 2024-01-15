import { configureStore } from "@reduxjs/toolkit";
import ProduitSlice from '../slices/ProduitSlice';
import CategorieSlice from "./CategorieSlice";

export const mystore=configureStore({
    reducer:{
        produit:ProduitSlice,
        categorie:CategorieSlice,
    }
})

