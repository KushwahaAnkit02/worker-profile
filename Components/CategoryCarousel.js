import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { workerCategories } from "../utills/WorkersData";

const CategoryCarousel = ({ setInputText }) => {
  const { categories } = workerCategories;
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setInputText(item?.Worker_Role)}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: item?.icon,
            }}
            style={styles?.image}
          />
          <Text style={styles.name}>{item?.Worker_Role}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.flatListView}>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,

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
  name: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  flatListView: {
    height: 90,
    marginTop: 20,
  },
});

export default CategoryCarousel;
