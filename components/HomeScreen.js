import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  const handleFacebookLogin = () => {
    // Implement your Facebook login logic here
    // For example, you can use third-party libraries like react-native-fbsdk
  };

  const renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', height: 50 }}>
        <Text style={{
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 20,
        }}> Login</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ textAlign: 'center', maxWidth: 300 }}>
          Login with your Facebook account
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#4267B2',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={handleFacebookLogin}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
});
