import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { workerProfiles } from "../utills/WorkersData";
import Feather from "@expo/vector-icons/Feather";
import WorkerProfileFlatList from "./WorkerProfileFlatList";
import CategoryCarousel from "./CategoryCarousel";
import AntDesign from "@expo/vector-icons/AntDesign";

const Categories = () => {
  const { workers } = workerProfiles;
  const [inputText, setInputText] = useState("");
  const [checkWorkerRole, setCheckWorkerRole] = useState("");

  const handleFindeWorker = (text) => {
    try {
      const filteredWorker = workers.filter((worker) =>
        worker.role.includes(text ?? inputText)
      );
      setCheckWorkerRole(filteredWorker);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleFindeWorker();
  }, [inputText]);

  return (
    <SafeAreaView>
      <CategoryCarousel setInputText={setInputText} />
      <View style={styles.mainView}>
        <View style={styles.inputView}>
          <Feather name="search" size={25} color="black" />
          <TextInput
            style={styles.input}
            value={inputText}
            placeholder={"Search"}
            onChangeText={(text) => setInputText(text.trim())}
          />
          {inputText && (
            <TouchableOpacity
              style={{ right: 20 }}
              onPress={() => setInputText("")}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          )}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
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
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
  },
});

export default Categories;
