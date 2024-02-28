import { View, Text, Image, SafeAreaView,StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Produit from '../components/Produit';
import { addProduitVent, allventeproduits, countProduits, deleteAllProduitVent, totalprix } from '../slices/ListProduitSlice';
import ModalComponent from '../components/ModalComponent';
import { TextInput } from 'react-native-gesture-handler';
import PrintPdf from '../components/PrintPdf';
import { Icon } from 'react-native-elements';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { addArchive } from '../slices/ArchiveSlice';
const SelctedProduit = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [remise, setRemise] = useState(0);
  const count = useSelector(countProduits);
    // code bar
      const [hasPermission, setHasPermission] = useState(null);
      const [scanned, setScanned] = useState(false);
      const [isCameraOpen, setIsCameraOpen] = useState(false);
      const scannerRef = useRef(null);
      const myProducts = useSelector(state=>state.produit);
      // const archive=useSelector(state=>state.archive);
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
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    const startScan = () => {
      setScanned(false);
      setIsCameraOpen(true);
    };
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const data=useSelector(allventeproduits)
  const openModal = (totaleRemis) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    const dispatch=useDispatch();
    const allproduits = useSelector(allventeproduits);
    const totale = useSelector(totalprix);
    const [totaleRemis,SetTotaleRemis] = useState(totale);
    const renderItem = ({ item }) => (
          <Produit
              id={item.id}
              name={item.name}
              prix={item?.prix}
              quantite={item.quantite}
              image={item.image}
              categorie={item.categorie}
              qty={item.qty}
            />
      );

      const hundleRemise=(remise)=>{
        setRemise(remise)
        const discountedTotal = totale - (totale * parseInt(remise) / 100);
        const formattedTotal = parseFloat(discountedTotal.toFixed(2));
        SetTotaleRemis(formattedTotal);
      }
      useEffect(()=>{
        const discountedTotal = totale - (totale * parseInt(remise) / 100);
        const formattedTotal = parseFloat(discountedTotal.toFixed(2));
        SetTotaleRemis(formattedTotal);
      },[totale])
  return (
<>
    {!isCameraOpen &&  (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff' }}>
      
      <View style={{ backgroundColor:'#ffff'}} >
        {/* featured */}
            <View style={{ alignItems:'center',backgroundColor:'#ededed',height:isKeyboardVisible ? 200:500}}>
                <FlatList
                data={allproduits.listproduit}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={1} 
                />
            </View>

            <View style={{ margin:3 ,flexDirection:'row', justifyContent:'space-between',alignItems:'center',margin:25, marginTop:25}}>
              <Text style={{ fontSize: 20,paddingLeft: 2,paddingRight: 2, fontSize: 20,fontWeight:400, color: '#383838' }}>Totale = {totale} MRU</Text>
              <Text style={{ fontSize: 16,fontWeight:300, color: 'black' }}>Remis :</Text>
        <View
        style={{  
          textAlign:'center',
          borderWidth: 0.5,
          borderRadius: 8,
          borderColor: 'gray',
          flexDirection:'row',
          alignItems:'center',
          padding:2,
          paddingLeft:2
         }}
         >
        <TextInput
          placeholder="remis.."
          value={remise.toString()}
          keyboardType='numeric'
          onChangeText={(input) => {
            const parsedInput = parseFloat(input);

            if (!isNaN(parsedInput) &&  parsedInput <= 100) {
              hundleRemise(parsedInput);
            }
            if (isNaN(parsedInput)) {
              hundleRemise(0);
            }
          }}
            />
        <Text>%</Text>
        </View>
       
            </View>
            <Text style={{paddingLeft: 2,paddingRight: 2, fontSize: 20,fontWeight:400,alignSelf: 'center', color: '#383838' }}>Prix = {totaleRemis} MRU</Text>

            <View style={{ flexDirection:'row',width:'80%',alignSelf:'center' ,justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity
                style={{
                  width: "30%",
                  height: 40,
                  backgroundColor: "#b35049",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                }}
                onPress={() => {
                  SetTotaleRemis(0)
                  dispatch(deleteAllProduitVent())
                }}
              >
                <Text style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Vider</Text>
              </TouchableOpacity>
              <TouchableOpacity
            style={{
              width: "30%",
              height: 40,
              backgroundColor: "#3c7547",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
              marginLeft:35,
            }}
            onPress={startScan}
          >
            <Icon name="qr-code" size={30} color="white"/>
          </TouchableOpacity>
            <PrintPdf/>
            
            </View>
            <View style={{ justifyContent:'space-between',alignItems:'center',flexDirection:'row' }}>
              <TouchableOpacity
              style={{
                width: "40%",
                height: 50,
                backgroundColor: "#6588bf",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
                margin:20,
              }}
              onPress={() => openModal(totaleRemis,navigation)}
            >
              <Text  style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Payer</Text>
            </TouchableOpacity>
              <TouchableOpacity
              style={{
                width: "40%",
                height: 50,
                backgroundColor: "#1f293b",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
                margin:20,
              }}
              onPress={() => {
                dispatch(addArchive(allproduits.listproduit))
                navigation.navigate('Archive')
              }}
            >
              <Text  style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Archiver</Text>
            </TouchableOpacity>
          </View>
            <ModalComponent
             visible={modalVisible} 
             onClose={closeModal} 
             da={allproduits.listproduit}
             totaleRemis={totaleRemis} 
             navigation={navigation}
             />
        </View>
    </SafeAreaView>
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


export default SelctedProduit