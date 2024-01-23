import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons

const Codebar = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setIsCameraOpen(false);
    alert(`Bar code with type1 ${type} and data ${data} has been scanned!`);
  };

  const startScan = () => {
    setScanned(false);
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isCameraOpen && (
        <> 
        <TouchableOpacity style={styles.closeButton} onPress={closeCamera}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <BarCodeScanner
            ref={scannerRef}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
         
        </>
      )}
      {!isCameraOpen && (
        <TouchableOpacity style={styles.scanButton} onPress={startScan}>
          <Icon name="qrcode" size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'flex-start',
  },
  scanButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    flexDirection:'row',
    // backgroundColor: 'red',
    padding: 10,
    margin: 10,
    color:'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'flex-end'
  },
  buttonText: {
    color: 'red',
    fontSize: 30,
  },
});

export default Codebar;
