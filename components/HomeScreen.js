import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,FlatList } from 'react-native';
import React from 'react';
export default function HomeScreen(){
  const renderHeader=()=>{
<View style={{flexDirection:'row',height:50}}>

 
<Text style={{
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:20,}}> Please login with your credentials</Text>



</View>
  }
return(
    <SafeAreaView style={styles.container}>
       <View
      style={{
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'red'
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight:'bold',
          fontSize:20, // You can adjust this value to set the maximum width of the container
        }}
      >
        Please Login with your credentials
      </Text>
    </View>
   
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  shadow:{
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:3,
    },
    shadowOpacity:0.1,
    shadowRadius:3,
    elevation:1,
  }
});
