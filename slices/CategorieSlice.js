import { createSlice } from "@reduxjs/toolkit";

const CategorieSlice = createSlice({
  name: "categorie",
  initialState: [],
  reducers: {
    addAllCategories: (state, action) => {
        let products=action.payload;
        const uniqueCategoriesSet = new Set();
            products.forEach(product => {
                uniqueCategoriesSet.add(product.categorie);
            });
            state=Array.from(uniqueCategoriesSet);
  return Array.from(uniqueCategoriesSet);
    }
  },
});

export const { addAllCategories } = CategorieSlice.actions;
export const allcategories = (state) => state.categorie; 
export default CategorieSlice.reducer;