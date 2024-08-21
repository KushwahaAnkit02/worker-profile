import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Categories from "./Categories";

const FirstRoute = () => (
  <View style={styles.firstRoute}>
    <Text style={styles.firstRoute.text}>Welcome!</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <Categories />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function HomeTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Welcome" },
    { key: "second", title: "Categories" },
  ]);

  const renderTabBar = (props) => (
    <View style={[styles.tabBarView, { width: layout.width }]}>
      <TabBar
        {...props}
        activeColor="red"
        inactiveColor="gray"
        indicatorStyle={{ backgroundColor: "red" }}
        style={{
          backgroundColor: "white",
        }}
      />
    </View>
  );
  return (
    <TabView
      style={{
        height: layout.height,
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  firstRoute: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    text: {
      fontSize: 20,
    },
  },
  tabBarView: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "red",
  },
});
