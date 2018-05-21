/**
 * Created by zengwei on 2017/4/2.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    Easing,
    StatusBar
} from 'react-native';

let {width,height} = Dimensions.get('window');

export default React.createClass({
    getInitialState() {
        return {
            fadeInOpacity: new Animated.Value(0) // 初始值
        };
    },
    componentDidMount() {
        //要在内部使用
        //Animated.delay(10000);
        this.modalState(1);
    },
    render(){
        return(
            <Animated.View style={[styles.container,{
                opacity: this.state.fadeInOpacity
            }]}>
                {/*StatusBar组件*/}
                <StatusBar
                    animated={false}
                    hidden={false}
                    backgroundColor={'rgba(0,0,0,0)'}
                    translucent={true}
                    //barStyle='light-content'
                    showHideTransition={'fade'}
                    //networkActivityIndicatorVisible={true}
                />
                {/*模态框块*/}
                <View style={styles.main}>
                    <Text style={styles.mainTitle}>确定删除订单？</Text>
                    <View style={styles.mainBtn}>
                        {/*<View style={styles.mainBtnWrap}>*/}
                            <TouchableOpacity onPress={this.surePress}>
                                <Text style={styles.mainTxt}>确定</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.cancelPress}>
                                <Text style={[styles.mainTxt,{marginLeft:30}]}>取消</Text>
                            </TouchableOpacity>
                        {/*</View>*/}
                    </View>
                </View>
            </Animated.View>
        )
    },
    surePress(){
        this.modalState(0,()=>{this.props.setModal(false)});
        // this.props.setModal(false)
        //点击确定按钮之后 删除orderCell
        this.props.setDelete();
    },
    cancelPress(){
        this.modalState(0,()=>{this.props.setModal(false)});
        //this.props.setModal(false)
    },
    modalState(val,fn=()=>{}){
        Animated.timing(this.state.fadeInOpacity, {
            toValue: val, // 目标值
            duration: 200, // 动画时间
            easing: Easing.ease // 缓动函数
        }).start(fn);
    }
})

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        backgroundColor:'rgba(0,0,0,0.5)',
        position:'absolute',
        top:0,
        left:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        width:width*0.85,
        height:150,
        backgroundColor:'#fff',
        borderRadius:5,
        padding:20,
        justifyContent:'space-between'
    },
    mainTitle:{
        fontSize:16,
        color:'#333'
    },
    mainBtn:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    mainTxt:{
        fontSize:14,
        color:'#ff6100'
    },
})
