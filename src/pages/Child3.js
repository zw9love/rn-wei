/**
 * Created by zengwei on 2017/3/23.
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

const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

import Effect from '../components/Effect'
import MyOrder from './MyOrder'
import Wallet from './Wallet'
import Discount from './Discount'
import Score from './Score'
import TodayRecommend from './TodayRecommend'
import Cooperation from './Cooperation'
import StrongDiscount from './StrongDiscount'
import MyComment from './MyComment'
import MyCollection from './MyCollection'
import style from "../assets/style/common";

export default React.createClass({
    componentWillMount(){
        //uri不能是本地路径
        // Image.getSize('../assets/img/wei.png',(width,height)=>{
        //     alert(height)
        // })
    },
    render(){
        return(
        <ScrollView
            style={styles.container}
            //contentInset = {{top: -200}}
            //contentOffset = {{y:200}}
        >
            <View style={styles.wappper}>
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
                {/*头部logo*/}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={require('../assets/img/wei.png')} style={styles.logo} />
                        <Text style={styles.headerLeftTxt}>威哥电商平台</Text>
                        <Image source={require('../assets/img/avatar_vip.png')} style={styles.vip} />
                    </View>
                    <View style={styles.headerRight}>
                        <Image source={require('../assets/img/icon_cell_rightarrow.png')} style={styles.arrow} />
                    </View>
                </View>
                <View style={styles.middle}>
                    <TouchableOpacity onPress={this.jumpStrongDiscount}>
                        <View style={styles.middleCell}>
                            <Text style={styles.middleCellText}>100</Text>
                            <Text style={styles.middleCellText}>威哥券</Text>
                            <View style={styles.line} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jumpMyComment}>
                        <View style={styles.middleCell}>
                            <Text style={styles.middleCellText}>66</Text>
                            <Text style={styles.middleCellText}>评价</Text>
                            <View style={styles.line} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jumpMyCollection}>
                        <View style={styles.middleCell}>
                            <Text style={styles.middleCellText}>88</Text>
                            <Text style={styles.middleCellText}>收藏</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Effect data={{title:'我的订单',text:'查看全部订单',icon:require('../assets/img/collect.png'),goComponent:MyOrder}} navigator={this.props.navigator}/>
                    <View style={styles.orderContainer}>
                        {this.renderWaitOrderCell()}
                    </View>
                </View>

                <View style={styles.main}>
                    <Effect data={{title:'威哥钱包',text:'账户余额:￥100',icon:require('../assets/img/draft.png'),goComponent:Wallet}} navigator={this.props.navigator}/>
                    <Effect data={{title:'抵用券',text:'0',icon:require('../assets/img/like.png'),goComponent:Discount}} navigator={this.props.navigator}/>
                </View>
                <View style={styles.main}>
                    <Effect data={{title:'积分商城',icon:require('../assets/img/card.png'),goComponent:Score}} navigator={this.props.navigator}/>
                </View>
                <View style={styles.main}>
                    <Effect data={{title:'今日推荐',image:require('../assets/img/me_new.png'),icon:require('../assets/img/new_friend.png'),goComponent:TodayRecommend}} navigator={this.props.navigator}/>
                </View>
                <View style={styles.main}>
                    <Effect data={{title:'我要合作',text:'轻松开店招财进宝',icon:require('../assets/img/pay.png'),goComponent:Cooperation}} navigator={this.props.navigator}/>
                </View>
            </View>
        </ScrollView>
        )
    },
    jumpStrongDiscount(){
        this.props.navigator.push({
            component:StrongDiscount
        })
    },
    jumpMyComment(){
        this.props.navigator.push({
            component:MyComment
        })
    },
    jumpMyCollection(){
        this.props.navigator.push({
            component:MyCollection
        })
    },
    renderWaitOrderCell(){
        let data=[
            {myuri:require('../assets/img/order1.png'),info:'待付款',goComponent:MyOrder},
            {myuri:require('../assets/img/order2.png'),info:'待使用',goComponent:MyOrder},
            {myuri:require('../assets/img/order3.png'),info:'待评价',goComponent:MyOrder},
            {myuri:require('../assets/img/order4.png'),info:'退款/售后',goComponent:MyOrder},
        ];
        let arr=[];
        data.map((msg,i)=>{
            arr.push(
                <WaitOrderCell key={i} data={msg} navigator={this.props.navigator}/>
            )
        })

        return arr;
    }
})

const WaitOrderCell = React.createClass({
    render(){
        return(
            <View style={[styles.orderCell,this.props.data.style]}>
                <TouchableOpacity style={styles.orderCellWrap} onPress={this.myPress}>
                    <Image source={this.props.data.myuri} style={styles.orderCellImage} />
                    <Text style={styles.orderCellTxt}>{this.props.data.info}</Text>
                </TouchableOpacity>
            </View>
        )
    },
    myPress(){
        if(!this.props.navigator) return;
        this.props.navigator.push({
            component:this.props.data.goComponent,
            // passProps:{}  //传递过去的参数
            //passProps:this.props.data
        })
    }
})

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'#FF6100',
        paddingTop: 15 + style.marginTop
    },
    headerLeft:{
        flexDirection:'row',
        alignItems: 'center',
    },
    headerLeftTxt:{
        marginLeft:10,
        color:'#fff',
        fontSize:18
    },
    logo:{
        width:70,
        height:70,
        borderRadius:35
    },
    vip:{
        width:16,
        height:16
    },
    arrow:{
        width:8,
        height:13
    },
    middle:{
        flexDirection:'row',
    },
    middleCell:{
        justifyContent: 'center',
        alignItems: 'center',
        width:width/3,
        backgroundColor:'rgba(255,97,0,0.6)',
        height:46
    },
    middleCellText:{
        color:'#fff',
        fontSize:14
    },
    line:{
        position:'absolute',
        right:0,
        top:3,
        height:40,
        backgroundColor:'#fff',
        width:1
    },
    main:{
        marginTop:20
    },
    orderContainer:{
        height:60,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    orderCell:{
        width:width/4,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    orderCellWrap:{
        width:width/4,
        height:60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderCellTxt:{
        fontSize:12,
        marginTop:3,
        // textAlign:'center',
        // position:'absolute',
        // bottom:10,
        // left:0
    },
    orderCellImage:{
        width:32,
        height:24,
        resizeMode:'contain',
    }
});
