import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { workerCategories, workerProfiles } from "../utills/WorkersData";
import Feather from "@expo/vector-icons/Feather";
import WorkerProfileFlatList from "./WorkerProfileFlatList";

const Categories = () => {
  const { categories } = workerCategories;
  const { workers } = workerProfiles;
  const [inputText, setInputText] = useState("");

  const [checkWorkerRole, setCheckWorkerRole] = useState("");

  const handleFindeWorker = (text) => {
    try {
      const filteredWorker = workers.filter((worker) => worker.role === text);
      setCheckWorkerRole(filteredWorker);
      setInputText(filteredWorker[0].role);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <View style={styles.category}>
        {categories?.map((data) => {
          return (
            <TouchableOpacity
              key={data.id}
              onPress={() => handleFindeWorker(data?.Worker_Role)}
            >
              <Image
                source={{ uri: data?.icon }}
                style={styles.category.image}
              />
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                {data?.Worker_Role}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.mainView}>
        <View style={styles.inputView}>
          <Feather name="search" size={25} color="black" />
          <TextInput
            style={styles.input}
            placeholder={!inputText ? "Search" : inputText}
            onChangeText={(text) => handleFindeWorker(text)}
          />
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

      <View style={styles.worker_profile}>
        <WorkerProfileFlatList checkWorkerRole={checkWorkerRole} />
      </View>
    </>
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
  category: {
    width: "50%",
    paddingVertical: 10,
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    image: {
      marginHorizontal: 10,
      height: 100,
      width: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "black",
    },
  },
  worker_profile: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
  },
});

export default Categories;
