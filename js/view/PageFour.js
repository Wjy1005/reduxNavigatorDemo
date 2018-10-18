/**
 * Created by git-wangjianying on 2018/1/2.
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation'
import PageTwo from './PageTwo'
import {bindActionCreators} from "redux";
import {addTodo, changeTodo} from "../redux/Action/MainAction";
import connect from "react-redux/es/connect/connect";

class Page extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._onPress}>点击返回第一页</Text>
                <Text onPress={this._onClick}>点击返回首页</Text>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.routes);
        console.log(NavigationActions);
        console.log(this.props.navigation);
    }

    _onPress = () => {
        const resetAction = this.props.navigation.reset(
            [
                NavigationActions.navigate({routeName: 'Tab', params: {token: '123456'}}),
                NavigationActions.navigate({routeName: 'Page', params: {token: '123456'}})
            ], 1
        );

        this.props.navigation.dispatch(resetAction);
    }

    _onClick = () => {
        const resetAction = this.props.navigation.reset(
            [
                NavigationActions.navigate({routeName: 'Tab', params: {token: '123456'}}),
            ], 0
        );

        this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Page;

