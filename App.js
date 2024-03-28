import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./src/components/PawCard";
import users from "./assets/data/users";
import Login from "./src/components/Login";

const App = () => {
  return (
    <View style={styles.pageContainer}>
      {/* <Card user={users[2]}  /> */}
      <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
