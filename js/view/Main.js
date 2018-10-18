/**
 * Created by git-wangjianying on 2018/1/2.
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {addTodo, changeTodo} from '../redux/Action/MainAction'
import {createStore, bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Page from './Page'

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        // 这里面的属性和Navigator.js的navigationOptions是一样的
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.state.params.onRightButtonPress && navigation.state.params.onRightButtonPress()
                }}
                style={{marginRight: 10}}>
                <Text>右边按钮</Text>
            </TouchableOpacity>
        ),
        headerStyle: {backgroundColor: 'green'}
    })

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
                    <Text>点击下一页</Text>
                </TouchableOpacity>
                <Text>{this.props.DeputyReducer.gogos.title}</Text>
                <TouchableOpacity onPress={this._onChange}>
                    <Text>点击修改</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress = () => {
        this.props.navigation.navigate('Page', {name: Page})
    }

    componentDidMount() {
        console.log(this.props)
        this.props.addTodo('hello world!!')
    }

    componentWillMount() {
        //为右键添加事件
        this.props.navigation.setParams({
            onRightButtonPress: this.onRightButtonPress,
        })
    }

    _onChange = () => {
        this.props.changeTodo('Hello World!!')
    }

    onRightButtonPress = () => {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    console.log(state);
    return {
        DeputyReducer: state.DeputyReducer
    };
}

const mapActionToProps = (dispatch) => {
    return {
        addTodo: bindActionCreators(addTodo, dispatch),
        changeTodo: bindActionCreators(changeTodo, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapActionToProps
)(Main);