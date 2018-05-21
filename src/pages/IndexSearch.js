/**
 * Created by zengwei on 2017/4/1.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    TextInput,
    Dimensions
} from 'react-native';
import style from "../assets/style/common";

let {width, height, scale} = Dimensions.get('window');

export default React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*StatusBar组件*/}
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'#FF6100'}
                    translucent={true}
                    //barStyle='light-content'
                    showHideTransition={'fade'}
                    //networkActivityIndicatorVisible={true}
                />
                <View style={styles.shadow}/>
                {/*搜索头*/}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerBackWrap} onPress={this.back}>
                        <Image source={require('../assets/img/navigationbar_arrow_up.png')} style={styles.backIcon}/>
                    </TouchableOpacity>
                    <View style={styles.headerInputWrap}>
                        <TextInput
                            style={styles.headerInput}
                            underlineColorAndroid='transparent'
                            placeholder='输入商家、种类、商圈'
                            placeholderTextColor="#ccc"
                            autoFocus={true}
                            clearButtonMode="always"
                        />
                    </View>
                    <TouchableOpacity style={styles.searchBtnWrap}>
                        <Text style={styles.searchBtn}>搜索</Text>
                    </TouchableOpacity>
                </View>
                {/*热门搜索块*/}
                <View style={styles.hotWrap}>
                    <Text style={styles.hotTxt}>热门搜索</Text>
                    <View style={styles.hotCellWrap}>
                        {this.renderHotSearchCell()}
                    </View>
                </View>
            </View>
        )
    },
    back() {
        this.props.navigator.pop();
    },
    renderHotSearchCell() {
        let data = ['自助', '代金券', '休闲娱乐', '电影', '旅游', '酒店', '运动健身', 'KTV', '丽人'];
        let arr = [];
        data.map((msg, i) => {
            arr.push(<HotSearchCell key={i} name={msg}/>)
        })
        return arr;
    }
})

const HotSearchCell = React.createClass({
    render() {
        return (
            <TouchableOpacity style={styles.SearchCellWrap}>
                <Text style={styles.SearchCellTxt}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    shadow: {
        backgroundColor: '#FF6100',
        height: StatusBar.currentHeight
    },
    header: {
        flexDirection: 'row',
        height: 60 + style.marginTop,
        alignItems: 'center',
        backgroundColor: '#FF6100',
        paddingTop: style.marginTop
    },
    headerInputWrap: {
        height: 30,
        width: width - 97,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff',
        // borderRadius: 15
    },
    headerInput: {
        height: 60,
        // width: width - 127,
        fontSize: 14,
        // backgroundColor:'yellow'
        //marginLeft:10
        paddingLeft: 15,
        // paddingRight: 15,
        flex:1,
        paddingVertical: 0,
        width: '100%'
    },
    headerBackWrap: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    backIcon: {
        width: 7,
        height: 13
    },
    searchBtnWrap: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'green',
        position: 'absolute',
        height: 60,
        right: 0,
        top: style.marginTop
    },
    searchBtn: {
        fontSize: 14,
        color: '#fff'
    },
    hotWrap: {
        backgroundColor: 'rgba(255,97,0,0.8)',
        // backgroundColor: 'red',
        width: width,
        height: (height - 60 - StatusBar.currentHeight),
        paddingBottom: style.marginTop
    },
    hotTxt: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 15,
        marginTop: 15
    },
    hotCellWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    SearchCellWrap: {
        height: 30,
        width: (width - 60) / 3,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 3,
        marginTop: 15
    },
    SearchCellTxt: {
        color: '#333',
        fontSize: 14,
    }
})
