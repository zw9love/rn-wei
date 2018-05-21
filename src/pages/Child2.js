/**
 * Created by zengwei on 2017/3/23.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    WebView,
    Image,
    StatusBar,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions
} from 'react-native';

let {width, height} = Dimensions.get('window');

import Message from './Message'
import style from "../assets/style/common";

export default React.createClass({
    render(){
        let special = this.state.refreshSuccess ? {opacity:1} : {opacity:0};
        return(
            <View style={styles.container}>
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
                <View style={styles.shadow} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.jumpMessage} style={styles.headerImgLeft}>
                        <Image source={require('../assets/img/icon_homepage_message.png')} style={styles.headerImg}/>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>商家</Text>
                    <TouchableOpacity style={styles.headerImgRight}>
                        <Image source={require('../assets/img/icon_homepage_search.png')} style={styles.headerImg} />
                    </TouchableOpacity>
                </View>
                {
                    this.state.refreshSuccess ? null :
                        (
                            <View style={styles.refreshWrap}>
                                <Image source={require('../assets/img/lufei.jpeg')} style={styles.refreshImage}/>
                                <View style={styles.refreshTxtWrap}>
                                    <Text style={styles.refreshTxt}>您的页面挂了，请检查网络和域名</Text>
                                    <TouchableOpacity onPress={this.myRefresh}>
                                        <Text style={styles.refreshBtn}>老哥点我重新加载</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                }
                {
                    this.state.refreshSuccess ?
                        <WebView
                            //ref={WEBVIEW_REF}
                            automaticallyAdjustContentInsets={false}
                            style={[styles.webView,special]}
                            source={{uri: this.state.url}}
                            bounces={true}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            decelerationRate="normal"
                            //onNavigationStateChange={this.onNavigationStateChange}
                            //onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                            startInLoadingState={true}
                            scalesPageToFit={this.state.scalesPageToFit}
                            renderLoading={()=>{
                        //不稳定renderLoading
                        return (
                            <View style={styles.refreshWrap}>
                                <Image source={require('../assets/img/lufei.jpeg')} style={styles.refreshImage}/>
                                <View style={styles.refreshTxtWrap}>
                                    <ActivityIndicator
                                        animating={true}
                                        style={styles.activityIndicator}
                                        size="large"
                                        color='#FF6100'
                                    />
                                    <Text style={styles.refreshTxt}>正在刷新，请等待</Text>
                                </View>
                            </View>
                        )
                    }}
                    renderError={()=>{
                        //自定义了一个渲染的错误的视图，不太好使
                        /*return(
                           <View style={styles.refreshWrap}>
                                <Image source={require('../../assets/img/lufei.jpeg')} style={styles.refreshImage}/>
                                <View style={styles.refreshTxtWrap}>
                                    <Text style={styles.refreshTxt}>您的页面挂了，请检查网络和域名</Text>
                                </View>
                           </View>
                        )*/
                    }}
                        onLoad={()=>{
                        //alert('加载成功');
                        /*this.setState({
                            refreshComplete:true,
                            refreshSuccess:true
                        })*/
                    }}
                        onError={(error)=>{
                        //console.log(error)
                        //alert('加载失败');
                        this.setState({
                            refreshSuccess:false,
                        })
                    }}
                        />
                        :null

                }

            </View>
        )
    },
    getInitialState(){
        return{
            url:'http://www.heshetrends.com/',
            refreshComplete:false,
            refreshError:false,
            refreshSuccess:true,
            refreshMsg:'正在刷新，请等待'
        }
    },
    myRefresh(){
        this.setState({refreshSuccess:true});
    },
    jumpMessage(){
        this.props.navigator.push({
            component:Message,
            // passProps:{}  //传递过去的参数
            //passProps:{setCity:this.setCity,setData:this.setData,tempData:this.state.tempData}
        })
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        //backgroundColor:'yellowgreen',
    },
    shadow:{
        backgroundColor: '#FF6100',
        height:StatusBar.currentHeight
    },
    header:{
        height:60 + style.marginTop,
        backgroundColor:'#FF6100',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: style.marginTop
    },
    headerImg:{
        width:24,
        height:24,
    },
    headerImgLeft:{
        left:10,
        position:'absolute',
        top:18 + style.marginTop
    },
    headerImgRight:{
        right:10,
        position:'absolute',
        top:18 + style.marginTop
    },
    headerTxt:{
        fontSize:20,
        color:'#fff'
    },
    refreshWrap:{
        // width:width,
        // height:height-120,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    refreshImage:{
        width:width,
        height:height-120,
    },
    refreshTxtWrap:{
        width:width,
        height:height-120,
        position:'absolute',
        left:0,
        top:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    refreshTxt:{
        color:'#FF6100',
        fontSize:16,
        marginTop:10
    },
    refreshBtn:{
        color:'#fff',
        fontSize:16,
        marginTop:10
    }
});
