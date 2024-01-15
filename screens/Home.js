import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';

const Home = () => {
    const myProducts = useSelector(allproduits);
  return (
    <View>
        <Text>{myProducts[0].name}</Text>
      <Text>Home</Text>
    </View>
  )
}

export default Home