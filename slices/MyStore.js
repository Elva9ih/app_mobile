import { configureStore } from "@reduxjs/toolkit";
import ProduitSlice from '../slices/ProduitSlice';

export const mystore=configureStore({
    reducer:{
        produit:ProduitSlice,
    }
})

