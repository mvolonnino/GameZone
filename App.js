import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./routes/drawer";

export default function App() {
  let [fontLoading] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontLoading) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}
