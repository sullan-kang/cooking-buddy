import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, InteractionManager, Image, Modal } from 'react-native';
import ShoopingInput from './Shopinput';
import ShoppingItem from './Shopitem';
function Shoppinglist() {
  const[addModleIisVisible, setaddModleIisVisible] =useState(false);
  const[shopitems, setShops]=useState([]);
  function startAddModleHandler(){
    setaddModleIisVisible(true);
  };
  function endAddModleHandler(){
    setaddModleIisVisible(false);

  };
  function addShopHandler(enteredShopText, enteredShopText2){
    setShops(currentShops => [...currentShops,{text: enteredShopText, amount:enteredShopText2, id: Math.random().toString() },]);
    endAddModleHandler();

  };
  function deleteShopHandler(id){
    setShops(currentShops => {return currentShops.filter((shop)=> shop.id !=id );
      });
  };
  function editShopHandler(id, enteredEdit){
     const editedItems=shopitems.map(shop=> {if (shop.id!=id){return shop;}
    else { return{
      ...shop,
      amount:enteredEdit,
      };
    }});
    setShops(editedItems);
  };
  return (
    <Modal>
    <View style={styles.appContainer}>
      <View style={styles.shoppinglistTitle}>
        <Text style={styles.shoppinglistTitleText}>Shopping List</Text>
        <Image source={require('/Users/banafsheh/react-native-projects/Learn-react/assets/images/shopping-cart.png')} style={styles.shoppinglistImage}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={shopitems} renderItem={itemData=>
        {return <ShoppingItem text={itemData.item.text} amount={itemData.item.amount} id={itemData.item.id} onDeleteItem={deleteShopHandler} onEditItem={editShopHandler}/>
          }} 
          keyExtractor={(item, index)=> {return InteractionManager.id; }}/>
            
      </View>
      <View style={styles.button}>
        <Button title='Add' color='darkred'onPress={startAddModleHandler}/>
    </View>
      <ShoopingInput visible={addModleIisVisible} onAddGoal={addShopHandler} onCancel={endAddModleHandler}/>

    </View>
    </Modal>
  );
}
export default Shoppinglist
const styles = StyleSheet.create({
  appContainer:{
    backgroundColor:'linen',
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer:{
    flex:3,
    backgroundColor:'bisque',
  },
  button:{

    marginBottom:100,
    backgroundColor:'darksalmon',
    alignItems: 'center',

},
shoppinglistTitle:{
  flexDirection:'row',
  marginBottom:20,
  marginTop:10,
  justifyContent:'space-between',

},
shoppinglistTitleText:{
  fontSize:25,

},
shoppinglistImage:{
  width:50,
  height:40,
},
});
