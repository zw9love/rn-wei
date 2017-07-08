/**
 * Created by Administrator on 2017/3/23.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert,
    TouchableOpacity,
    Navigator,
    ToastAndroid,
    BackAndroid,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import Show from './Show'

// let {width,height} = Dimensions.get('window');

export default React.createClass({
    componentWillMount(){
        //这里判不判断都行
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    },
    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    },
    onBackAndroid(){
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        let nav= this.state.nav;
        //alert(nav)
        if(!nav){
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }else {
            let length = nav.getCurrentRoutes().length;
            if (length > 1) {
                //alert(length)
                nav.pop();
                //return true;
            } else {
                // if(routes.length >= 1){
                //     this.props.navigator.pop();
                // }else {
                this.lastBackPressed = Date.now();
                ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
                // }
            }
            return true;
        }
    },
    getInitialState(){
        return{
            selectedTab:'index',
            nav:this.props.navigator
        }
    },
    // changeNav(name){
    //     this.setState({nav:name});
    // },
    renderTabNav(data){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === data.tabName}
                title={data.title}
                renderIcon={() => <Image source={data.iconUri} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={data.selectedIconUri} style={styles.iconStyle}/>}
                //badgeText={data.badge}
                tabStyle={styles.tabStyle}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderBadge={()=>this.renderBadge(data.badge)}
                onPress={() => this.setState({ selectedTab: data.tabName })}>
                <Navigator
                    initialRoute={{name: data.routeName, component: data.routeComponent}}
                    renderScene={(route, navigator) =>{
                                let Component =  route.component;
                                return <Component {...route.passProps}
                                navigator={this.props.navigator}
                                //changeNav={this.changeNav}
                                />
                            }}
                    //configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
                />
            </TabNavigator.Item>
        )
    },
    renderBadge(badge){
        if(!badge) return;
        return(
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeContainerTxt}>{badge}</Text>
            </View>
        )
    },
    render(){
        return(
                <TabNavigator
                    style={styles.container}
                    hidesTabTouch={true}
                >
                    {this.renderTabNav
                        ({
                            tabName:'index',
                            title:'首页',
                            iconUri:require('../assets/img/icon_tabbar_homepage.png'),
                            selectedIconUri:require('../assets/img/icon_tabbar_homepage_selected.png'),
                            routeName:'index',
                            routeComponent:Child1
                        })
                    }
                    {this.renderTabNav
                    ({
                        tabName:'store',
                        title:'商家',
                        iconUri:require('../assets/img/icon_tabbar_merchant_normal.png'),
                        selectedIconUri:require('../assets/img/icon_tabbar_merchant_selected.png'),
                        routeName:'store',
                        routeComponent:Child2
                    })
                    }
                    {this.renderTabNav
                    ({
                        tabName:'mine',
                        title:'我的',
                        iconUri:require('../assets/img/icon_tabbar_mine.png'),
                        selectedIconUri:require('../assets/img/icon_tabbar_mine_selected.png'),
                        routeName:'mine',
                        routeComponent:Child3,
                        badge:99
                    })
                    }
                    {this.renderTabNav
                    ({
                        tabName:'more',
                        title:'更多',
                        iconUri:require('../assets/img/icon_tabbar_misc.png'),
                        selectedIconUri:require('../assets/img/icon_tabbar_misc_selected.png'),
                        routeName:'more',
                        routeComponent:Child4
                    })
                    }
                </TabNavigator>
        )
    }
})

const styles = StyleSheet.create({
    container:{

    },
    iconStyle:{
        width:26,
        height:26,
        borderRadius:13,
    },
    tabText:{
        color:'#333'
    },
    selectedTabText:{
        color:'#FF6100'
    },
    tabStyle:{
        //backgroundColor:'rgba(0,0,0,0)'
    },
    badgeContainer:{
        width:12,
        height:12,
        borderRadius:6,
        backgroundColor:'#FF6100',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        right:-2,
        top:-2
    },
    badgeContainerTxt:{
        color:'#fff',
        fontSize:8
    },
})