import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "../components/HomeScreen";
import UserPofile from "../components/UserPofile";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from "../components/SettingScreen";

const tabs=()=>{     
    return (
        <Tab.Navigator     screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Profile') {
               
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
        })}
        
        >
          <Tab.Screen  name="Home"   component={HomeScreen} />
          <Tab.Screen options={{ }} name="Settings" component={SettingsScreen} />
          <Tab.Screen options={{ }} name="Profile" component={UserPofile} />
        </Tab.Navigator>
      );
}
export default tabs;