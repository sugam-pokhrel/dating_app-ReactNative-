import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
export default function SettingScreen(){
return(
    <View style={styles.container}>
      <Text>This is the Settings Screen</Text>
      
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
