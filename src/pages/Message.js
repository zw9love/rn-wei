/**
 * Created by zengwei on 2017/4/1.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    Dimensions
} from 'react-native';

let {width,height,scale} = Dimensions.get('window');

import Title from '../components/Title'

export default React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Title data={{name:'您的消息'}} navigator={this.props.navigator}/>
                <MessageCell />
            </View>
        )
    }
})

const MessageCell = React.createClass({
    render(){
        return(
            <View style={styles.messageWrap}>
                <Image source={require('../assets/img/collect.png')} style={styles.messageIcon}/>
                <View style={styles.messageInfoWrap}>
                    <View style={styles.messageInfoTopWrap}>
                        <Text style={styles.messageInfoTitle}>今日推荐</Text>
                        <Text style={styles.messageInfoTime}>今天08:08</Text>
                    </View>
                    <View style={styles.messageInfoBottomWrap}>
                        <Text style={styles.messageInfoMsg}>尊敬的用户：已经为您定制了今天的独享优惠，请勿向其他人泄露。</Text>
                    </View>
                </View>
            </View>
        )
    }
})

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eff0eb'
    },
    messageWrap:{
        height:90,
        backgroundColor:'#fff',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    messageIcon:{
        width:50,
        height:50,
        borderRadius:25
    },
    messageInfoWrap:{
        marginLeft:10,
        width:width-50-30,
        // backgroundColor:'yellow',
        height:'100%',
        justifyContent: 'center',
    },
    messageInfoTopWrap:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    messageInfoTitle:{
        color:'#333',
        fontSize:16
    },
    messageInfoTime:{
        color:'#ccc',
        fontSize:16
    },
    messageInfoMsg:{
        color:'#aaa',
        fontSize:16
    },
    messageInfoBottomWrap:{
        marginTop:5
    }
})
