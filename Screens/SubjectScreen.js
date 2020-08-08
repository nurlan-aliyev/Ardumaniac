import React from 'react'
import { View, SafeAreaView, Dimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    AdMobBanner,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';
import * as Updates from 'expo-updates';

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
    componentDidMount() {
        (async () => {
            try {
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                    this.setState({
                        display: true
                    })
                    await Updates.fetchUpdateAsync();
                    // ... notify user of update ...
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

    bannerError(e) {
        console.log('banner error: ');
        console.log(e);
    }
    bannerAdReceived = () => {
        console.log('banner ad received: ');
    }


    PartOne = () => {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={WhatsArduino} css={css} />
                {/*<View style={{ height: 'auto' }}>
                    <AdMobBanner
                        bannerSize="fullBanner"
                        adUnitID="ca-app-pub-4610355671419976/3223210009"
                        onDidFailToReceiveAdWithError={this.bannerError}
                        onAdViewDidReceiveAd={this.bannerAdReceived} />
        </View>*/}
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
                {/*<AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4610355671419976/7701694842"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />*/}
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
                {/*<AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4610355671419976/7701694842"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />*/}
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
                {/*<AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4610355671419976/7701694842"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />*/}
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
                {/*<AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4610355671419976/7701694842"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />*/}
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
                {/*<AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4610355671419976/7701694842"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />*/}
            </SafeAreaView>
        )
    }
    PartThirteen = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Markdown markdown={NecessaryFunctions} css={css} />
                {/*<AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4610355671419976/7701694842"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />*/}
            </SafeAreaView>
        )
    }

    render() {
        return (
            <Drawer.Navigator
                initialRouteName="PartOne"
                drawerPosition='right'
            >
                <Drawer.Screen name='Arduino nədir və hardan gəldi?' component={this.PartOne} />
                <Drawer.Screen name='Mikrokontrollerlər haqqında' component={this.PartTwo} />
                <Drawer.Screen name='Arduinonun qoşulması' component={this.PartThree} />
                <Drawer.Screen name='Arduino IDE-nin endirilməsi' component={this.PartFour} />
                <Drawer.Screen name='Proqramlaşdırma: Struktur' component={this.PartFive} />
                <Drawer.Screen name='Dəyişənlər' component={this.PartSix} />
                <Drawer.Screen name='Verilənlərin növləri' component={this.PartSeven} />
                <Drawer.Screen name='Operatorlar' component={this.PartEight} />
                <Drawer.Screen name='Sabitlər' component={this.PartNine} />
                <Drawer.Screen name='Dövr və şərt blokları' component={this.PartTen} />
                <Drawer.Screen name='Rəqəmsal giriş/çıxış' component={this.PartEleven} />
                <Drawer.Screen name='Analoq giriş/çıxış' component={this.PartTwelve} />
                <Drawer.Screen name='Bəzi lazımi funksiyalar' component={this.PartThirteen} />
            </Drawer.Navigator>
        )
    }
}

