import { createSlice } from "@reduxjs/toolkit";

const ProduitSlice = createSlice({
  name: "produit",
  initialState: [],
  reducers: {
    addAllProduits: (state, action) => {
      return action.payload
    },
    addProduit: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addAllProduits, addProduit } = ProduitSlice.actions;
export const allproduits = (state) => state.produit; 
export default ProduitSlice.reducer;
