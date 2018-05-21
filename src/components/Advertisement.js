/**
 * Created by zengwei on 2017/3/26.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import ShowList from '../pages/ShowList'

export default React.createClass({
    render(){
        let src = this.props.data.src || require('../assets/img/icon_defaultimage_shoppingmall_merchant.png');
        return(
        <TouchableOpacity onPress={this.go}>
            <View style={styles.container}>
                {/*左边的*/}
                <View style={styles.leftWrap}>
                    <Text style={[styles.title,this.props.data.style]}>{this.props.data.title}</Text>
                    <Text style={styles.info}>{this.props.data.info}</Text>
                </View>
                {/*右边的*/}
                <View style={styles.rightWrap}>
                    <Image source={src} style={styles.image}/>
                </View>
            </View>
        </TouchableOpacity>
        )
    },
    go(){
        //console.log(this.props.data);
        //this.props.changeNav(this.props.navigator);
        this.props.navigator.push({
            component:ShowList,
            // passProps:{}  //传递过去的参数
            passProps:this.props.data
        })
    }
})

const styles = StyleSheet.create({
    container:{
        height:60,
        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8'
    },
    leftWrap:{
        justifyContent: 'center',
        marginLeft:8
    },
    rightWrap:{
        justifyContent: 'center',
        marginRight:8
    },
    title:{
        fontSize:14,
    },
    info:{
        fontSize:12,
        color:'#666'
    },
    image:{
        width:60,
        height:35,
        resizeMode:Image.resizeMode.contain,
    }
})
