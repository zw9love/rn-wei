/**
 * Created by Administrator on 2017/3/31.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Switch,
} from 'react-native';

const Dimensions = require('Dimensions');
let {width,height} = Dimensions.get('window');

import Title from '../components/Title'

export default React.createClass({
    render(){
        return(
        <View style={styles.container}>
            <Title data={{name:'关于威哥'}} navigator={this.props.navigator}/>
            <View style={styles.main}>
                <View style={styles.mainTop}>
                    <Image source={require('../assets/img/wei.png')} style={styles.logo}/>
                    <Text style={styles.logoInfo}>信威哥，得永生</Text>
                </View>
                <View style={styles.mainBottom}>
                    <TouchableOpacity style={styles.mainBottomWrap}>
                        <Text style={styles.mainBottomTxt}>用户协议</Text>
                        <Image source={require('../assets/img/icon_cell_rightarrow.png')} style={styles.arrowImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainBottomWrap}>
                        <Text style={styles.mainBottomTxt}>骚扰电话：18514075699</Text>
                        <Image source={require('../assets/img/icon_cell_rightarrow.png')} style={styles.arrowImg}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.myBottom}>
                    <Text style={styles.myBottomTxt1}>看到威哥一次打一次</Text>
                    <Text style={styles.myBottomTxt2}>heshetrends.com</Text>
                </View>
            </View>
        </View>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    main:{
        flex:1,
        backgroundColor:'#fff'
    },
    mainTop:{
        height:(height-60)/2,
        //backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:width/3,
        height:width/3,
        borderRadius:width/6
    },
    logoInfo:{
        fontSize:16,
        color:'#666',
        marginTop:10
    },
    mainBottom :{
        height:(height-60)/2,
        // backgroundColor:'yellow',
        paddingLeft:10,
        paddingRight:10,
    },
    mainBottomWrap:{
        height:40,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
        flexDirection:'row',
    },
    mainBottomTxt:{
        fontSize:16,
        color:'#666'
    },
    arrowImg:{
        width:8,
        height:13
    },
    myBottomTxt1:{
        fontSize:16,
        color:'#ccc'
    },
    myBottomTxt2:{
        fontSize:14,
        color:'#ccc',
        marginTop:5
    },
    myBottom:{
        position:'absolute',
        bottom:20,
        left:0,
        width:width,
        justifyContent: 'center',
        alignItems: 'center',
    }
})