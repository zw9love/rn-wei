/**
 * Created by zengwei on 2017/4/2.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

let {width,height} = Dimensions.get('window');

import Title from '../components/Title'

export default React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Title data={{name:'意见反馈'}} navigator={this.props.navigator}/>
                <View style={styles.suggestInfoWrap}>
                    <View style={styles.suggestInfo}>
                        <Text style={styles.suggestInfoTxt1}>亲爱的用户，你好。欢迎来到意见反馈中心。</Text>
                        <Text style={[styles.suggestInfoTxt1,{marginTop:10}]}>请问一下问题是你关心的吗：</Text>
                        {this.renderQuestion()}
                        <Text style={[styles.suggestInfoTxt1,{marginTop:10}]}>如果以上问题没有帮助到您，或者您对我们的客户端有任何优化建议，请在下方留言</Text>
                    </View>
                </View>
                <View style={styles.suggestBottomWrap}>
                    <View style={styles.suggestInputWrap}>
                        <TextInput
                            placeholder="请输入反馈意见"
                            placeholderTextColor="#d9d9d9"
                            clearButtonMode="always"
                            underlineColorAndroid="#ccc"
                        />
                    </View>
                    <TouchableOpacity style={styles.suggestBtnWrap}>
                        <Text style={{color:'#fff'}}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    renderQuestion(){
        let data=['支付成功显示未付款','已领取红包，没有看到抵用券','支付密码如何找回？','提示"账号存在安全风险/被锁定"怎么办？','积分会过期吗？','收不到取票码短信怎么办？'];
        let arr=[];
        data.map((msg,i)=>{
            arr.push(
                <Text key={i} style={styles.suggestInfoTxt2}>{msg}</Text>
            )
        })
        return arr;
    }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',
    },
    suggestInfoWrap:{
        flex:1,
        paddingLeft:10,
        paddingRight:10
    },
    suggestInfo:{
        width:'100%',
        borderWidth:1,
        borderColor:'#ccc',
        // height:100,
        backgroundColor:'#fff',
        marginTop:5,
        padding:10
    },
    suggestInfoTxt1:{
        fontSize:16,
        color:'#333'
    },
    suggestInfoTxt2:{
        fontSize:16,
        color:'#3283b8',
        textDecorationLine:'underline',
        marginTop:5
    },
    suggestBottomWrap:{
        width:width,
        height:60,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:5,
        paddingRight:5
    },
    suggestBtnWrap:{
        height:40,
        width:55,
        marginLeft:5,
        backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#d9d9d9',
        borderRadius:3
    },
    suggestInputWrap:{
        width:width-70,
        height:40,
        // backgroundColor:'skyblue'
    }
});
