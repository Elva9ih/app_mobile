import { View, TextInput,Image, Text, StyleSheet, FlatList} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { allcategories } from '../slices/CategorieSlice';
import Head from '../components/Head';
import { addProduitVent, countProduits, deleteProduitVent } from '../slices/ListProduitSlice';
import { Icon } from 'react-native-elements';
import { BarCodeScanner } from 'expo-barcode-scanner';

// import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({navigation}) => {
    const dispatch=useDispatch()
    const myProducts = useSelector(allproduits);
    const categories = useSelector(allcategories);
    const count = useSelector(countProduits);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState();
    const handleSearch = (text) => {
      const query = text.toLowerCase();
      const filtered = categories.filter(item => item.toLowerCase().includes(query));
      setSearchQuery(text);
      setFilteredData(filtered);
    };
    useEffect(()=>{
      setFilteredData(categories);
    },);

    // code bar
      const [hasPermission, setHasPermission] = useState(null);
      const [scanned, setScanned] = useState(false);
      const [isCameraOpen, setIsCameraOpen] = useState(false);
      const [data, setData] = useState('');
      const scannerRef = useRef(null);
    
      useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
      const closeCamera = () => {
        setIsCameraOpen(false);
      };
      const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setIsCameraOpen(false);
        const foundProduct = myProducts.find(product => product.codebar === data);
        if (foundProduct) {
          dispatch(addProduitVent(foundProduct));
        } else {
          alert("Ce produit n'existe pas");
        }
      };
    
      const startScan = () => {
        setScanned(false);
        setIsCameraOpen(true);
      };
    
      
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }    
    // 
    const renderProduct = ({item}) => (
         <View>
              <View style={{ padding:10,marginLeft:10,borderRadius:10 ,backgroundColor:'#fff'}}>
              {!('selected' in item )?null:(
                  <View style={{ position:'absolute',backgroundColor:'#cc7c87',zIndex:100,right:7,borderRadius:100,top:7}}>
                    <TouchableOpacity
                    onPress={() => {
                      dispatch(deleteProduitVent(item.id));
                      }}
                    >
                        <Icon name='close' color='#fff' />
                    </TouchableOpacity>
                  </View>
               )} 

               <View style={{ justifyContent:'center',alignItems:'center' }}>
                  <Image
                        source={{ uri:item.image }} 
                        style={{ height:120,backgroundColor:'transparent',width:120,}}
                  />
               </View>
              
              <Text style={{ color:'#8b8c8c',fontSize:14,fontWeight:300 }}>{item.name}</Text>
              <Text style={{ color:'#6588bf',fontSize:14,fontWeight:400 }}>{item.prix+' MRU'}</Text>
              <Text style={{ color:'#8b8c8c',fontSize:15,fontWeight:500 }}>{item.quantite + " unité"}</Text>
              {'selected' in item ?null:(
               <TouchableOpacity 
               style={{ width:'100%',backgroundColor:'#6588bf',marginTop:5 }}
               onPress={() => {
                dispatch(addProduitVent(item));
                // setSelected(true)
                }}
               >
                  <Text style={{ color:'#ebebeb',textAlign: 'center' }}>Add to cards</Text>
               </TouchableOpacity>
              )}
               {!('selected' in item )?null:(
               <TouchableOpacity disabled style={{ width:'100%',backgroundColor:'#84e8b3',marginTop:5,justifyContent:'center' }}>
                  <Text style={{ color:'#ffff',textAlign: 'center',fontStyle:'italic'}}>selected</Text>
                  {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                  {/* <Icon name='check' size={38} type='font-awesome' color='#7f8282'/> */}
               </TouchableOpacity>
               )}
              </View>
         </View>
    );
    const renderItem = ({ item }) => (
      <View  style={{ marginTop:0}} >
        <View style={{ marginBottom:10,marginLeft:10,flexDirection:'row' ,justifyContent:'space-between'}}>
        <Text style={{ fontSize:25,fontWeight:400,color:'#6a6b6b' }}>{item}</Text>
       <TouchableOpacity         
                onPress={() => navigation.navigate('Categorie', { itemId: item})}
       >
               <Text style={{paddingLeft:10,fontStyle:'italic',  fontSize:15,fontWeight:600,right:10,marginTop:7,color:'#cc7c87',borderRadius:20 }}> See more { '>' } </Text>
       </TouchableOpacity> 
      
      </View>
         <FlatList
           showsHorizontalScrollIndicator={false}
            horizontal
            data={myProducts.filter(i => i.categorie == item)}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderProduct}
            numColumns={1}
            />

      </View>
    );
    
  return (
    <>
    {!isCameraOpen && (
    <View style={{ flex:1 }}>

    {/*  searsh */}
    <View>
    <View style={{ flexDirection:'column',justifyContent:'center' }}>
    <View style={styles.searsh_vente}>
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("Menu");
    }}
    >
    <Icon name="menu" size={40} color="#7f8282" />
    </TouchableOpacity>
    <View style={{ width:'70%',flexDirection:'row'}}>
      <View style={{top:12,left:10,zIndex:2}}>
        <Icon name='search' size={18} type='font-awesome' color='#7f8282'/>
    </View >
      
    <View style={{ backgroundColor: 'white', height: 40, width: '90%',right:20, borderTopLeftRadius:20,borderBottomLeftRadius:20,  paddingLeft: 20 ,flexDirection:'row',justifyContent:'space-between'}} >
            
            <TextInput
              style={{ backgroundColor: 'white', height: 40, width: '100%',right:20, borderRadius: 10, padding: 1, paddingLeft: 30 }}
              placeholder='Search'
              underlineColorAndroid='transparent'
              onChangeText={handleSearch}
              value={searchQuery}
            />
            {/* <Text>|</Text> */}
            <View  style={{  backgroundColor: 'white' ,borderTopRightRadius:20,borderBottomRightRadius:20}}>
              
              <TouchableOpacity  
              style={{  backgroundColor: 'white', height:  '100%' , width: '100%',borderTopRightRadius:12,borderBottomRightRadius:12,paddingTop:2,paddingRight:5 }}
              onPress={startScan}
              >
                  <Icon name="qr-code" size={30} color="black" />
                </TouchableOpacity> 
            </View>
             
    </View>
       


  </View>
        <TouchableOpacity style={{ right:6,bottom:2 }}
         onPress={() => {
          navigation.navigate("ListProduits");
        }}>
           <Icon name="shopping-cart" size={40} color="#6588bf" />
        </TouchableOpacity>
        
    </View>
   </View>
        <View style={{ backgroundColor:'#b5656d',position:'absolute',padding:2,borderRadius:200,right:15,top:9}}>
             <Text style={{ fontSize:12,color:'white'}}> {count} </Text>
        </View>
    </View>
    {/* categorie */}
         <View style={{ height:600,width:'100%',marginTop:35 }}>
         <FlatList
            data={filteredData}
            keyExtractor={(item) => item}
            renderItem={renderItem}
            style={{ backgroundColor:'#ededed' }}
        />
         </View>
    
    </View>
    )}
    {isCameraOpen && (
      <>
      <TouchableOpacity style={{ flexDirection:'row',
      padding: 10,
      margin: 10,
      color:'red',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'flex-end' 
      }} 
      onPress={closeCamera}
    >
    <Text style={{ color: 'red',fontSize: 30}}>X</Text>
  </TouchableOpacity>
      <BarCodeScanner
        ref={scannerRef}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      </>
  )}
  
  </>
  )
}
const styles = StyleSheet.create({
         searsh_vente:{
              marginTop:20,
              flexDirection:'row',
              width:'100%',
              justifyContent:'space-evenly'
         },
         searsh_vente:{
          marginTop:20,
          flexDirection:'row',
          width:'100%',
          justifyContent:'space-evenly'
     },

});
export default Home
