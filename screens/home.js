// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import RecipeList from "../components/Lists"
import SearchBar from "../components/Search";
import { recipes } from "../data/dataArray";


const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  // useEffect(() => {
  //   console.log('here')
  //   const getData = () => {
  //     const apiResponse = fetch(
  //       'https://localhost:8000/recipes',
  //       {
  //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //         mode: 'cors', // no-cors, *cors, same-origin
  //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //         credentials: 'same-origin', // include, *same-origin, omit
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-type': 'application/json'
  //         }
  //       }
  //     )
  //     .catch(error => {
  //       console.log('found error', error)}
  //     );
  //     // const data = await apiResponse.json();
  //     // setFakeData(data);
  //   };
  //   getData();
  // }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Let's find something to cook!</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Text>
        here {fakeData}
      </Text>
      { (

          <RecipeList
            searchPhrase={searchPhrase}
            data={recipes}
            setClicked={setClicked}
          />

      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});