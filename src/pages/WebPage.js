/**
 * Created by zengwei on 2017/4/1.
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
} from 'react-native';

const Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

import Title from '../components/Title'

export default React.createClass({
    render(){
        let special = this.state.refreshSuccess ? {opacity:1} : {opacity:0};
        return(
            <View style={styles.container}>
                <Title navigator={this.props.navigator} data={{name:this.props.title}}/>
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
            url:this.props.url,
            refreshComplete:false,
            refreshError:false,
            refreshSuccess:true,
            refreshMsg:'正在刷新，请等待'
        }
    },
    myRefresh(){
        this.setState({refreshSuccess:true});
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'#fff',
    },
    refreshWrap:{
        flex: 1,
        // width:width,
        //height:(height-60-StatusBar.currentHeight),
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    refreshImage:{
        height:(height-60-StatusBar.currentHeight),
        //resizeMode:Image.resizeMode.stretch,
        width:width,
        // height:height-120,
    },
    refreshTxtWrap:{
        // flex: 1,
        width:width,
        height:(height-60-StatusBar.currentHeight),
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
