/**
 * Created by Administrator on 2017/3/29.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

let {width,height,scale} = Dimensions.get('window');

export default React.createClass({
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <Text style={styles.txt}>{this.props.info}</Text>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#FF6100',
        borderRadius:6,
        height:26,
        paddingLeft:10,
        paddingRight:10,
        marginRight:10,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    txt:{
        color:'#FF6100'
    }
});