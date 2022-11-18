import{StyleSheet, View, Text, Pressable, Modal,TextInput} from 'react-native';
import {useCallback, useState} from 'react';

function GoalItem(props){
  const[editModleIisVisible, seteditModleIisVisible] =useState(false);
  const[enteredEditText, setEnteredEditText]=useState('');
  function starteditModleHandler(){
    seteditModleIisVisible(true);
  };
  function endeditModleHandler(){
    seteditModleIisVisible(false);
  };
  function editInputHandler(enteredEdit){
    setEnteredEditText(enteredEdit);  
  };
  function editHandler(){
    props.onEditItem(props.id, enteredEditText);
    endeditModleHandler();
    setEnteredEditText('');
  };

return (
    <View style={styles.goalContainer}>
         <Text >{props.text}</Text>
         <Text >{props.amount}</Text>
    <Pressable onPress={starteditModleHandler}>
        <View style={styles.delete}>
            <Text>Edit</Text>
        </View>
    </Pressable>
    <Modal  visible={editModleIisVisible}>
       <View style={styles.editView}>
        <TextInput style={styles.textEdit} placeholder='new amount' onChangeText={editInputHandler} value={enteredEditText}/>
        <Pressable onPress={editHandler}>
            <View style={styles.delete}>
              <Text>Submit</Text>
            </View>
       </Pressable>
    </View>
    </Modal>
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed})=> pressed && styles.pressedItem}>
        <View style={styles.delete}>
            <Text>Bought</Text>
        </View>

    </Pressable>
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed})=> pressed && styles.pressedItem}>
        <View style={styles.delete}>
            <Text>Delete</Text>
        </View>

    </Pressable>
     </View>
);
}
export default GoalItem
const styles= StyleSheet.create({
    goalContainer:{
        flexDirection:'row',
        marginBottom: 5,
        padding: 5,
        borderWidth:2,
        borderColor:'brown',
        color:'white',
        backgroundColor: 'pink',
        justifyContent:'space-between',
    
      },
      pressedItem:{
          opacity:0.5,
      },
      delete:{
          backgroundColor:'crimson',
      },
      editView :{
        backgroundColor:'coral',
        marginTop: '50%',
        marginLeft:'25%',
        width:200,
        height:200,
        marginBottom:'30%',
        justifyContent: 'space-around',
        alignItems:'center',

      },
      textEdit:{
          backgroundColor:'cornsilk',
      },

});