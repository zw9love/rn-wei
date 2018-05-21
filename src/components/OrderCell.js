/**
 * Created by zengwei on 2017/4/1.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

let {width} = Dimensions.get('window');

export default React.createClass({
    getInitialState(){
        return{
            show:true
        }
    },
    render(){
        let leftWidth = this.props.data.deleteActive ? width-80 : width;
        return(
            <View>
                {
                    this.state.show ? (
                        <View style={styles.container}>
                            <View style={{width:leftWidth}}>
                                <View style={styles.title}>
                                    <View style={{flexDirection:'row',alignItems: 'center'}}>
                                        <Image source={require('../assets/img/motuo.png')} style={styles.titleIcon}/>
                                        <Text style={styles.titleTxt}>{this.props.data.storeName}</Text>
                                    </View>
                                    <Text style={[styles.titleTxt,{color:'#FF6100'}]}>已完成</Text>
                                </View>
                                <TouchableOpacity style={styles.content}>
                                    <View style={styles.imageWrap}>
                                        <Image source={require('../assets/img/jiaozi.png')} style={styles.image}/>
                                    </View>
                                    <View style={styles.infoWrap}>
                                        <Text style={styles.infoTxtTop} numberOfLines={1}>下单时间: {this.props.data.time}</Text>
                                        <Text style={styles.infoTxtBottom}>总价: ￥{this.props.data.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {
                                this.props.data.deleteActive ?
                                    (
                                        <TouchableOpacity style={styles.deleteWrap} onPress={this.deleteOrderCell}>
                                            <Image source={require('../assets/img/delete.png')} style={styles.deleteIcon}/>
                                            <Text style={styles.deleteTxt}>删除</Text>
                                        </TouchableOpacity>
                                    ): null
                            }
                        </View>
                    ): null
                }
            </View>
        )

        },
    deleteOrderCell(){
        this.props.setModal(true,this);
    },
    setDelete(val){
        this.setState({show:val})
    }
})

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginTop:10,
        flexDirection:'row',
    },
    title:{
        height:45,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
    },
    titleTxt:{
        fontSize:16,
        color:'#666'
    },
    titleIcon:{
        width:16,
        height:12,
        marginRight:5
    },
    content:{
        height:120,
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
        padding:10,
        flexDirection:'row',
    },
    imageWrap:{

    },
    image:{
        width:110,
        height:100
    },
    infoWrap:{
        marginLeft:10,
        height:100,
        justifyContent: 'space-between',
    },
    infoTxtTop:{
        marginTop:10
    },
    infoTxtBottom:{
        marginBottom:10
    },
    deleteWrap:{
        width:80,
        height:165,
        backgroundColor:'#ec542f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteIcon:{
        width:15,
        height:19
    },
    deleteTxt:{
        fontSize:16,
        color:'#fff',
        marginTop:5
    }
})
