/**
 * Created by git-wangjianying on 2018/1/2.
 * @flow
 */

'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation'
import PageFour from './PageFour'

class Page extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

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
        this.props.navigation.navigate('PageFour',{name:PageFour});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Page;