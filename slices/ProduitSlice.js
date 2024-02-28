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
        // console.log(selectedItem)
        const itemIndex = state.findIndex(item => item.id === selectedItem.id);
  
        if (itemIndex !== -1) {
          const updatedListProduit = [...state];
          updatedListProduit[itemIndex] = { ...selectedItem, selected: true };
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
          return updatedListProduit;
        }
  
        return state;
      })
      .addCase('listproduits/deleteAllProduitVent', (state, action) => {
        const newListProduit = state.map(item => {
          const { selected, ...itemWithoutSelected } = item;
          return itemWithoutSelected;
        });
      
        return newListProduit;
      })
      .addCase('archive/addArchive', (state, action) => {
        const newListProduit = state.map(item => {
          const { selected, ...itemWithoutSelected } = item;
          return itemWithoutSelected;
        });
        return newListProduit;
      })
       .addCase('listproduits/addAllProduitVent', (state, action) => {
          const selectedItems = action.payload.data;
          selected=state.some(obj => obj.hasOwnProperty('selected'));
          if(!selected){
          // console.log(selectedItems)
          const updatedState = state.map(item => {
            const foundItem = selectedItems.find(selectedItem => selectedItem.id === item.id);
            if (foundItem) {
              return { ...item, selected: true };
            }
            return item;
          });
          return updatedState;
        }
      })
  }
  
});

export const { addAllProduits, addProduit } = ProduitSlice.actions;
export const allproduits = (state) => state.produit; 
export default ProduitSlice.reducer;
