/**
 * Created by Administrator on 2017/3/23.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import ShowList from './ShowList'
import Effect from '../components/Effect'
import AboutStrong from './AboutStrong'
import CameraDemo from './CameraDemo'
import Suggest from './Suggest'
import InviteFriends from './InviteFriends'
import PayHelp from './PayHelp'
import Questionnaire from './Questionnaire'
import Network from './Network'
import Message from './Message'

export default React.createClass({
    render(){
        return(
        <TouchableOpacity activeOpacity={1} style={styles.container}>
            {/*StatusBar组件*/}
            <StatusBar
                animated={true}
                hidden={false}
                backgroundColor='#FF6100'
                translucent={true}
                //barStyle='light-content'
                showHideTransition={'fade'}
                //networkActivityIndicatorVisible={true}
            />
            <View style={styles.shadow}></View>
            {/*导航头*/}
            <View style={styles.header}>
                <Text style={styles.headerTxt}>更多</Text>
                <Image source={require('../assets/img/icon_homepage_message.png')} style={styles.headerImg}></Image>
            </View>
            <ScrollView>
                {/*横条组件组成的主要内容*/}
                <View style={styles.main}>
                    <Effect data={{title:'扫一扫',goComponent:CameraDemo}} navigator={this.props.navigator}/>
                </View>
                <View style={styles.main}>
                    <Effect data={{title:'省流量模式',switch:true}}/>
                    <Effect data={{title:'消息提醒',goComponent:Message}} navigator={this.props.navigator}/>
                    <Effect data={{title:'邀请好友',goComponent:InviteFriends}} navigator={this.props.navigator}/>
                    <Effect data={{title:'清空缓存',text:'1.94M'}}/>
                    <Effect data={{title:'省流量模式详情'}}/>
                </View>
                <View style={styles.main}>
                    <Effect data={{title:'意见反馈',goComponent:Suggest}} navigator={this.props.navigator}/>
                    <Effect data={{title:'问卷调查',goComponent:Questionnaire}} navigator={this.props.navigator}/>
                    <Effect data={{title:'支付帮助',goComponent:PayHelp}} navigator={this.props.navigator}/>
                    <Effect data={{title:'网络诊断',goComponent:Network}} navigator={this.props.navigator}/>
                    <Effect data={{title:'关于威哥',goComponent:AboutStrong}} navigator={this.props.navigator}/>
                </View>
            </ScrollView>
        </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'#e8e8e8',
    },
    shadow:{
        backgroundColor: '#FF6100',
        height:StatusBar.currentHeight
    },
    header:{
        height:60,
        backgroundColor:'#FF6100',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    headerImg:{
        height:24,
        width:24,
        position:'absolute',
        right:10,
        top:18
    },
    headerTxt:{
        fontSize:20,
        color:'#fff'
    },
    main:{
        marginTop:20
    }
});