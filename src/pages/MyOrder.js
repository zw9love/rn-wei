/**
 * Created by zengwei on 2017/4/1.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    Dimensions,
    ScrollView
} from 'react-native';

let {width, height, scale} = Dimensions.get('window');

import Title from '../components/Title'
import OrderCell from '../components/OrderCell'
import Effect from '../components/Effect'
import MyModal from '../components/MyModal'
import OutFood from './OutFood'
import Overlord from './Overlord'
import LuckyReward from './LuckyReward'

export default React.createClass({
    getInitialState() {
        return {
            currentIndex: 0,
            //editActive:true,
            deleteActive: false,
            editInfo: '编辑',
            modalShow: false,
            orderCellObj: null
        }
    },
    render() {
        //let scrollEnabledActive = this.state.modalShow ? false : true;
        return (
            <View style={styles.container}>
                <Title data={{name: '我的订单', editInfo: this.state.editInfo, myEdit: this.myEdit}}
                       navigator={this.props.navigator}/>
                <View style={styles.category}>
                    <View style={styles.categoryLine}/>
                    {this.renderCategory()}
                </View>
                <ScrollView
                    style={styles.scollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.changeIndex}
                    //scrollEnabled={scrollEnabledActive}
                    //onScrollBeginDrag={this.beginDrag}
                    //onScrollEndDrag  ={this.endDrag}
                    ref="scrollView"
                >
                    <ScrollView style={styles.main1}>
                        {this.renderOrderCell()}
                    </ScrollView>
                    <View style={styles.main2}>
                        <View style={styles.main2Wrap}>
                            <Effect
                                data={{title: '外卖', icon: require('../assets/img/waimai.png'), goComponent: OutFood}}
                                navigator={this.props.navigator} />
                        </View>
                        <View style={styles.main2Wrap}>
                            <Effect
                                data={{title: '霸王餐', icon: require('../assets/img/bawang.png'), goComponent: Overlord}}
                                navigator={this.props.navigator} />
                            <Effect data={{
                                title: '抽奖单',
                                icon: require('../assets/img/choujiang.png'),
                                goComponent: LuckyReward
                            }} navigator={this.props.navigator} />
                        </View>
                    </View>
                </ScrollView>
                {
                    this.state.modalShow ? <MyModal setModal={this.setModal} setDelete={this.setDelete}/> : null
                }
            </View>
        )
    },
    myEdit() {
        if (this.state.editInfo === '编辑') {
            this.setState({deleteActive: true, editInfo: '完成'})
        } else {
            this.setState({deleteActive: false, editInfo: '编辑'})
        }

    },
    setDelete() {
        this.state.orderCellObj.setState({show: false});
    },
    setModal(val, obj) {
        obj ? this.setState({modalShow: val, orderCellObj: obj}) : this.setState({modalShow: val})
    },
    renderOrderCell() {
        let data = [
            {storeName: '捏福饺子', time: '2016-05-15 13:23', price: 34, deleteActive: this.state.deleteActive},
            {storeName: '捏福饺子', time: '2016-05-16 13:23', price: 35, deleteActive: this.state.deleteActive},
            {storeName: '捏福饺子', time: '2016-05-17 13:23', price: 36, deleteActive: this.state.deleteActive},
            {storeName: '捏福饺子', time: '2016-05-18 13:23', price: 37, deleteActive: this.state.deleteActive},
            {storeName: '捏福饺子', time: '2016-05-19 13:23', price: 38, deleteActive: this.state.deleteActive},
            {storeName: '捏福饺子', time: '2016-05-20 13:23', price: 39, deleteActive: this.state.deleteActive},
        ];
        let arr = [];
        data.map((msg, i) => {
            arr.push(
                <OrderCell key={i} data={msg} setModal={this.setModal}/>
            )
        });
        return arr;
    },
    renderCategory() {
        let data = ['全部', '分类'];
        let arr = [];
        data.map((msg, i) => {
            let fontColor = i === this.state.currentIndex ? {color: '#FF6100'} : {color: '#666'};
            let border = i === this.state.currentIndex ? {borderBottomColor: '#FF6100', borderBottomWidth: 3} : {};
            arr.push(
                <TouchableOpacity key={i} style={[styles.categoryWrap, border]} onPress={() => {
                    this.categoryPress(i)
                }}>
                    <View style={styles.categoryTxtWrap}>
                        <Text style={[styles.categoryTxt, fontColor]}>{msg}</Text>
                    </View>
                </TouchableOpacity>
            )
        });
        //this.state.currentIndex==1 ? this.setState({editActive:false}): this.setState({editActive:true});
        return arr;
    },
    changeIndex(e) {
        //水平的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //求出当前的page
        let currentIndex = parseInt(offsetX / width);
        //更新小圆点
        currentIndex === 1 ? this.setState({
            currentIndex: currentIndex,
            editInfo: ''
        }) : this.setState({currentIndex: currentIndex, editInfo: '编辑'});
    },
    categoryPress(n) {
        n === 1 ? this.setState({currentIndex: n, editInfo: ''}) : this.setState({currentIndex: n, editInfo: '编辑'});
        //this.setState({currentIndex:n});
        //获取点击小圆点所应该到达的水平位移值
        let currentX = n * width;
        //拿到dom然后设置偏移值
        this.refs.scrollView.scrollResponderScrollTo({x: currentX, y: 0, animated: true});
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    category: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryWrap: {
        width: width / 2,
        height: 50
    },
    categoryTxtWrap: {
        position: 'absolute',
        width: width / 2,
        height: 50,
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTxt: {
        fontSize: 16,
    },
    categoryLine: {
        height: 40,
        width: 1,
        backgroundColor: '#e8e8e8',
        position: 'absolute',
        top: 5,
        left: width / 2
    },
    scollViewStyle: {
        // marginTop:10
    },
    main1: {
        width: width,
        // flex:1
    },
    main2: {
        width: width,
    },
    main2Wrap: {
        marginTop: 10
    }
})
