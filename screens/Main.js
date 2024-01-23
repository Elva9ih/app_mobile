import React, { useEffect,useState } from "react";
import AppNavigator from "../navigation/AppNavigator";
import { useDispatch } from "react-redux";
import { addAllProduits } from "../slices/ProduitSlice";
import axios from "axios";
import { addAllCategories } from "../slices/CategorieSlice";


const Main =()=>{
    const dispatch=useDispatch();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fd2a-41-223-98-66.ngrok-free.app/api/data');
          dispatch(addAllProduits(response.data));
          // alert(JSON.stringify(response.data))

          dispatch(addAllCategories(response.data));
          // alert(JSON.stringify(response.data))
        } catch (error) {
          console.error('Error fetching data:', error);
        } 
      };
      fetchData();
    }, []);
    

    return <AppNavigator/>
}

export default Main;