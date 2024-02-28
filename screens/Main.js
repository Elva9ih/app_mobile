import React, { useEffect,useState } from "react";
import AppNavigator from "../navigation/AppNavigator";
import { useDispatch } from "react-redux";
import { addAllProduits } from "../slices/ProduitSlice";
import axios from "axios";
import { addAllCategories } from "../slices/CategorieSlice";
import {URL_PATH} from "../AppPath"
import { ActivityIndicator } from "react-native";

const Main =()=>{
  const[isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();
    useEffect(() => {

      setIsLoading(true)
      const fetchData = async () => {
        try {
          const response = await axios.get(`${URL_PATH}/api/data`);
          dispatch(addAllProduits(response.data));
          // alert(JSON.stringify(response.data))

          dispatch(addAllCategories(response.data));
          setIsLoading(false)
          // alert(JSON.stringify(response.data))
        } catch (error) {
          console.error('Error fetching data:', error);
        } 
      
      };
      fetchData();
    }, []);

    if(isLoading){
      return <ActivityIndicator size="large"/>
    }
    
    return <AppNavigator/>
}

export default Main;