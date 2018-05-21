/**
 * Created by zengwei on 2017/3/27.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');

import Show from '../pages/Show'

export default React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.jump}>
                <View style={styles.container}>
                    <View style={styles.leftWrap}>
                        <Image source={this.props.data.url} style={styles.image}/>
                        {
                            this.props.data.needOrder ? null :
                                <Image source={require('../assets/img/icon_deal_nobooking.png')} style={[styles.image, {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: 60,
                                    height: 37
                                }]}/>
                        }
                    </View>
                    <View style={styles.middleWrap}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.info}>{this.props.data.info}</Text>
                        <Text style={styles.price}>￥{this.props.data.price}</Text>
                    </View>
                    <Text style={styles.index}>>{this.props.data.index}</Text>
                    <Text style={styles.sellNum}>已售{this.props.data.sellNum}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    jump() {
        // if(this.props.changeNav){
        //     this.props.changeNav(this.props.navigator);
        // }
        this.props.navigator.push({
            component: Show,
            // passProps:{}  //传递过去的参数
            passProps: this.props.data
        })
    }
})

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1
    },
    leftWrap: {},
    image: {
        width: 95,
        height: 80,
        borderRadius: 6
    },
    middleWrap: {
        marginLeft: 10,
        height: 80
    },
    title: {
        fontSize: 16,
        color: '#333'
    },
    info: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 3
    },
    price: {
        fontSize: 16,
        color: '#FD4B1F',
        marginTop: 3
    },
    index: {
        color: '#aaa',
        fontSize: 14,
        position: 'absolute',
        top: 10,
        right: 20
    },
    sellNum: {
        color: '#666',
        fontSize: 14,
        position: 'absolute',
        bottom: 20,
        right: 20
    },
})
