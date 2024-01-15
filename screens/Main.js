import React, { useEffect,useState } from "react";
import AppNavigator from "../navigation/AppNavigator";
import { useDispatch } from "react-redux";
import { addAllProduits } from "../slices/ProduitSlice";
import axios from "axios";


const Main =()=>{
    const dispatch=useDispatch();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://2faa-41-188-105-87.ngrok-free.app/api/data');
          dispatch(addAllProduits(response.data));
        } catch (error) {
          console.error('Error fetching data:', error);
        } 
      };
      fetchData();
    }, []);
    

    return <AppNavigator/>
}

export default Main;