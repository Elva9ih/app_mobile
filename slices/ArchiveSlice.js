import { createSlice } from "@reduxjs/toolkit";

const ArchiveSlice = createSlice({
  name: "archive",
  initialState: [],
  reducers: {
    addArchive :(state, action) => {
      const key =Math.floor(Math.random() * 100000000000000) + 1;
      const createdAtDate = new Date();
      const hours = createdAtDate.getHours();
      const minutes = createdAtDate.getMinutes();
      const seconds = createdAtDate.getSeconds();
      const formattedTime = `${hours}:${minutes}:${seconds}`;

      const newList = { key: key, data: action.payload ,temp:formattedTime};
      // alert(JSON.stringify(alert(JSON.stringify(action.payload))))
      console.log(JSON.stringify(state))
      return [...state, newList];
    },
    deleteAllArchive: (state, action) => {
      return action.payload
    },
    deleteArchive: (state, action) => {
      itemIndex = state.filter(item => item.key !== action.payload.key);
         return itemIndex
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase('listproduits/addAllProduitVent', (state, action) => {
  //       console.log(JSON.stringify('list produit',action.payload.data.length))
  //       console.log(JSON.stringify('list arrchive',action.payload.data.length))
  //        itemIndex = state.filter(item => item.key !== action.payload.key);
  //        return itemIndex
  //       //  console.log(JSON.stringify(action.payload))
  //     })
  // }
});
export const { addArchive,deleteAllArchive,deleteArchive } = ArchiveSlice.actions;
export const allarchives = (state) => state.archive; 
export default ArchiveSlice.reducer;
export const selectArchive = (state) => state.archive;
export const countProduitsArchive = (state) => selectArchive(state).length;
