/**
 * Created by zengwei on 2017/3/28.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

let {width,scale} = Dimensions.get('window');

import  Show from '../pages/Show'

export default React.createClass({
    render(){
        return(
            <View style={styles.bigContainer}>
                <TouchableOpacity style={styles.container} onPress={this.jumpShow}>
                    <View style={styles.leftWrap}>
                        <Image source={this.props.data.url} style={styles.image}/>
                    </View>
                    <View style={styles.middleWrap}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.info}>{this.props.data.info}</Text>
                        <Text style={styles.price}>￥{this.props.data.price}</Text>
                    </View>
                    <View style={styles.rightWrap}>
                        <Text style={styles.distance}>{this.props.data.distance}km</Text>
                        <TouchableOpacity style={styles.moneyWrap} onPress={this.jumpShow}>
                            <Text style={styles.money}>￥{this.props.data.money}抢</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    },
    jumpShow(){
        this.props.navigator.push({
            component:Show,
            passProps:this.props.data
        })
        //console.log(this.props.data);
    }
})

const styles = StyleSheet.create({
    bigContainer:{
        backgroundColor:'#e8e8e8',
    },
    container:{
        height:105,
        backgroundColor:'#fff',
        padding:10,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8'
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image:{
        width:90,
        height:85
    },
    middleWrap:{
        marginLeft:10,
        width:width-30-90,
        flexWrap:'wrap',
        // backgroundColor:'yellow'
    },
    title:{
        color:'#333',
        fontSize:14,
    },
    info:{
        marginTop:5,
        fontSize:12,
        //backgroundColor:'red'
    },
    price:{
        color:'#4ad2c4',
        fontSize:16,
        position:'absolute',
        left:0,
        bottom:0
    },
    rightWrap:{
        position:'absolute',
        right:10,
        top:10,
        justifyContent:'space-between',
        // backgroundColor:'yellow',
        height:85,
        alignItems: 'center',
    },
    moneyWrap:{
        width:75,
        height:24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ff9e05',
        borderRadius:10
    },
    money:{
        color:'#fff',
    }
})
