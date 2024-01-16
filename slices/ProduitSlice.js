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
  extraReducers: (builder) => {
    builder
      .addCase('listproduits/addProduitVent', (state, action) => {
        const selectedItem = action.payload;
        const itemIndex = state.findIndex(item => item.id === selectedItem.id);
  
        if (itemIndex !== -1) {
          const updatedListProduit = [...state];
          updatedListProduit[itemIndex] = { ...selectedItem, selected: true };
  
          console.log(updatedListProduit[itemIndex]);
  
          return updatedListProduit;
        }
        return state;
      })
      .addCase('listproduits/deleteProduitVent', (state, action) => {
        const itemIdToDelete = action.payload;
        const itemIndex = state.findIndex(item => item.id === itemIdToDelete);
        if (itemIndex !== -1) {
          const updatedListProduit = [...state];
          const updatedItem = { ...updatedListProduit[itemIndex] };
          delete updatedItem.selected;
          updatedListProduit[itemIndex] = updatedItem;
          console.log(updatedListProduit[itemIndex]);
  
          return updatedListProduit;
        }
  
        return state;
      });
  }
  
});

export const { addAllProduits, addProduit } = ProduitSlice.actions;
export const allproduits = (state) => state.produit; 
export default ProduitSlice.reducer;
