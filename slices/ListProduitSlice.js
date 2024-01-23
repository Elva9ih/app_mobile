import { createSlice } from "@reduxjs/toolkit";

const ListProduitSlice = createSlice({
  name: 'listproduits',
  initialState: { listproduit: [] },
  reducers: {
    addProduitVent: (state, action) => {
      const existingProduct = state.listproduit.find(product => product.codebar === action.payload.codebar);
      if (existingProduct) {
        alert("Ce produit existe déjà");
        return state; 
      } else {
        const newProduct = { ...action.payload, qty: 1 };
        return { ...state, listproduit: [...state.listproduit, newProduct] };
      }
    },
    increment: (state, action) => {
      const itemIndex = state.listproduit.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.listproduit[itemIndex].qty += 1;
      }
    },
    decrement: (state, action) => {
      const itemIndex = state.listproduit.findIndex(item => item.id === action.payload);
    
      if (itemIndex !== -1) {
        const currentQty = state.listproduit[itemIndex].qty;
        const updatedQty = Math.max(currentQty - 1, 1);
        const updatedListProduit = [...state.listproduit];
        updatedListProduit[itemIndex] = { ...state.listproduit[itemIndex], qty: updatedQty };
        return { ...state, listproduit: updatedListProduit };
      }
      return state;
    },    
    deleteProduitVent: (state, action) => {
      return { ...state, listproduit: state.listproduit.filter(item => item.id !== action.payload) };
    },
    deleteAllProduitVent: (state) => {
      return { ...state, listproduit: [] };
    },
  },
  
});

export const {
  addProduitVent,
  increment,
  decrement,
  deleteProduitVent,
  deleteAllProduitVent,
} = ListProduitSlice.actions;

export const totalprix = (state) => {
  const totalPrice = state.listproduits.listproduit.reduce((total, item) => total + parseFloat(item.prix) * item.qty, 0);
  return parseFloat(totalPrice.toFixed(2));
};

export const allventeproduits = (state) => state.listproduits;

export default ListProduitSlice.reducer;

export const selectProductList = (state) => state.listproduits.listproduit;

export const countProduits = (state) => selectProductList(state).length;