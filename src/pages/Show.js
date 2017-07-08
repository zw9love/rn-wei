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
    ScrollView,
    Dimensions
} from 'react-native';

let {width,height,scale} = Dimensions.get('window');
import Title from '../components/Title'
import CommentCell from '../components/CommentCell'
import LoveCell from '../components/LoveCell'

export default React.createClass({
    getInitialState(){
        return{
            data:[
                {url:require('../assets/img/eat1.png'),title:'美食美食1',info:'100元代金券一张，可叠加',price:'70',index:'100',sellNum:'4666'},
                {url:require('../assets/img/eat2.png'),title:'美食美食2',info:'101元代金券一张，可叠加',price:'70',index:'100',sellNum:'4777'},
                {url:require('../assets/img/eat3.png'),title:'美食美食3',info:'102元代金券一张，可叠加',price:'70',index:'100',sellNum:'4888'},
                {url:require('../assets/img/eat4.png'),title:'美食美食4',info:'103元代金券一张，可叠加',price:'70',index:'100',sellNum:'4999'},
                {url:require('../assets/img/eat5.png'),title:'美食美食5',info:'104元代金券一张，可叠加',price:'70',index:'100',sellNum:'5099'},
                {url:require('../assets/img/eat6.png'),title:'美食美食6',info:'105元代金券一张，可叠加',price:'70',index:'100',sellNum:'5199'},
                {url:require('../assets/img/eat7.png'),title:'美食美食7',info:'106元代金券一张，可叠加',price:'70',index:'100',sellNum:'5399'},
            ]
        }
    },
    render(){
        return(
            <View style={styles.container}>
                {/*导航*/}
                <Title data={{name:'团购详情'}} navigator={this.props.navigator}/>
                {/*banner图区域*/}
                <ScrollView>
                    <View style={styles.banner}>
                        <Image source={this.props.url} style={styles.bannerImage}/>
                        <View style={styles.bannerShadow}>
                            <Text style={styles.bannerShadowTop}>{this.props.title}</Text>
                            <Text style={styles.bannerShadowBottom}
                                  //规定了超出行数用省略号代替
                                  numberOfLines={1}
                            >
                                {this.props.info}
                            </Text>
                        </View>
                    </View>
                    {/*价格块*/}
                    <View style={styles.priceWrap}>
                        <Text style={styles.priceLeft}>￥{this.props.price}</Text>
                        <Text style={styles.priceRight}>门市价￥148</Text>
                        <TouchableOpacity style={styles.buyNowWrap}>
                            <Text style={styles.buyNowTxt}>立刻抢购</Text>
                        </TouchableOpacity>
                    </View>
                    {/*套餐功能块*/}
                    <View style={styles.packageInfo}>
                        <View style={styles.infoLeft}>
                            <View style={styles.infoCell}>
                                <Image source={require('../assets/img/yes.png')} style={styles.infoImage}/>
                                <Text style={styles.infoLeftTxt}>随时退</Text>
                            </View>
                            <View style={[styles.infoCell,{marginTop:10}]}>
                                <Image source={require('../assets/img/yes.png')} style={styles.infoImage}/>
                                <Text style={styles.infoLeftTxt}>过期自动退</Text>
                            </View>
                        </View>
                        <View style={styles.infoRight}>
                            <View style={styles.infoCell}>
                                <Image source={require('../assets/img/person.png')} style={styles.infoImage}/>
                                <Text style={styles.infoRightTxt}>已售{this.props.sellNum || 8888}</Text>
                            </View>
                            <View style={[styles.infoCell,{marginTop:10}]}>
                                {/*<Image source={require('../../assets/img/yes.png')} style={styles.yesImage}/>*/}
                                {/*<Text style={styles.infoLeftTxt}>过期自动退</Text>*/}
                            </View>
                        </View>
                    </View>
                    {/*评价评分块*/}
                    <View style={styles.evaluateWrap}>
                        <View style={styles.starWrap}>
                            {this.renderStar()}
                        </View>
                        <Text style={styles.starCount}>5.0分</Text>
                        <View style={styles.personWrap}>
                            <Text style={styles.personTxt}>430人评价</Text>
                            <Image source={require('../assets/img/home_arrow.png')} style={styles.personImage}/>
                        </View>
                    </View>
                    {/*评论块*/}
                    <View style={styles.commentWrap}>
                        {this.renderComment()}
                    </View>
                    {/*商家信息*/}
                    <View style={styles.storeWrap}>
                        <View style={styles.storeWrapTitle}>
                            <Text style={styles.storeWrapTitleTxt}>商家信息</Text>
                        </View>
                        <View style={styles.storeInfoWrap}>
                            <View style={styles.storeInfoLeft}>
                                <Text style={styles.storeInfoLeftTxt1}>汉丽轩海鲜火锅烤肉自助 (梨园店)</Text>
                                <Text style={styles.storeInfoLeftTxt2}>通州区梨园镇云景里 (蓝岛大厦南300米)</Text>
                                <View style={styles.storeInfoLeftBottom}>
                                    <Image source={require('../assets/img/address.png')} style={styles.addressImg}/>
                                    <Text style={styles.storeInfoLeftTxt3}>1.1km</Text>
                                    <Text style={styles.storeInfoLeftTxt4}>离我最近</Text>
                                </View>
                            </View>
                            <View style={styles.storeInfoRight}>
                                <View style={styles.storeInfoRightLine} />
                                <TouchableOpacity>
                                    <Image source={require('../assets/img/phone.png')} style={styles.phoneImage} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/*套餐说明区*/}
                    <View style={styles.menuWrap}>
                        <View style={styles.storeWrapTitle}>
                            <Text style={styles.storeWrapTitleTxt}>套餐</Text>
                        </View>
                        <View style={styles.menuInfo}>
                            <Text style={styles.menuInfoTxt}>自助晚餐</Text>
                            <View style={styles.menuInfoPrice}>
                                <View style={styles.menuInfoPriceLeft}>
                                    <Text style={styles.menuInfoTxt}>1位</Text>
                                </View>
                                <View style={styles.menuInfoPriceRight}>
                                    <Text style={styles.menuInfoTxt}>￥59</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.menuDetails}>
                            <Text style={styles.menuInfoTxt}>•   自助晚餐：17:30-22:00</Text>
                            <Text style={[styles.menuInfoTxt,{marginTop:10}]}>•   最多可用餐2小时</Text>
                        </View>
                        <TouchableOpacity style={styles.lookDetails}>
                            <Text style={styles.lookDetailsTxt}>查看图文详情</Text>
                            <Image source={require('../assets/img/icon_cell_rightarrow.png')} style={styles.lookDetailsImg}/>
                        </TouchableOpacity>
                    </View>
                    {/*推荐购买区*/}
                    <View style={styles.recommendWrap}>
                        <View style={styles.recommendWrapTitle}>
                            <Text style={styles.recommendWrapTitleTxt}>其他人也看过</Text>
                        </View>
                        {this.renderLove()}
                    </View>
                </ScrollView>
            </View>
        )
    },
    renderStar(){
        var arr=[];
        for(let i=0;i<5;i++){
            let special= i==0 ? {marginLeft:0} : {};
            arr.push(
                <Image source={require('../assets/img/star.png')} style={[styles.starImage,special]} key={i}/>
            )
        }

        return arr;
    },
    renderLove(){
        let data=this.state.data;
        let arr=[];
        data.map((msg,i)=>{
            arr.push(<LoveCell key={i} data={msg} navigator={this.props.navigator}/>)
        })
        return arr;

    },
    renderComment(){
        let data=['服务热情','点心好','味道赞','价格实惠','回头客','性价比高','上菜快','带娃吃饭',];
        let arr=[];
        data.map((msg,i)=>{
            arr.push(<CommentCell key={i} info={msg}/>)
        })
        return arr;
    }
});

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8e8e8',
        flex:1
    },
    banner:{

    },
    bannerImage:{
        width:width,
        height:width*0.6,
    },
    bannerShadow:{
        height:60,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,
        left:0,
        justifyContent: 'center',
        //alignItems: 'center',
        width:width,
        paddingLeft:10,
        paddingRight:10
    },
    bannerShadowTop:{
        fontSize:18,
        color:'#fff',
        // marginLeft:10
    },
    bannerShadowBottom:{
        fontSize:14,
        color:'#fff',
        marginTop:5,
        // marginLeft:10
    },
    priceWrap:{
        height:60,
        backgroundColor:'#fff',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems: 'center',
        padding:10
    },
    priceLeft:{
        fontSize:20,
        color:'#FF6100'
    },
    priceRight:{
        color:'#aaa',
        fontSize:14,
        marginLeft:10
    },
    buyNowWrap:{
        position:'absolute',
        right:10,
        top:10,
        height:40,
        width:125,
        backgroundColor:'#f99c00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4
    },
    buyNowTxt:{
        color:'#fff',
        fontSize:18
    },
    packageInfo:{
        height:75,
        backgroundColor:'#fff',
        padding:10,
        flexDirection:'row',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
    },
    infoLeft:{
        width:(width-20)/2,
        justifyContent: 'center',
    },
    infoRight:{
        width:(width-20)/2,
        justifyContent: 'center',
    },
    infoCell:{
        flexDirection:'row',
        alignItems: 'center',
        height:15
    },
    infoImage:{
        width:15,
        height:15
    },
    infoLeftTxt:{
        color:'#b5cc86',
        fontSize:13,
        marginLeft:5
    },
    infoRightTxt:{
        color:'#9e9e9e',
        fontSize:13,
        marginLeft:5
    },
    evaluateWrap:{
        height:45,
        backgroundColor:'#fff',
        padding:10,
        flexDirection:'row',
        alignItems: 'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
    },
    starWrap:{
        flexDirection:'row',
    },
    starImage:{
        width:14,
        height:14,
        marginLeft:5
    },
    starCount:{
        color:'#9e9e9e',
        fontSize:16,
        marginLeft:10
    },
    personWrap:{
        flexDirection:'row',
        position:'absolute',
        right:10,
        height:45,
        alignItems: 'center',
    },
    personTxt:{
        color:'#9e9e9e',
        fontSize:16,
    },
    personImage:{
        width:15,
        height:21,
        marginLeft:5
    },
    commentWrap:{
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        flexDirection:'row',
        width:'100%',
        flexWrap:'wrap',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
    },
    storeWrap:{
        marginTop:10,
        // height:100,
        backgroundColor:'#fff',
    },
    storeWrapTitle:{
        height:45,
        justifyContent: 'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        paddingLeft:10
    },
    storeWrapTitleTxt:{
        color:'#9e9e9e',
        fontSize:16,
    },
    storeInfoWrap:{
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        height:100,
        paddingLeft:10,
        paddingRight:10
    },
    storeInfoLeftBottom:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:5
    },
    addressImg:{
        width:12,
        height:16
    },
    storeInfoLeft:{

    },
    storeInfoLeftTxt1:{
        color:'#333',
        fontSize:16
    },
    storeInfoLeftTxt2:{
        color:'#9e9e9e',
        fontSize:14,
        marginTop:5
    },
    storeInfoLeftTxt3:{
        color:'#9e9e9e',
        fontSize:12,
        marginLeft:5
    },
    storeInfoLeftTxt4:{
        color:'#FF6100',
        fontSize:12,
        marginLeft:5
    },
    storeInfoRight:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight:10
    },
    storeInfoRightLine:{
        height:36,
        width:1,
        backgroundColor:'#e8e8e8'
    },
    phoneImage:{
        width:18,
        height:23,
        marginLeft:20
    },
    menuWrap:{
        marginTop:10,
        backgroundColor:'#fff'
    },
    menuInfo:{
        height:40,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
    },
    menuInfoTxt:{
        color:'#333',
        fontSize:14,
    },
    menuInfoPrice:{
        flexDirection:'row',
        height:40
    },
    menuInfoPriceLeft:{
        width:100,
        borderLeftWidth:1,
        borderLeftColor:'#e8e8e8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuInfoPriceRight:{
        width:60,
        borderLeftWidth:1,
        borderLeftColor:'#e8e8e8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuDetails:{
        height:80,
        backgroundColor:'#fff',
        paddingLeft:10,
        justifyContent: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
    },
    lookDetails:{
        height:45,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10
    },
    lookDetailsTxt:{
        color:'#FF6100',
        fontSize:16
    },
    lookDetailsImg:{
        width:8,
        height:13
    },
    recommendWrap:{
        marginTop:10,
        backgroundColor:'#fff'
    },
    recommendWrapTitle:{
        height:45,
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
        justifyContent: 'center',
        paddingLeft:10
    },
    recommendWrapTitleTxt:{
        color:'#FF6100',
        fontSize:16
    }
})