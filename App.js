import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Home from "../screens/Home";
import DailyPic from "../screens/DailyPic";
import SpaceCraft from "../screens/SpaceCraft";
import StarMap from "../screens/StarMap";


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        HeaderShown:false
      }
  
      }>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCraft}/>
        <Stack.Screen name="StarMap" component={StarMap}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

