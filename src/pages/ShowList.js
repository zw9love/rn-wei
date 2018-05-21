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
    Dimensions
} from 'react-native';

let {width,scale,PixelRatio } = Dimensions.get('window');

import ShopListCell from '../components/ShopListCell'
import Title from '../components/Title'

export default React.createClass({
    getInitialState(){
        return{
            data:this.props.data
        }
    },
    render(){
        return(
            <View style={styles.container}>
                {/*导航*/}
                <Title data={{name:'首页',info:'轻松购物'}} navigator={this.props.navigator}/>
                <ScrollView>
                    <View style={styles.main}>
                        <View>
                            <Image source={require('../assets/img/banner.png')} style={styles.bannerStyle}/>
                        </View>
                        <View style={styles.shopListWrap}>
                            {this.renderShopListCell()}
                        </View>
                        {/*<Text style={styles.text}>我是show详情页，以下是传过来的数据</Text>*/}
                        {/*{this.renderData()}*/}
                    </View>
                </ScrollView>
            </View>
        )
    },
    renderShopListCell(){
        let data=this.props.data;
        // [
        //     {url:require('../../assets/img/eat1.png'),title:'炭牛韩国烤肉',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:178,money:153,distance:1881.1},
        //     {url:require('../../assets/img/eat2.png'),title:'炭牛韩国烤肉',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:98,money:88,distance:1866.1},
        //     {url:require('../../assets/img/eat3.png'),title:'炭牛韩国烤肉',info:'[价值343元]套餐2选1，提供免费WiFi提供免费WiFi提供免费WiFi',price:208,money:187,distance:1833.1}
        // ]

        let arr=[];
        let self = this;
        data.map((msg,i)=>{
            arr.push(
                <ShopListCell navigator={self.props.navigator} data={msg} key={i}/>
            )
        })

        return arr;
    },
    renderData(){
        let data=this.props;
        // console.log(data);
        let arr=[];
        for(let i in data){
            if(typeof data[i] == 'object' || i == 'src') continue;
            arr.push(
                <Text key={i} style={styles.text}>{i}:{data[i]}</Text>
            )
        }
        return arr;
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e8e8e8'
    },
    text:{
        color:'#fff',
        fontSize:18
    },
    main:{
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    bannerStyle:{
        width:width,
        height:width/2
    }
});
