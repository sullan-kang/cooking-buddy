import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView, 
  TouchableHighlight,
  Image,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Recipe = ({ name,  ingredients, image, steps, time}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.ingredients}>{ingredients}</Text>
    <Text style={styles.ingredients}>{ingredients}</Text>
  </View>
);

const RecipeListView = ({ item }) => (
  <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: item.photo_url }} />
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
    </View>
  </TouchableHighlight>
);

// the filter
const RecipeList = ({ searchPhrase, setCLicked, data }) => {
  const renderRecipes = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <RecipeListView item={item} />;
    }
    // title
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <RecipeListView item={item} />;
    }
    // ingredients
    // if (item.ingredients.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <RecipeListView item={item} />;
    // }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />

      </View>
    </SafeAreaView>
  );

};

export default RecipeList;


import { Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
});

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
});