import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export const signUpStyles = StyleSheet.create({
  TxtTest:{
    fontSize: 30,
    fontFamily: 'Spartan-Regular',
  },
  cntLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 110,
    width: 300,
    aspectRatio: 16 / 9,
  },
  RgtBtn: {
    backgroundColor: "#00B04F",
    padding: 10,
    width: 350,
    marginTop: 30,
    borderRadius: 50,
  },
  TxtBase: {
    fontSize: 20,
    alignSelf: "center",
  },
  TxtRgtBtn: {
    color: "white",
  },
  TxtLogBtn: {
    color: "black",
  },
  cntBtn: {
    alignItems: "center",
  },
  DivDesc: {
    margin: 10,
  },
  TxtBold: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },
  TxtDesc: {
    fontSize: 18,
    margin: 15,
    textAlign: "center",
  },
});
