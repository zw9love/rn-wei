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
} from 'react-native';

const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default React.createClass({
    render(){
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.imgWrap}>
                        <Image source={this.props.data.url} style={styles.imgStyle}/>
                        <Text style={styles.infoStyle}>{this.props.data.info}</Text>
                    </View>
                    <Text style={styles.nameStyle}>{this.props.data.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        width:width/3,
        height:120,
        // borderRightWidth:1,
        // borderRightColor:'#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor:'#fff',
    },
    imgWrap:{
        width:'100%',
    },
    imgStyle:{
        width:'100%',
        height:75,
        borderRadius:6
    },
    infoStyle:{
        position:'absolute',
        bottom:10,
        left:0,
        backgroundColor:'#FF6100',
        color:'#fff',
        fontSize:10,
        padding:2
    },
    nameStyle:{
        color:'#333',
        fontSize:12,
        marginTop:5
    }
})
