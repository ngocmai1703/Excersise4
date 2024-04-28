import * as React from "react";
import { Appbar, Button } from "react-native-paper";
import {
  SafeAreaView,
  Text,
  SafeAreaProvider,
  View,
  StyleSheet,
} from "react-native";

const Details = () => (
  <View style={styles.container}>
    <Text style={styles.Text}>Doan Thi Ngoc Mai</Text>
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
export default Details;
