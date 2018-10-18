/**
 * Created by git-wangjianying on 2018/1/2.
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation'
import {addTodo, changeTodo} from '../redux/Action/MainAction'
import PageTwo from './PageTwo'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class user {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class Page extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.state.params.onRightButtonPress && navigation.state.params.onRightButtonPress()
                }}
                style={{marginRight: 10}}>
                <Text>右边按钮</Text>
            </TouchableOpacity>
        ),
        title: navigation.state.params.title || 'Page',
        headerStyle: navigation.state.params.headerStyle || {backgroundColor: 'green'}
    });

    render() {
        let admin = new user(1, 2);
        console.log(admin.toString());
        
        return (
            <View style={styles.container}>
                <Text onPress={this._onPress}>跳转到下一页</Text>
                <Text>{this.props.DeputyReducer.gogos.title}</Text>
                <TouchableOpacity onPress={this._onChange}>
                    <Text>点击修改值</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.routes)
    }

    _onPress = () => {
        this.props.navigation.navigate('PageTwo', {name: PageTwo});
    };

    _onChange = () => {
        this.props.changeTodo('Hello World!!')
    };

    onRightButtonPress = () => {
        console.log('page1  点击了右键');
        //在navigationOptions需先申明
        this.props.navigation.setParams({title: 'Lucy', headerStyle: {backgroundColor: 'blue'}});
        //获取params值
        let title = this.props.navigation.getParam('title');
        console.log(title);
    };

    componentWillMount() {
        //为右键添加事件
        this.props.navigation.setParams({
            onRightButtonPress: this.onRightButtonPress,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// export default Page;


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
)(Page);