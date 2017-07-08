/**
 * Created by Administrator on 2017/3/25.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Switch
} from 'react-native';

export default React.createClass({
    getInitialState(){
        return{
            myswitch:false
        }
    },
    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={this.jump}>
                <View style={styles.container}>
                    {this.renderLeft()}
                    {this.renderRight()}
                </View>
            </TouchableOpacity>
        )
    },
    jump(){
        if(!this.props.navigator) return;
        this.props.navigator.push({
            component:this.props.data.goComponent,
            // passProps:{}  //传递过去的参数
            passProps:this.props.data
        })
    },
    renderLeft(){
        let hasIcon=this.props.data.icon;
        if(hasIcon){
            return (
                <View style={styles.leftContainer}>
                    <Image style={styles.icon} source={hasIcon}></Image>
                    <Text style={[styles.text,{marginLeft:10}]} >{this.props.data.title}</Text>
                </View>
            )
        }else{
            return  <Text style={styles.text}>{this.props.data.title}</Text>
        }
    },
    renderRight(){
        let hasSwitch = this.props.data.switch;
        let hasImage = this.props.data.image;
        if(hasSwitch){
            return <Switch onValueChange={this.controlSwitch} value={this.state.myswitch}></Switch>
        }
        else if(hasImage){
            return (
                <View style={styles.rightContainer}>
                    <Image style={styles.specialImg} source={hasImage} ></Image>
                    <Image style={styles.img} source={require('../assets/img/icon_cell_rightarrow.png')}></Image>
                </View>
            )
        }
        else{
            return (
                <View style={styles.rightContainer}>
                    <Text style={styles.specialText}>{this.props.data.text}</Text>
                    <Image style={styles.img} source={require('../assets/img/icon_cell_rightarrow.png')}></Image>
                </View>
            )
        }
    },
    controlSwitch(){
        this.setState({myswitch:!this.state.myswitch})
    }
})


const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    text:{
        fontSize:14,
        color:'#333',
    },
    img:{
        width:8,
        height:13
    },
    leftContainer:{
        flexDirection:'row',
        alignItems: 'center',
        // backgroundColor:'red',
        height:40
    },
    rightContainer:{
        flexDirection:'row',
        alignItems: 'center',
        // backgroundColor:'red',
    },
    specialText:{
        marginRight:10
    },
    icon:{
        width:26,
        height:26,
        borderRadius:13
    },
    specialImg:{
        width:24,
        height:13,
        marginRight:10
    }
})