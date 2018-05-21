/**
 * Created by zengwei on 2017/3/27.
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

let {width} = Dimensions.get('window');

export default React.createClass({
    render(){
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.leftWrap}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.info}>{this.props.data.info}</Text>
                        <Image source={require('../assets/img/icon_hot.png')} style={styles.hotStyle} />
                    </View>
                    <View style={styles.rightWrap}>
                        <Image source={this.props.data.url} style={styles.imgStyle} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        width:(width-15)/2,
        height:90,
        backgroundColor:'#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        paddingLeft:5,
        paddingRight:5
    },
    hotStyle:{
        width:42,
        height:21,
        marginTop:5
    },
    leftWrap:{
        width:'50%'
    },
    title:{
        fontSize:12,
        color:'#333'
    },
    info:{
        fontSize:10,
        color:'#aaa'
    },
    rightWrap:{
        width:'50%'
    },
    imgStyle:{
        width:'100%',
        height:65
    }
})
