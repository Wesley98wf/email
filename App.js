import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./Pagina/Inicio";
import Email from "./Pagina/Email";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name="Email" component={Email} options= {{title : 'Email'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
