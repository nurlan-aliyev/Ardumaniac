import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";
import SubjectScreen from './Screens/SubjectScreen.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Subjects"
          component={SubjectScreen}
          options={({ navigation }) => ({
            headerTitle: "Mövzular",
            headerRight: () => (
              <TouchableOpacity
                style={{ padding: 20 }}
                activeOpacity={0.5}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              >
                <Text>{<Icon name='navicon' size={20} />}</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


