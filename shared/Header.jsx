<script src="http://localhost:8097"></script>;
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={openDrawer}
      />
      <View style={styles.headerRow}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImg}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: -50,
  },
  headerImg: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerRow: {
    flexDirection: "row",
  },
});

export default Header;
