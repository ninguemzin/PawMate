import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Card from "./src/components/PawCard";
import users from "./assets/data/users";
import Login from "./src/components/Login";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const App = () => {
  const sharedValue = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: sharedValue.value * 500 - 250,
      },
    ]
  }));
  return (
    <View style={styles.pageContainer}>
      <Animated.View style={[styles.AnimatedCard, cardStyle]}>
        <Card user={users[1]} />
      </Animated.View>
      <Pressable onPress={() => (sharedValue.value = withSpring(Math.random()))}>
        <Text>Change value</Text>
      </Pressable>
      {/* <Login/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animatedCard: {
    width: "100%", 
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
