import React from 'react'
import { Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper'

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Drawer.Section>
                <Image style={{ width: 285, height: 190 }} source={require('../assets/drawerTop.png')} />
            </Drawer.Section>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}