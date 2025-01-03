import {registerRootComponent} from "expo";
import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Welcome to One Minute Coding!</Text>
    </SafeAreaView>
  );
};

export default registerRootComponent(App);

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    height: 50,
    width: '100%',
    backgroundColor: 'red',
  },
});