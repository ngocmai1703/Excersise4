import * as React from "react";
import { Appbar, Button } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  SafeAreaView,
  Text,
  SafeAreaProvider,
  View,
  StyleSheet,
  Alert,
} from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.Text}>Home Screen</Text>
    <Button
      icon="link"
      mode="contained"
      onPress={() => navigation.navigate("Details")}
    >
      Details Screen
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    marginBottom: 10,
  },
});
export default Home;
