import React from 'react'
import { View, SafeAreaView, Dimensions, ToastAndroid } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent.js'
import * as Updates from 'expo-updates';

import { Icon } from 'react-native-elements'

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

const sHeight = Dimensions.get('window').height

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


const Drawer = createDrawerNavigator()


export default class SubjectScreen extends React.Component {

    showToast = () => {
        ToastAndroid.show('Proqram təminatı avtomatik olaraq yenilənir!', ToastAndroid.SHORT)
    }
    componentDidMount() {
        (async () => {
            try {
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                    await Updates.fetchUpdateAsync();
                    // ... notify user of update ...
                    this.showToast()
                    await Updates.reloadAsync();
                }
            } catch (e) {
                // handle or log error
                console.log(e)

            }
        })();
    }


    PartOne = () => {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={WhatsArduino} css={css} />
            </SafeAreaView>
        )
    }

    PartTwo = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Microcontrollers} css={css} />
            </SafeAreaView>
        )
    }

    PartThree = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={ArduinoConnect} css={css} />
            </SafeAreaView>
        )
    }
    PartFour = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={ArduinoIDE} css={css} />
            </SafeAreaView>
        )
    }

    PartFive = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Structure} css={css} />
            </SafeAreaView>
        )
    }
    PartSix = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Variables} css={css} />
            </SafeAreaView>
        )
    }
    PartSeven = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Datatypes} css={css} />
            </SafeAreaView>
        )
    }
    PartEight = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Operators} css={css} />
            </SafeAreaView>
        )
    }
    PartNine = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Constants} css={css} />
            </SafeAreaView>
        )
    }
    PartTen = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={Flowchart} css={css} />
            </SafeAreaView>
        )
    }
    PartEleven = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={DigitalIO} css={css} />
            </SafeAreaView>
        )
    }
    PartTwelve = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={AnalogIO} css={css} />
            </SafeAreaView>
        )
    }
    PartThirteen = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={NecessaryFunctions} css={css} />
            </SafeAreaView>
        )
    }

    render() {
        return (
            <Drawer.Navigator
                initialRouteName="PartOne"
                drawerPosition='right'
                drawerStyle={{
                    width: 285
                }}
                drawerContent={props => <DrawerContent {...props} />}
                drawerContentOptions={{
                    itemStyle: { marginHorizontal: 5 },
                    labelStyle: { margin: 0, paddingHorizontal: 0, position: 'relative', left: -25 }
                }}

            >
                <Drawer.Screen
                    name='Arduino nədir və hardan gəldi?'
                    component={this.PartOne}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="home"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Mikrokontrollerlər haqqında'
                    component={this.PartTwo}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="microchip"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Arduinonun qoşulması'
                    component={this.PartThree}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="desktop"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Arduino IDE-nin endirilməsi'
                    component={this.PartFour}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="file-download"
                                type='material-community'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Proqramlaşdırma: Struktur'
                    component={this.PartFive}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="code"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Dəyişənlər'
                    component={this.PartSix}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="variable"
                                type='material-community'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Verilənlərin növləri'
                    component={this.PartSeven}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="variable"
                                type='material-community'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Operatorlar'
                    component={this.PartEight}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="plus-minus"
                                type='material-community'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Sabitlər'
                    component={this.PartNine}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="code"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Dövr və şərt blokları'
                    component={this.PartTen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="code"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Rəqəmsal giriş/çıxış'
                    component={this.PartEleven}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="code"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Analoq giriş/çıxış'
                    component={this.PartTwelve}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="code"
                                type='font-awesome'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='Bəzi lazımi funksiyalar'
                    component={this.PartThirteen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon
                                size={20}
                                name="function"
                                type='material-community'
                                color={focused ? '#00979d' : 'gray'}
                            />
                        ),
                    }}
                />
            </Drawer.Navigator>
        )
    }
}

