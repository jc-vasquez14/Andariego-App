import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function Itinerary() {
  const [fontsLoaded] = useFonts({
    "Spartan-Black": require("../assets/fonts/LeagueSpartan-Black.ttf"),
    "Spartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-ExtraBold": require("../assets/fonts/LeagueSpartan-ExtraBold.ttf"),
    "Spartan-Medium": require("../assets/fonts/LeagueSpartan-Medium.ttf"),
    "Spartan-Regular": require("../assets/fonts/LeagueSpartan-Regular.ttf"),
    "Spartan-SemiBold": require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });
  return (
    <View>
      <Text>Itinerary</Text>
    </View>
  );
};

const styles = StyleSheet.create({});