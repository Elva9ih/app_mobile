import { createSlice } from "@reduxjs/toolkit";

const ListProduitSlice= createSlice({
    name:'listproduit',
    initialState: [],
    reducers: {
      addProduitVent: (state, action) => {
        return [...state, action.payload];
      },
    },
})

export const { addProduitVent} = ListProduitSlice.actions;
export const allproduits = (state) => state.listproduit; 
export default ListProduitSlice.reducer;