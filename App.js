/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {BackHandler, ToastAndroid, Platform} from 'react-native'
import { Provider, connect } from 'react-redux'
import AppNavigator from './js/Navigator'
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import createStore from './js/redux/store/createStore'

const mapStateToProps = (state) => ({
    nav: state.nav
});

class AppIndex extends Component {
    render() {
        console.log(this.props);
        return (
            <AppNavigator
                //在此申明,后续页面中navigationOptions中可以引用到
                screenProps={{themeColor:'yellow'}}
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }

    //监听安卓物理后退键
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            let now = new Date().getTime();
            if (this.lastBackPressed && now - this.lastBackPressed < 2500) {
                return false;
            }
            this.lastBackPressed = now;
            ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
            return true;
        }
        console.log(this.props);
        dispatch(NavigationActions.back());

        return true;
    };
}

const AppWithNavigationState = connect(mapStateToProps)(AppIndex);

const store = createStore();
export default class App extends Component<{}> {
    render() {
        const prefix = Platform.OS == 'android' ? 'reduxNavigatorDemo://reduxNavigatorDemo/' : 'reduxNavigatorDemo://';

        return (
            <Provider store={store}>
                <AppWithNavigationState   uriPrefix={prefix}/>
            </Provider>
        );
    }
}
