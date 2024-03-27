import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';

const App = () => {
  return (
  <View style={styles.pageContainer}>
    <View style={styles.card}>
      <ImageBackground
        source={{
         uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.bio}>
            loren kdsn kfwlfkmwe  kmwgkl mfwkfkf wkl wlefkwfmwelf
          </Text>
        </View>
      </ImageBackground>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: '95%',
    height: '78%',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 18,
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
    marginHorizontal: 10,
  },
});

export default App;