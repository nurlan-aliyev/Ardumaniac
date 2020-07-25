import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image
} from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";
import SubjectScreen from './Screens/SubjectScreen.js'


const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

// const WelcomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.welcomeScrn}>
//         <Image style={styles.logo} source={require('./assets/logo.png')} />
//         <View style={styles.btnContainer}>
//           <TouchableOpacity
//             style={styles.btnFrst}
//             activeOpacity={0.5}
//             onPress={() => navigation.navigate("Subjects")}
//           >
//             <Text style={styles.btnText}>
//               {<Icon name="folder" size={20} />}  Mövzular
//           </Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </View>
//   );
// };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingTop: StatusBar.currentHeight,
  },
  welcomeScrn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00979d',

  },
  contentsScrn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnFrst: {
    width: "90%",
    margin: 5,
    padding: 15,
    borderRadius: 7,
    backgroundColor: "#ea8e3e",
  },
  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
  btnContainer: {
    position: "absolute",
    bottom: 20,
    left: (screenWidth * 5) / 100,
    width: "100%",
  },
  logo: {
    position: 'absolute',
    top: screenWidth * 0.4
  },
});

