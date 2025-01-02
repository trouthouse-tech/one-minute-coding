import {registerRootComponent} from "expo";
import React from "react";
import {View, Text} from "react-native";

const App = () => {
  return (
    <View>
      <Text>Welcome to One Minute Coding!</Text>
    </View>
  );
};

export default registerRootComponent(App);