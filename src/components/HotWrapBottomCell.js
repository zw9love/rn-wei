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
                    <View style={styles.topWrap}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.info}>{this.props.data.info}</Text>
                    </View>
                    <View style={styles.bottomWrap}>
                        <Image source={this.props.data.url} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        width:(width-25)/4,
        height:110,
        backgroundColor:'#F7F7F7',
    },
    topWrap:{
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:12,
        color:'#333'
    },
    info:{
        fontSize:10,
        color:'#aaa'
    },
    image:{
        width:'100%',
        height:45
    }
})
