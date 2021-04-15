import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/global";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text>
        GameZone is a short, sweet review of a game. NO more than 50 characters
        really. Kinda like twitter but just for game reviews. Inspired by
        getting the answer quick. Not everyone loves to read. Like this about
        page. Who cares. Get to the reviews!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default About;
