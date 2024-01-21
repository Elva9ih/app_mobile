import { configureStore } from "@reduxjs/toolkit";
import ProduitSlice from '../slices/ProduitSlice';
import CategorieSlice from "./CategorieSlice";
import ListProduitSlice from "./ListProduitSlice";
import ConnexionSlice from "./ConnexionSlice";

export const mystore=configureStore({
    reducer:{
        produit:ProduitSlice,
        listproduits:ListProduitSlice,
        categorie:CategorieSlice,
        connexion:ConnexionSlice,
    }
})

