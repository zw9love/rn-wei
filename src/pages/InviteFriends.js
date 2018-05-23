/**
 * Created by zengwei on 2017/4/2.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ListView,
    Image
} from 'react-native';

let {width, height} = Dimensions.get('window');

import Title from '../components/Title'

export default React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Title data={{name: '邀请好友使用威哥电商平台'}} navigator={this.props.navigator}/>
                <View style={styles.listViewWrap}>
                    {this.renderRow()}
                </View>
                {/*<ListView*/}
                {/*dataSource={this.state.dataSource}*/}
                {/*renderRow={this.renderRow}*/}
                {/*contentContainerStyle={styles.listViewWrap}*/}
                {/*/>*/}
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={{color: '#999'}}>邀请好友扫描二维码使用威哥电商平台</Text>
                    <Image source={require('../assets/img/logoerweima.png')}
                           style={{width: 140, height: 140, marginTop: 10}}/>
                </View>
            </View>
        )
    },
    getInitialState() {
        // let ds=new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        // let Data = [
        //     {src:require('../../assets/img/share_wechat.png'),name:'微信好友'},
        //     {src:require('../../assets/img/share_wechatfriend.png'),name:'微信朋友圈'},
        //     {src:require('../../assets/img/share_weibo.png'),name:'新浪微博'},
        //     {src:require('../../assets/img/share_qq.png'),name:'QQ'},
        //     {src:require('../../assets/img/share_zone.png'),name:'QQ空间'},
        //     {src:require('../../assets/img/share_more.png'),name:'更多'},
        // ];
        return {
            // dataSource:ds.cloneWithRows(Data),
            data: [
                {src: require('../assets/img/share_wechat.png'), name: '微信好友'},
                {src: require('../assets/img/share_wechatfriend.png'), name: '微信朋友圈'},
                {src: require('../assets/img/share_weibo.png'), name: '新浪微博'},
                {src: require('../assets/img/share_qq.png'), name: 'QQ'},
                {src: require('../assets/img/share_zone.png'), name: 'QQ空间'},
                {src: require('../assets/img/share_more.png'), name: '更多'},
            ]
        }
    },
    renderRow() {
        let data = this.state.data;
        let arr = [];
        data.map((msg, i) => {
            arr.push(
                <TouchableOpacity key={i} style={styles.wrapper}>
                    <Image source={msg.src} style={styles.imgStyle}/>
                    <Text style={styles.textStyle}>{msg.name}</Text>
                </TouchableOpacity>
            )
        })
        return arr;
    }
});

let imgWidth = 60
let margin = Math.floor((width - imgWidth  * 3) / 6);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3eff0',
        // alignItems: 'center',
    },
    listViewWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        // backgroundColor:'yellow'
    },
    wrapper: {
        alignItems: 'center',
        marginTop: 20,
        marginLeft: margin,
        marginRight: margin
    },
    imgStyle: {
        width: imgWidth,
        height: imgWidth
    },
    textStyle: {
        color: '#666',
        marginTop: 10,
        fontSize: 12
    }
})
