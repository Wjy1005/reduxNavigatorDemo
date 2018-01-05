/**
 * Created by git-wangjianying on 2017/12/29.
 * 导航配置
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {createStore, bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { addTodo, changeTodo } from './redux/Action/MainAction'
import {StackNavigator,TabNavigator,TabBarBottom, DrawerNavigator, addNavigationHelpers}from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/lib-rn/views/CardStack/CardStackStyleInterpolator';

import setStackNavigator from './NavigatorRoute'

import Main from './view/Main'
import Deputy from './view/Deputy'

class TabBarItem extends React.Component {
    render() {
        return (
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                   style={ { tintColor:this.props.tintColor,width:25,height:25 } }
            />
        )
    }
}

let items = [
    {
        component: '首页',
        text: '首页',
        screen: Main,
        normalImage: require('./img/main.png'),
        selectedImage: require('./img/main_select.png')
    },
    {
        component: '副页',
        text: '副页',
        screen: Deputy,
        normalImage: require('./img/project.png'),
        selectedImage: require('./img/project_select.png')
    }
];
let tabView = {};
items.map((item, index)=> {
    tabView[item.component] = {
        screen: item.screen,
        navigationOptions: ({navigation}) => ({
            title: item.text,
            tabBarIcon: ({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={item.normalImage}
                    selectedImage={item.selectedImage}
                />
            ),
            tabBarOnPress: (status)=> {
                console.log(status)
                console.log(navigation)
                navigation.navigate(status.scene.route.routeName, {name: status.scene.route.routeName})
            }
        })
    }
});
//底部tab
let Tab = TabNavigator(
    tabView,
    {
        //设置tab样式
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06c1ae',
            inactiveTintColor: '#979797',
            style: {backgroundColor: '#ffffff',},
            labelStyle: {
                fontSize: 14, // 文字大小
            },
        },

    }
);

let route = setStackNavigator.set();
let routes = {
    Tab: {
        screen: Tab,
        //设置tab页面的导航
        navigationOptions: ({ navigation,screenProps }) => ({
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#ddd'},
            headerLeft: null,
            headerTintColor: '#000'
            //header:null,
        })
    }, ...route
};

const Navigator = StackNavigator(
    routes,
    {
        //设置导航全局样式
        navigationOptions: ({ navigation,screenProps }) => (console.log('navigation', navigation), {
            //返回键文字
            headerBackTitle: null,
            //是否显示图标，默认关闭
            showIcon: true,
            //是否允许在标签之间进行滑动
            swipeEnabled: false,
            //是否在更改标签时显示动画
            animationEnabled: false,
            headerStyle: {backgroundColor: 'red'},
            //headerStyle: {backgroundColor:'red'},
            //后退键
            headerLeft: (
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{marginLeft:10}}>
                    <Image source={require('./img/icon_return_white.png')}/>
                </TouchableOpacity>
            ),
            //导航标题,如有是tab页则显示tab分页的标题
            title: navigation.state.routes ? navigation.state.routes[navigation.state.index].routeName : navigation.state.routeName,
            //文字样式
            //Android中headerTitleStyle默认为alignSelf:'flex-start'
            headerTitleStyle: {alignSelf: 'center'},
            headerTintColor: '#fff',
            //Android需要加上一個headerRight讓title居中
            headerRight: <View style={{ width: 24 }}/>
        }),
        //定义跳转风格
        //card：使用iOS和安卓默认的风格
        //modal：iOS独有的使屏幕从底部画出。类似iOS的present效果
        mode: 'card',
        //控制安卓切换页面动作,跟IOS保持一致
        transitionConfig: ()=>({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        })
        //导航切换事件
        //onNavigationStateChange: (event)=>{
        //    console.log(event)
        //},
    }
);

export default Navigator;