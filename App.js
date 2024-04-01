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
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler, GestureHandlerRootView  } from 'react-native-gesture-handler'

const App = () => {
  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ]
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: _ => {
      console.warn('touch start')
    },
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      console.warn('touch ended')
    }
  })
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.AnimatedCard, cardStyle]}>
        <Card user={users[1]} />
      </Animated.View>
      </PanGestureHandler>
      {/* <Login/>*/}
    </View>
    </GestureHandlerRootView>
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
