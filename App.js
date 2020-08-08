import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";
import SubjectScreen from './Screens/SubjectScreen.js'
import SubjectScreenEN from './Screens/SubjectScreenEN.js'

const Stack = createStackNavigator();



export default class App extends React.Component {
  state = {
    selectedLang: 'AZE'
  }

  toggleLanguage = () => {
    this.setState(prevState => ({
      selectedLang: prevState.selectedLang == 'AZE' ? 'ENG' : 'AZE'
    }))
  }

  render() {
    const { selectedLang } = this.state

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Subjects"
            component={selectedLang == 'ENG' ? SubjectScreenEN : SubjectScreen}
            options={({ navigation }) => (
              Platform.OS == 'android' ?
                {
                  headerTitle: selectedLang == 'ENG' ? "Subjects" : "Mövzular",
                  headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        style={{ padding: 20 }}
                        activeOpacity={0.5}
                        onPress={() => this.toggleLanguage()}>
                        <Text>
                          {<Icon name="language" size={20} />}{' '}
                          {this.state.selectedLang}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{ padding: 20 }}
                        activeOpacity={0.5}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                      >
                        <Text>{<Icon name='navicon' size={20} />}</Text>
                      </TouchableOpacity>
                    </View>
                  ),

                } : {
                  headerTitle: selectedLang == 'ENG' ? "Subjects" : "Mövzular",

                  headerLeft: () => (
                    <TouchableOpacity
                      style={{ paddingLeft: 15 }}
                      activeOpacity={0.5}
                      onPress={() => this.toggleLanguage()}>
                      <Text>
                        {<Icon name="language" size={20} />}{' '}
                        {this.state.selectedLang}
                      </Text>
                    </TouchableOpacity>
                  ),
                  headerRight: () => (
                    <TouchableOpacity
                      style={{ paddingRight: 20 }}
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
}


