/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import AppNavigator from './js/Navigator'
import { addNavigationHelpers } from "react-navigation";
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
}

const AppWithNavigationState = connect(mapStateToProps)(AppIndex);

const store = createStore();
export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
