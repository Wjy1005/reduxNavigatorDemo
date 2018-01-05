/**
 * Created by git on 17/6/4.
 * 整个项目的路由
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Main from './view/Main'
import Deputy from './view/Deputy'
import Page from './view/Page'
import PageTwo from './view/PageTwo'
import PageThree from './view/PageThree'
import PageFour from './view/PageFour'

class setStackNavigator {

    static addData = (data, components)=> {
        let Item = {...data}
        for (let i = 0; i < components.length; i++) {
            let key = components[i].component;
            let title = components[i].title;
            let route = components[i].route;
            Item[key] = {
                screen: route,
                navigationOptions: {
                    title: title
                }
            }
        }
        return Item;
    }

    static set() {
        this.data = {
            Main: {
                screen: Main,
                //navigationOptions:null
            },
            Deputy: {
                screen: Deputy,
                //navigationOptions:null
            },
            Page: {
                screen: Page
            },
            PageTwo: {
                screen: PageTwo
            },
            PageThree: {
                screen: PageThree
            },
            PageFour: {
                screen: PageFour
            }
        }

        //this.data = this.addData(this.data, components)

        return this.data
    }
}

export default setStackNavigator