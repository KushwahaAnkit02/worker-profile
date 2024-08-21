import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";
import { workerProfiles } from "../utills/WorkersData";

const WorkerProfileFlatList = ({ checkWorkerRole }) => {
  const { workers } = workerProfiles;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.flagImage}>{item?.countryFlag}</Text>
        <Image
          source={{
            uri: `https://xsgames.co/randomusers/assets/avatars/${item?.gender}/${item?.id}.jpg`,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={checkWorkerRole ? checkWorkerRole : workers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  image: {
    marginHorizontal: 10,
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  flagImage: {
    position: "absolute",
    top: -5,
    right: 3,
    zIndex: 1,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 10,
    textAlign: "center",
  },
});

export default WorkerProfileFlatList;
