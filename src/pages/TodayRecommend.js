/**
 * Created by zengwei on 2017/4/2.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

//let {width,height} = Dimensions.get('window');

import Title from '../components/Title'
import LoveCell from '../components/LoveCell'

export default React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Title data={{name:'今日推荐'}} navigator={this.props.navigator}/>
                <ScrollView>
                    {this.renderLove()}
                </ScrollView>
            </View>
        )
    },
    renderLove(){
        let data=[
            {url:require('../assets/img/eat1.png'),title:'美食美食1',info:'100元代金券一张，可叠加',price:'70',index:'100',sellNum:'4666'},
            {url:require('../assets/img/eat2.png'),title:'美食美食2',info:'101元代金券一张，可叠加',price:'70',index:'100',sellNum:'4777'},
            {url:require('../assets/img/eat3.png'),title:'美食美食3',info:'102元代金券一张，可叠加',price:'70',index:'100',sellNum:'4888'},
            {url:require('../assets/img/eat4.png'),title:'美食美食4',info:'103元代金券一张，可叠加',price:'70',index:'100',sellNum:'4999'},
            {url:require('../assets/img/eat5.png'),title:'美食美食5',info:'104元代金券一张，可叠加',price:'70',index:'100',sellNum:'5099'},
            {url:require('../assets/img/eat6.png'),title:'美食美食6',info:'105元代金券一张，可叠加',price:'70',index:'100',sellNum:'5199'},
            {url:require('../assets/img/eat7.png'),title:'美食美食7',info:'106元代金券一张，可叠加',price:'70',index:'100',sellNum:'5399'},
        ];
        let arr=[];
        data.map((msg,i)=>{
            arr.push(<LoveCell key={i} data={msg} navigator={this.props.navigator}/>)
        })
        return arr;

    },
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',
    }
})
