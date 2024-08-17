import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { workerCategories } from "../utills/WorkersData";
import Feather from "@expo/vector-icons/Feather";
import Carousel from "react-native-reanimated-carousel";

const Categories = () => {
  const catagory = workerCategories;
  const [search, setSearch] = useState("");

  useEffect(() => {
    (() => {
      console.log(catagory);
    })();
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.mainView}>
        <View style={styles.inputView}>
          <Feather name="search" size={25} color="black" />
          <TextInput style={styles.input} placeholder="Search"></TextInput>
        </View>
        <View style={styles.filter}>
          <Feather
            style={{
              padding: 10,
            }}
            name="filter"
            size={25}
            color="black"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    width: "80%",
    backgroundColor: "#ccd3de",
    borderRadius: 10,
  },
  input: {
    width: "90%",
    height: 35,
    fontSize: 20,
    paddingLeft: 10,
  },
  filter: {
    backgroundColor: "#ccd3de",
    borderRadius: 10,
  },
});

export default Categories;
