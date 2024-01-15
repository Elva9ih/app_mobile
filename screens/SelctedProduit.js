import { View, Text, Image } from 'react-native'
import React from 'react'
import { allcategories } from '../slices/CategorieSlice';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

const SelctedProduit = () => {
    const categories = useSelector(allcategories);
    alert(JSON.stringify(categories))
    const renderItem = ({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      );
  return (
    <View>
        <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={renderItem}
        />
      <Text>SelctedProduit</Text>
    </View>
  )
}

export default SelctedProduit