import React from 'react'
import { SafeAreaView, Dimensions, Platform, View, ToastAndroid } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    AdMobBanner,
} from "expo-ads-admob"
import * as Updates from 'expo-updates';

import Markdown from 'react-native-showdown';

import { WhatsArduinoEN } from './WhatsArduino.js'
import { MicrocontrollersEN } from './Microcontrollers.js'
import { ArduinoIDEEN } from './ArduinoIDE.js'
import { ArduinoConnectEN } from './ArduinoConnect.js'
import { StructureEN } from './Structure.js'
import { VariablesEN } from './Variables.js'
import { DatatypesEN } from './Datatypes.js'
import { OperatorsEN } from './Operators.js'
import { ConstantsEN } from './Constants.js'
import { FlowchartEN } from './Flowchart.js'
import { DigitalIOEN } from './Digitalio.js'
import { AnalogIOEN } from './Analogio.js'
import { NecessaryFunctionsEN } from './NecessaryFunctions.js'

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


export default class SubjectScreenEN extends React.Component {

    state = {
        adAvailable: true
    }

    adStateToggler = () => {
        this.setState(prevState => ({
            adAvailable: prevState.adAvailable === true ? false : true
        }))
    }

    showToast = () => {
        ToastAndroid.show("App is being updated!", ToastAndroid.SHORT);
    }

    componentDidMount() {
        (async () => {
            try {
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                    await Updates.fetchUpdateAsync();
                    // ... notify user of update ...
                    this.showToast();
                    await Updates.reloadAsync();
                }
            } catch (e) {
                // handle or log error
                console.log(e)

            }
        })();
    }

    initAds = async () => {
        await setTestDeviceIDAsync('EMULATOR');
    }

    bannerError = (e) => {
        this.adStateToggler()
        console.log('banner error: ');
        console.log(e);
    }
    bannerAdReceived = () => {
        this.adStateToggler()
        console.log('banner ad received: ');
    }



    PartOne = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={WhatsArduinoEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}
            </SafeAreaView>
        )
    }

    PartTwo = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={MicrocontrollersEN} css={css} />
            </SafeAreaView>
        )
    }

    PartThree = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={ArduinoConnectEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}

            </SafeAreaView>
        )
    }
    PartFour = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={ArduinoIDEEN} css={css} />
            </SafeAreaView>
        )
    }

    PartFive = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={StructureEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}
            </SafeAreaView>
        )
    }
    PartSix = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={VariablesEN} css={css} />
            </SafeAreaView>
        )
    }
    PartSeven = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={DatatypesEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}
            </SafeAreaView>
        )
    }
    PartEight = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={OperatorsEN} css={css} />
            </SafeAreaView>
        )
    }
    PartNine = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={ConstantsEN} css={css} />
            </SafeAreaView>
        )
    }
    PartTen = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={FlowchartEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}
            </SafeAreaView>
        )
    }
    PartEleven = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={DigitalIOEN} css={css} />
            </SafeAreaView>
        )
    }
    PartTwelve = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={AnalogIOEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}
            </SafeAreaView>
        )
    }
    PartThirteen = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={NecessaryFunctionsEN} css={css} />
                {Platform.OS === 'android' ?
                    (
                        <View>
                            <AdMobBanner
                                bannerSize="fullBanner"
                                adUnitID="ca-app-pub-1789969122261375/8286074232"
                                onDidFailToReceiveAdWithError={this.bannerError}
                                onAdViewDidReceiveAd={this.bannerAdReceived} />
                        </View>
                    ) : null}
            </SafeAreaView>
        )
    }

    render() {
        return (
            <Drawer.Navigator
                initialRouteName="PartOne"
                drawerPosition='right'
            >
                <Drawer.Screen name='What is Arduino?' component={this.PartOne} />
                <Drawer.Screen name='About Microcontrollers' component={this.PartTwo} />
                <Drawer.Screen name='Connecting Arduino' component={this.PartThree} />
                <Drawer.Screen name='Downloading Arduino IDE' component={this.PartFour} />
                <Drawer.Screen name='Programming: Structure' component={this.PartFive} />
                <Drawer.Screen name='Variables' component={this.PartSix} />
                <Drawer.Screen name='Datatypes' component={this.PartSeven} />
                <Drawer.Screen name='Operators' component={this.PartEight} />
                <Drawer.Screen name='Constants' component={this.PartNine} />
                <Drawer.Screen name='Flow chart' component={this.PartTen} />
                <Drawer.Screen name='Digital I/O' component={this.PartEleven} />
                <Drawer.Screen name='Analog I/O' component={this.PartTwelve} />
                <Drawer.Screen name='Some necessary functions' component={this.PartThirteen} />
            </Drawer.Navigator>
        )
    }
}

