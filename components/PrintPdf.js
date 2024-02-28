import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text,TouchableOpacity } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useSelector } from 'react-redux';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements'
import { allventeproduits } from '../slices/ListProduitSlice';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello World!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

export default function PrintPdf() {
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createDynamicTable(),
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }
  const myCartItems = useSelector((state) => state.listproduits.listproduit);
  const createDynamicTable = () => {
    var table = '';
    for (let i in myCartItems) {
      const item = myCartItems[i];
      table = table + `
      <tr>
      <td><img src=${item.image}></td>
        <td>${item.name}</td>
        <td>${item.prix}</td>
        <td>${item.qty}</td>
      </tr>
      `
    }
   
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        img{
          width:100px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
      </style>
      </head>
      <body>
      
      <h2>HTML Table</h2>
      
      <table>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>prix</th>
          <th>quantite</th>
        </tr>
        ${table}
      </table>
      
      </body>
    </html>
      `;
    return html;
  }

  return (
    <View>
      <TouchableOpacity 
      style={{ 
        width: "90%",
        height: 40,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        marginLeft:35,
     }}
      onPress={print}
      >
        <Text  style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Imprimer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    margin: 5,
  },
})