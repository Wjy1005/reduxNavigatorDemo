/**
 * Created by git-wangjianying on 2018/1/2.
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation'
import PageTwo from './PageTwo'
class Page extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    static navigationOptions = ({ navigation, screenProps })=>({
        headerRight: (
            <TouchableOpacity
                onPress={()=>{navigation.state.params.onRightButtonPress && navigation.state.params.onRightButtonPress() } }
                style={{marginRight:10}}>
                <Text>右边按钮</Text>
            </TouchableOpacity>
        )
    })

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._onPress}>跳转到下一页</Text>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.routes)
    }

    _onPress = ()=> {
        this.props.navigation.navigate('PageTwo', {name: PageTwo});
    }

    onRightButtonPress = ()=>{
        console.log(this.props.navigation);
        console.log('page1  点击了右键');
    }
    componentWillMount() {
        console.log(this.props.navigation)
        //为右键添加事件
        this.props.navigation.setParams({
            onRightButtonPress:this.onRightButtonPress,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Page;