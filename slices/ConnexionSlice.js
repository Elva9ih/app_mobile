import { createSlice } from "@reduxjs/toolkit";

const ConnexionSlice = createSlice({
  name: "connexion",
  initialState: [],
  reducers: {
    SetConnexion: (state, action) => {
      return action.payload
    },
  },
});

export const { SetConnexion } = ConnexionSlice.actions;
export const ifConnexion = (state) => state.connexion; 
export default ConnexionSlice.reducer;