import React from 'react'
import { View, Text, ScrollView, Image, Dimensions, SafeAreaView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Markdown from 'react-native-showdown';

import WhatsArduino from './WhatsArduino.js'
import Microcontrollers from './Microcontrollers.js'
import ArduinoIDE from './ArduinoIDE.js'
import ArduinoConnect from './ArduinoConnect.js'

import Structure from './Structure.js'
import Variables from './Variables.js'
import Datatypes from './Datatypes.js'
import Operators from './Operators.js'
import Constants from './Constants.js'
import Flowchart from './Flowchart.js'
import DigitalIO from './Digitalio.js'
import AnalogIO from './Analogio.js'
import NecessaryFunctions from './NecessaryFunctions.js'

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const css = `
    h1{margin-left: 5px; margin-bottom: 0px;}
    p{margin-top: 3px; font-size: 16px;}
    code { background-color: #eee; border: none; display: block; padding: 5px;}
    pre {word-wrap: break-word; overflow-x: auto; white-space: pre-wrap;}
    .one-line{display: inline; background-color: #eee; border: none; font-size: 14px; padding: 0px; color: #000;}
    table {border-collapse: collapse; margin-left: 3px; background-color: whitesmoke; color: #111}
    table, th, td {border: 2px solid #666;}
    th, td {padding: 6px;}
    td:nth-child(1){background-color: #d0d0d0;}
    td:nth-child(2){background-color: #d0d0d0;}
    u{color: blue;}
    .note{color: #d12c3f;}
    `;


//ca-app-pub-4610355671419976~1327858183
//ca-app-pub-4610355671419976/7701694842
const PartOne = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={WhatsArduino} css={css} />
        </SafeAreaView>
    )
}
const PartTwo = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Microcontrollers} css={css} />
        </SafeAreaView>
    )
}

const PartThree = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={ArduinoConnect} css={css} />
        </SafeAreaView>
    )
}
const PartFour = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={ArduinoIDE} css={css} />
        </SafeAreaView>
    )
}

const PartFive = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Structure} css={css} />
        </SafeAreaView>
    )
}
const PartSix = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Variables} css={css} />
        </SafeAreaView>
    )
}
const PartSeven = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Datatypes} css={css} />
        </SafeAreaView>
    )
}
const PartEight = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Operators} css={css} />
        </SafeAreaView>
    )
}
const PartNine = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Constants} css={css} />
        </SafeAreaView>
    )
}
const PartTen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={Flowchart} css={css} />
        </SafeAreaView>
    )
}
const PartEleven = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={DigitalIO} css={css} />
        </SafeAreaView>
    )
}
const PartTwelve = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={AnalogIO} css={css} />
        </SafeAreaView>
    )
}
const PartThirteen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Markdown markdown={NecessaryFunctions} css={css} />
        </SafeAreaView>
    )
}


const Drawer = createDrawerNavigator()

export default class SubjectScreen extends React.Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="PartOne"
                drawerPosition='right'
            >
                <Drawer.Screen name='Arduino nədir və hardan gəldi?' component={PartOne} />
                <Drawer.Screen name='Mikrokontrollerlər haqqında' component={PartTwo} />
                <Drawer.Screen name='Arduinonun qoşulması' component={PartThree} />
                <Drawer.Screen name='Arduino IDE-nin endirilməsi' component={PartFour} />
                <Drawer.Screen name='Proqramlaşdırma: Struktur' component={PartFive} />
                <Drawer.Screen name='Dəyişənlər' component={PartSix} />
                <Drawer.Screen name='Verilənlərin növləri' component={PartSeven} />
                <Drawer.Screen name='Operatorlar' component={PartEight} />
                <Drawer.Screen name='Sabitlər' component={PartNine} />
                <Drawer.Screen name='Dövr və şərt blokları' component={PartTen} />
                <Drawer.Screen name='Rəqəmsal giriş/çıxış' component={PartEleven} />
                <Drawer.Screen name='Analoq giriş/çıxış' component={PartTwelve} />
                <Drawer.Screen name='Bəzi lazımi funksiyalar' component={PartThirteen} />
            </Drawer.Navigator>
        )
    }
}


