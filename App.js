import Tab from "./navigation/Tabs";
import { Provider } from "react-redux";

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab />
      </NavigationContainer>
    </Provider>
  );
}