import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";

const ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam("rating");
  const title = navigation.getParam("title");
  const body = navigation.getParam("body");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
});

export default ReviewDetails;
