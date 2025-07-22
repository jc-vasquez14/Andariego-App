import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Account = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://www.xtrafondos.com/wallpapers/paisaje-digital-en-atardecer-5846.jpg",
        }}
        style={styles.logo}
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        dignissimos saepe vero pariatur, quo aspernatur deleniti molestiae, a
        quia, debitis inventore. Nulla animi molestias non voluptate dolores
        unde cumque voluptas commodi ipsam sit sint aliquam, modi atque iste
        nam! Consequuntur perspiciatis omnis facilis fugiat nam in consequatur
        vel quo dolor.
      </Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  logo: {
    height: 250,
    width: 395,
  },
});
