import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
export default function HomeScreen(){
return(
    <View style={styles.container}>
      <Text>This is the user Profile</Text>
      
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
