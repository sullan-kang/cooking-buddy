import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import {useState} from 'react';
function ShoopingInput(props){
    const[enteredShopText, setEnteredShop]=useState('');
    const[enteredShopText2, setEnteredShop2]=useState('');
    function goalInputHandler(enteredText){
        setEnteredShop(enteredText);
      };
      function goalInputHandler2(enteredText2){
        setEnteredShop2(enteredText2);
      };
      function addShopHandler(){
        props.onAddGoal(enteredShopText,enteredShopText2);
        setEnteredShop('');
        setEnteredShop2('');
      }
    return( 
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='new item' onChangeText={goalInputHandler} value={enteredShopText}/>
                <TextInput style={styles.textInput} placeholder='the amount' onChangeText={goalInputHandler2} value={enteredShopText2} />
            </View>
            <View style={styles.addButton}>
                <View style={styles.button}>
                <Button title='Add item' onPress={addShopHandler} color='darkred'/>
                </View>
                <View style={styles.button} >
                <Button title='Back to the list' color='darkred' onPress={props.onCancel}/>
                </View>
            </View>
       </Modal>

    )
};
export default ShoopingInput;

const styles= StyleSheet.create({
    inputContainer:{

        flex:1,
        backgroundColor:'linen',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    
    
      },
      textInput:{
        borderWidth:1,
        borderColor: 'darksalmon',
        width:'70%',
        marginTop: 15,
        marginBottom:15,
        padding: 4,
      },
      addButton:{
          backgroundColor:'peachpuff',
          flex:1,
          flexDirection:'row',
          justifyContent:'center',

      },
      button:{
          width:'40%',
          height:'15%',
          margin:10,
          justifyContent:'center',
          backgroundColor:'darksalmon'

      }

})