import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  FlatListExample,
  ScrollViewExample,
  StyleExample,
  ViewAndTextExample
} from "./screens/1 - basic components"
import {
  ButtonsAndTouchablesExample,
  DeviceStorageExample,
  ImagesAndIconsExample,
  InputExample
} from "./screens/2 - Input and storage"
import {
  MapViewExample, MarkersExample
} from './screens/3 - Location'
import {
  NavigationExample
} from "./screens/4 - BasicNavigation"

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    // <MarkersExample
    // <NavigationExample />
    // <ImagesAndIconsExample />
    // <MapViewExample />
    // <MarkersExample />
    <NavigationExample />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
