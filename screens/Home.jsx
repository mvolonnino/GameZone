import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

const Home = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "Lorem Ipsum",
      key: 1,
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "Pokemon Rules",
      key: 2,
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "Play Station sux",
      key: 3,
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
    setShowModal(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={showModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={26}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setShowModal(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.iconContainer}>
        <MaterialIcons
          name="add"
          size={26}
          style={styles.modalToggle}
          onPress={() => setShowModal(true)}
        />
      </View>

      <FlatList
        data={reviews}
        keyExtractor={reviews.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={[globalStyles.titleText, styles.listItem]}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 60,
    marginBottom: 60,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
