/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import FirstCome from './src/pages/FirstCome'
import TabNav from './src/pages/TabNav'

/*
 <Navigator
 initialRoute={{name: 'firstcome', component: FirstCome}}
 renderScene={(route, navigator) =>{
 let Component =  route.component;
 return <Component {...route.passProps} navigator={navigator}/>
 }}
 //configureScene={
 //                  (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom
 //            }
 />

 <Navigator
 initialRoute={{name: 'firstcome', component: FirstCome}}
 renderScene={(route, navigator) =>{
 let Component =  route.component;
 return <Component {...route.passProps} navigator={navigator}/>
 }}
 //configureScene={
 //                  (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom
 //            }
 />

*/


export default class wei extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{name: 'firstcome', component: FirstCome}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }}
                //configureScene={
                //                  (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom
                //            }
            />
        )
    }

    componentWillMount() {
        // // 不是浏览器 不存在跨域问题 能拿到数据
        // fetch('http://m.69room.cn/app/home/index.jhtml')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    }
});

AppRegistry.registerComponent('wei', () => wei);
