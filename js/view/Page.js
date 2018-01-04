/**
 * Created by git-wangjianying on 2018/1/2.
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation'

class Page extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._onPress}>点击返回首页</Text>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.routes)
    }

    _onPress = ()=> {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Main', params: { token: '123456' }})
            ]
        })

        this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Page;