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
    TextInput,
    RefreshControl,
    StatusBar,
    Dimensions
} from 'react-native';
import TimerMixin from 'react-timer-mixin'

import Advertisement from '../components/Advertisement'
import Effect from '../components/Effect'
import ShopMainCell from '../components/ShopMainCell'
import HotWrapTopCell from '../components/HotWrapTopCell'
import HotWrapBottomCell from '../components/HotWrapBottomCell'
import LoveCell from '../components/LoveCell'
import CameraDemo from './CameraDemo'
import IndexSearch from './IndexSearch'
import Address from './Address'
import Message from './Message'
import WebPage from './WebPage'
import ClassicShow from './ClassicShow'

let {width, height} = Dimensions.get('window');

export default React.createClass({
    mixins: [TimerMixin],
    render(){
        return (
            <View style={styles.container}>
                {/*StatusBar组件*/}
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'#FF6100'}
                    translucent={true}
                    //barStyle='light-content'
                    showHideTransition={'fade'}
                    //networkActivityIndicatorVisible={true}
                />
                <View style={styles.shadow}></View>
                {/*头部*/}
                <View style={styles.header}>
                    {/*<Text>Height: {StatusBar.currentHeight}</Text>*/}
                    <TouchableOpacity onPress={this.jumpAddress}>
                        <Text style={styles.headerTxt}>{this.state.city}∨</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerInputWrap} onPress={this.jumpSeach}>
                        <Image source={require('../assets/img/icon_homepage_search.png')}
                               style={styles.headerSearchImg}/>
                        <Text style={styles.headerInfo}>输入商家、种类、商圈</Text>
                        {/*<TextInput*/}
                        {/*style={styles.headerInput}*/}
                        {/*underlineColorAndroid='transparent'*/}
                        {/*placeholder='输入商家、种类、商圈'*/}
                        {/*placeholderTextColor="#ccc"*/}
                        {/*/>*/}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jumpScan}>
                        <Image source={require('../assets/img/icon_homepage_scan.png')} style={styles.headerImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jumpMessage}>
                        <Image source={require('../assets/img/icon_homepage_message.png')}
                               style={styles.headerImg}/>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={styles.scrollView}
                    scrollsToTop={true}
                    ref="scrollView"
                    onScroll={this.viewScroll}
                    scrollEventThrottle={0}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.myRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#fff']}
                        progressBackgroundColor="#FF6100"
                      />
                    }
                >
                    {/*轮播*/}
                    <View style={styles.carouselContainer}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            onMomentumScrollEnd={this.changeIndex}
                        >
                            {this.renderCarousel()}
                        </ScrollView>
                        <View style={styles.circelContainer}>
                            {this.renderCircle()}
                        </View>
                    </View>
                    {/*名店这里*/}
                    <View style={styles.storeContainer}>
                        {/*名店左边*/}
                        <TouchableOpacity style={styles.storeLeft} onPress={this.jumpStore}>
                            <Image source={require('../assets/img/mdqg.png')} style={styles.storeLeftImg}/>
                            <Image source={require('../assets/img/yyms.png')} style={styles.storeLeftImg}/>
                            <Text style={styles.storeLeftInfo}>探路组碳烤鱼</Text>
                            <View style={styles.storeLeftPrice}>
                                <Text style={styles.priceLeft}>￥9.5</Text>
                                <Text style={styles.priceRight}>再减3</Text>
                            </View>
                        </TouchableOpacity>
                        {/*名店右边*/}
                        <View style={styles.storeRight}>
                            <Advertisement data={{title:'天天特价',info:'优惠不打烊',style:{color:'#FF6100'},
                            data:[
                                {url:require('../assets/img/eat3.png'),title:'炭牛韩国烤肉3',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat4.png'),title:'炭牛韩国烤肉4',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat5.png'),title:'炭牛韩国烤肉5',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat6.png'),title:'炭牛韩国烤肉6',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ]
                            ,src:require('../assets/img/tttj.png')}} navigator={this.props.navigator}/>
                            <Advertisement data={{title:'一元吃',info:'一元吃美食',style:{color:'red'},
                            data:[
                                {url:require('../assets/img/eat7.png'),title:'炭牛韩国烤肉7',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat2.png'),title:'炭牛韩国烤肉2',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat4.png'),title:'炭牛韩国烤肉4',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat6.png'),title:'炭牛韩国烤肉6',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ],src:require('../assets/img/yyms.png')}} navigator={this.props.navigator}/>
                        </View>
                    </View>
                    {/*单独广告这里*/}
                    <View style={styles.bigAdver}>
                        <Advertisement data={{title:'最高立减25',info:'报名威哥 新学员专享',style:{color:'#FB7F66'},
                            data:[
                                {url:require('../assets/img/eat3.png'),title:'炭牛韩国烤肉3',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat7.png'),title:'炭牛韩国烤肉7',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat6.png'),title:'炭牛韩国烤肉6',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat5.png'),title:'炭牛韩国烤肉5',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ],src:require('../assets/img/nsj.png')}} navigator={this.props.navigator}/>
                    </View>
                    {/*4个广告这里*/}
                    <View style={styles.adverContainer}>
                        <View style={styles.adverLeft}>
                            <Advertisement data={{title:'千万红包限时抢',info:'5折起美食畅吃',style:{color:'#FF6100'},
                            data:[
                                //{url:require('../../assets/img/eat1.png'),title:'炭牛韩国烤肉',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat2.png'),title:'炭牛韩国烤肉2',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat3.png'),title:'炭牛韩国烤肉3',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ]
                            }} navigator={this.props.navigator}/>
                            <Advertisement data={{title:'鲜花1折起',info:'撩妹更easy',style:{color:'#41A041'},
                            data:[
                                {url:require('../assets/img/eat4.png'),title:'炭牛韩国烤肉4',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat5.png'),title:'炭牛韩国烤肉5',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat6.png'),title:'炭牛韩国烤肉6',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat7.png'),title:'炭牛韩国烤肉7',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ]
                            }} navigator={this.props.navigator}/>
                        </View>
                        {/*名店右边*/}
                        <View style={styles.adverRight}>
                            <Advertisement data={{title:'踏青好去处',info:'优惠游周边',style:{color:'#FFC0CB'},
                            data:[
                                {url:require('../assets/img/eat2.png'),title:'炭牛韩国烤肉2',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat5.png'),title:'炭牛韩国烤肉5',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat1.png'),title:'炭牛韩国烤肉1',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat4.png'),title:'炭牛韩国烤肉4',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ]
                            }} navigator={this.props.navigator}/>
                            <Advertisement data={{title:'踏青季特惠',info:'春游装备1元购',style:{color:'#800280'},
                            data:[
                                {url:require('../assets/img/eat4.png'),title:'炭牛韩国烤肉4',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
                                {url:require('../assets/img/eat6.png'),title:'炭牛韩国烤肉6',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                                {url:require('../assets/img/eat7.png'),title:'炭牛韩国烤肉7',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
                            ]
                            }} navigator={this.props.navigator}/>
                        </View>
                    </View>
                    {/*购物中心*/}
                    <View style={styles.shopContainer}>
                        <Effect
                            data={{title:'购物中心',text:'全部4家',icon:require('../assets/img/gwzx.png'),goComponent:ClassicShow}}
                            navigator={this.props.navigator}/>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={false}
                        >
                            {this.renderShopMainCell()}
                        </ScrollView>
                    </View>
                    {/*热门频道*/}
                    <View style={styles.hotContainer}>
                        <Effect
                            data={{title:'热门频道',text:'查看全部',icon:require('../assets/img/rm.png'),goComponent:ClassicShow}}
                            navigator={this.props.navigator}/>

                        <View style={styles.hotWrap}>
                            <View style={styles.hotWrapTop}>
                                {this.renderHotTop()}
                            </View>
                            <View style={styles.hotWrapBottom}>
                                {this.renderHotBottom()}
                            </View>
                        </View>
                    </View>
                    {/*猜你喜欢*/}
                    <View style={styles.likeContainer}>
                        <Effect
                            data={{title:'猜你喜欢',icon:require('../assets/img/cnxh.png'),goComponent:ClassicShow}}
                            navigator={this.props.navigator}/>
                        {this.renderLove()}
                    </View>
                    {/*查看全部*/}
                    {
                        this.state.showButton ? (
                                <TouchableOpacity onPress={this.lookMore}>
                                    <View style={styles.lookAllWrap}>
                                        <Text style={styles.lookAllTxt}>查看全部商品</Text>
                                    </View>
                                </TouchableOpacity>
                            ) : null
                    }
                </ScrollView>
                {/*回到顶部*/}
                {
                    this.state.backTopActive ? (
                            <TouchableOpacity style={styles.backTopWrap} activeOpacity={0.6} onPress={this.backTop}>
                                <Image source={require('../assets/img/back_top.png')} style={styles.backImage}/>
                            </TouchableOpacity>
                        )
                        : null
                }

            </View>
        )
    },
    setCity(name){
        this.setState({city: name})
    },
    setData(data){
        this.setState({tempData: data})
    },
    jumpStore(){
        this.props.navigator.push({
            component: WebPage,
            // passProps:{}  //传递过去的参数
            passProps: {title: '名店抢购', url: 'http://i.meituan.com/topic/huilife?cevent=imt%2Fhomepage%2Fhomeguide3'}
        })
    },
    jumpMessage(){
        this.props.navigator.push({
            component: Message,
            // passProps:{}  //传递过去的参数
            //passProps:{setCity:this.setCity,setData:this.setData,tempData:this.state.tempData}
        })
    },
    jumpAddress(){
        this.props.navigator.push({
            component: Address,
            // passProps:{}  //传递过去的参数
            passProps: {setCity: this.setCity, setData: this.setData, tempData: this.state.tempData}
        })
    },
    jumpSeach(){
        this.props.navigator.push({
            component: IndexSearch
        })
    },
    jumpScan(){
        this.props.navigator.push({
            component: CameraDemo
        })
    },
    jumpClassicShow(title){
        this.props.navigator.push({
            component: ClassicShow,
            passProps: {title: title}
        })
    },
    backTop(){
        this.refs.scrollView.scrollTo({x: 0, y: 0, animated: true})
        //this.refs.scrollView.scrollToEnd({animated: true})
    },
    viewScroll(e){
        let offsetY = e.nativeEvent.contentOffset.y;
        //优化一下
        if (offsetY < 50 && (this.state.judgeArr[0] == this.state.backTopActive)) {
            return;
        } else if (offsetY >= 50 && (this.state.judgeArr[1] == this.state.backTopActive)) {
            return;
        } else {
            this.setState({backTopActive: !this.state.backTopActive})
        }
        //offsetY <= 50 ? this.setState({backTopActive:false}) : this.setState({backTopActive:true})
    },
    myRefresh(){
        this.setState({isRefreshing: true});
        this.setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 3000)
    },
    lookMore(){
        if (this.lock) return;
        this.lock = true;
        this.setState({isRefreshing: true});
        this.setTimeout(() => {
            this.setState({
                isRefreshing: false,
                showButton: false,
                data: this.state.data.concat(this.state.refreshData)
            });
        }, 3000)
    },
    renderLove(){
        let data = this.state.data;
        let arr = [];
        data.map((msg, i) => {
            arr.push(<LoveCell key={i} data={msg} navigator={this.props.navigator}
                //changeNav={this.props.changeNav}
            />)
        })
        return arr;

    },
    renderHotTop(){
        let data = [
            {url: require('../assets/img/hot_play.png'), title: '演出赛事', info: '精彩不容错过'},
            {url: require('../assets/img/hot_car.png'), title: '汽车服务', info: '汽车打蜡特惠'}
        ];
        let arr = [];
        data.map((msg, i) => {
            arr.push(<HotWrapTopCell key={i} data={msg}/>)
        })
        return arr;
    },
    renderHotBottom(){
        let data = [
            {url: require('../assets/img/hot_air.png'), title: '订机票', info: '一折票马上抢'},
            {url: require('../assets/img/hot_water.png'), title: '温泉', info: '品质暖冬专享'},
            {url: require('../assets/img/hot_eat.png'), title: '火锅', info: '冬日必吃美食'},
            {url: require('../assets/img/hot_wash.png'), title: '亲自游玩', info: '宝贝儿去哪了'},
        ]
        let arr = [];
        data.map((msg, i) => {
            arr.push(<HotWrapBottomCell key={i} data={msg}/>)
        })
        return arr;
    },
    renderShopMainCell(){
        let data = [
            {url: require('../assets/img/kd.png'), info: '22家优惠', name: '凯德广场-云尚'},
            {url: require('../assets/img/lyl.png'), info: '111家优惠', name: '来又来广场'},
            {url: require('../assets/img/wd.png'), info: '66家优惠', name: '白云万达广场'},
            {url: require('../assets/img/zjgc.png'), info: '88家优惠', name: '威哥威哥1广场'},
            {url: require('../assets/img/kd.png'), info: '88家优惠', name: '威哥威哥2广场'},
            {url: require('../assets/img/lyl.png'), info: '88家优惠', name: '威哥威哥3广场'},
        ];
        let arr = [];
        data.map(function (msg, i) {
            arr.push(<ShopMainCell key={i} data={msg}/>)
        })

        return arr;
    },
    renderCircle(){
        let arr = [];
        let specialStyle = {};
        for (let i = 0; i < 2; i++) {
            specialStyle = this.state.index == i ? {backgroundColor: '#FF6100'} : {backgroundColor: '#ccc'};
            arr.push(
                <View key={i} style={[styles.circel,specialStyle]}></View>
            )
        }
        return arr;
    },
    renderCarousel(){
        let data = [
            [
                {src: require('../assets/img/zlam.png'), name: '足疗按摩'},
                {src: require('../assets/img/gw.png'), name: '购物'},
                {src: require('../assets/img/jrxd.png'), name: '今日新单'},
                {src: require('../assets/img/xckc.png'), name: '小吃快餐'},
                {src: require('../assets/img/shfw.png'), name: '生活服务'},
                {src: require('../assets/img/tdyp.png'), name: '甜点饮品'},
                {src: require('../assets/img/mj.png'), name: '美甲'},
                {src: require('../assets/img/jdmp.png'), name: '景点门票'},
                {src: require('../assets/img/ly.png'), name: '旅游'},
                {src: require('../assets/img/qbfl.png'), name: '全部分类'},
            ],
            [
                {src: require('../assets/img/zlam.png'), name: '足疗按摩'},
                {src: require('../assets/img/gw.png'), name: '购物'},
                {src: require('../assets/img/jrxd.png'), name: '今日新单'},
                {src: require('../assets/img/xckc.png'), name: '小吃快餐'},
                {src: require('../assets/img/shfw.png'), name: '生活服务'},
            ]
        ]
        let arr = [];
        let self = this;
        for (let i = 0; i < data.length; i++) {
            arr.push(
                <View style={styles.carouselCell} key={i}>
                    {
                        data[i].map(function (msg, index) {
                            return (
                                <TouchableOpacity key={index} style={styles.carouselCellWrap}
                                                  onPress={()=>{self.jumpClassicShow(msg.name)}}>
                                    <Image source={msg.src} style={styles.carouselCellImg}></Image>
                                    <Text style={styles.carouselCellTxt}>{msg.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            )
        }
        return arr;
    },
    getInitialState(){
        return {
            tempData: null,
            city: '北京',
            index: 0,
            isRefreshing: false,
            showButton: true,
            backTopActive: false,
            judgeArr: [false, true],
            data: [
                {
                    url: require('../assets/img/eat1.png'),
                    title: '美食美食1',
                    info: '100元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '4666'
                },
                {
                    url: require('../assets/img/eat2.png'),
                    title: '美食美食2',
                    info: '101元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '4777'
                },
                {
                    url: require('../assets/img/eat3.png'),
                    title: '美食美食3',
                    info: '102元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '4888'
                },
                {
                    url: require('../assets/img/eat4.png'),
                    title: '美食美食4',
                    info: '103元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '4999'
                },
                {
                    url: require('../assets/img/eat5.png'),
                    title: '美食美食5',
                    info: '104元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '5099',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat6.png'),
                    title: '美食美食6',
                    info: '105元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '5199'
                },
                {
                    url: require('../assets/img/eat7.png'),
                    title: '美食美食7',
                    info: '106元代金券一张，可叠加',
                    price: '70',
                    index: '100',
                    sellNum: '5399',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat8.png'),
                    title: '美食美食8',
                    info: '666元代金券一张，可叠加',
                    price: '66',
                    index: '100',
                    sellNum: '5599'
                },
                {
                    url: require('../assets/img/eat9.png'),
                    title: '美食美食9',
                    info: '777元代金券一张，可叠加',
                    price: '77',
                    index: '100',
                    sellNum: '5699'
                },
                {
                    url: require('../assets/img/eat10.png'),
                    title: '美食美食10',
                    info: '888元代金券一张，可叠加',
                    price: '88',
                    index: '100',
                    sellNum: '5899'
                }
            ],
            refreshData: [
                {
                    url: require('../assets/img/eat11.png'),
                    title: '美食美食11',
                    info: '999元代金券一张，可叠加',
                    price: '99',
                    index: '100',
                    sellNum: '5999'
                },
                {
                    url: require('../assets/img/eat12.png'),
                    title: '美食美食12',
                    info: '1333元代金券一张，可叠加',
                    price: '111',
                    index: '100',
                    sellNum: '6199',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat13.png'),
                    title: '美食美食13',
                    info: '1666元代金券一张，可叠加',
                    price: '222',
                    index: '100',
                    sellNum: '6399',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat14.png'),
                    title: '美食美食14',
                    info: '2888元代金券一张，可叠加',
                    price: '333',
                    index: '100',
                    sellNum: '6699',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat15.png'),
                    title: '美食美食15',
                    info: '3333元代金券一张，可叠加',
                    price: '666',
                    index: '100',
                    sellNum: '6899',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat16.png'),
                    title: '美食美食16',
                    info: '6666元代金券一张，可叠加',
                    price: '888',
                    index: '100',
                    sellNum: '8899',
                    needOrder: true
                },
                {
                    url: require('../assets/img/eat17.png'),
                    title: '美食美食17',
                    info: '8888元代金券一张，可叠加',
                    price: '999',
                    index: '100',
                    sellNum: '9999'
                },
            ]
        }
    },
    componentDidMount(){
        //设定标识符为false
        this.lock = false;
        // fetch('http://www.z1995.com/data.json').then((response) => response.json())
        // .then((responseJson) => {
        //     // console.log(responseJson)
        //     return responseJson.movies;
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    },
    changeIndex(e){
        //水平的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //求出当前的page
        let currentIndex = parseInt(offsetX / width);
        //更新小圆点
        this.setState({index: currentIndex})
    }
})

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    shadow: {
        backgroundColor: '#FF6100',
        height: StatusBar.currentHeight
    },
    header: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FF6100',
    },
    headerTxt: {
        fontSize: 14,
        color: '#fff'
    },
    headerInfo: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 5
    },
    headerSearchImg: {
        width: 20,
        height: 20,
        marginLeft: 15
    },
    headerInputWrap: {
        flexDirection: 'row',
        height: 30,
        width: width - 120,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#fff',
        // borderRadius: 15
    },
    headerImg: {
        width: 24,
        height: 24
    },
    carouselContainer: {
        height: 180,
    },
    carouselCell: {
        height: 160,
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
        // alignItems: 'flex-start',
        // alignItems: 'center',
    },
    circel: {
        // backgroundColor:'#ccc',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 5
    },
    circelContainer: {
        width: width,
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        backgroundColor: '#fff'
    },
    carouselCellWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: width / 5,
        // backgroundColor:'red'
    },
    carouselCellImg: {
        width: 30,
        height: 30
    },
    carouselCellTxt: {
        fontSize: 12,
        color: '#333',
        marginTop: 5
    },
    storeContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    storeLeft: {
        width: width / 2,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRightColor: '#e8e8e8',
        borderBottomColor: '#e8e8e8'
    },
    storeLeftImg: {
        width: 100,
        height: 30,
        marginTop: 5
    },
    storeLeftInfo: {
        fontSize: 16,
        color: '#888'
    },
    storeLeftPrice: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    priceLeft: {
        color: '#21C0AF'
    },
    priceRight: {
        color: '#FF6100',
        backgroundColor: 'yellow'
    },
    storeRight: {
        width: width / 2,
        height: 120,
        // backgroundColor:'yellow',
    },
    scrollView: {
        marginBottom: 60 + StatusBar.currentHeight,
        // alignItems: 'center',
        // backgroundColor:'red'
    },
    bigAdver: {
        marginTop: 20
    },
    adverContainer: {
        flexDirection: 'row',
    },
    adverLeft: {
        borderRightWidth: 1,
        borderRightColor: '#e8e8e8',
        width: width / 2,
    },
    adverRight: {
        width: width / 2,
    },
    shopContainer: {
        marginTop: 20
    },
    hotContainer: {
        marginTop: 20
    },
    hotWrap: {
        padding: 5,
        backgroundColor: '#fff',
    },
    hotWrapTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hotWrapBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    likeContainer: {
        marginTop: 20,
    },
    lookAllWrap: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: width * 0.1 / 2,
        height: 40,
        width: width * 0.9,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lookAllTxt: {
        color: '#FF6100',
        fontSize: 16
    },
    backTopWrap: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 20,
        bottom: 95,
        backgroundColor: '#FF6100',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
        width: 17,
        height: 13
    }
});