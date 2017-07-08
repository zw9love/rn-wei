/**
 * Created by Administrator on 2017/3/29.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';

// let {width,height,scale} = Dimensions.get('window');

export default React.createClass({
    render(){
        let statuActive =  this.props.data.statuActive ? true : false;
        let headerBackground = this.props.data.backgroundStyle ? this.props.data.backgroundStyle : null;
        return(
            <View>
                {/*StatusBar组件*/}
                <StatusBar
                animated={false}
                hidden={statuActive}
                backgroundColor={'#FF6100'}
                translucent={true}
                //barStyle='light-content'
                showHideTransition={'fade'}
                //networkActivityIndicatorVisible={true}
                />
                {
                    this.props.data.statuActive ?  null : <View style={styles.shadow}></View>
                }
                <View style={[styles.header,headerBackground]}>
                    <TouchableOpacity style={styles.headerLeft} onPress={this.back}>
                        <Image source={require('../assets/img/navigationbar_arrow_up.png')} style={styles.headerBack}/>
                        <Text style={styles.headerLeftTxt}>{this.props.data.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{this.props.data.info}</Text>

                    <TouchableOpacity style={styles.headerEditWrap} onPress={this.props.data.myEdit}>
                        <Text style={styles.headerEditTxt}>{this.props.data.editInfo}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    },
    back(){
        this.props.navigator.pop();
    },
})


const styles = StyleSheet.create({
    shadow:{
        backgroundColor: '#FF6100',
        height:StatusBar.currentHeight
    },
    header:{
        height: 60,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6100',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    headerLeft:{
        height:60,
        flexDirection:'row',
        alignItems: 'center',
        position:'absolute',
        left:10,
    },
    headerBack:{
        width:10,
        height:20
    },
    headerLeftTxt:{
        color:'#fff',
        fontSize:18,
        marginLeft:15
    },
    headerTitle:{
        color:'#fff',
        fontSize:18
    },
    headerEditWrap:{
        height:60,
        justifyContent: 'center',
        position:'absolute',
        right:10
    },
    headerEditTxt:{
        color:'#fff',
        fontSize:18
    }
})