/**
 * Created by Administrator on 2017/4/2.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import TimerMixin from 'react-timer-mixin'
let {width,height} = Dimensions.get('window');

import Title from '../components/Title'
import LoveCell from '../components/LoveCell'

export default React.createClass({
    mixins: [TimerMixin],
    getInitialState(){
        return{
            data:null
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <Title data={{name:this.props.title}} navigator={this.props.navigator}/>
                <ScrollView>
                    {
                        !this.state.data  ?
                            (<View style={styles.refreshTxtWrap}>
                                <ActivityIndicator
                                    animating={true}
                                    style={styles.activityIndicator}
                                    size="large"
                                    color='#FF6100'
                                />
                                <Text style={styles.refreshTxt}>正在刷新，请等待</Text>
                            </View>)
                            :(
                                <View>
                                    {
                                        this.renderLove()
                                    }
                                </View>
                            )
                    }

                </ScrollView>
            </View>
        )
    },
    componentDidMount(){
        this.setTimeout(()=>{
            let data=[
                {url:require('../assets/img/eat1.png'),title:'美食美食1',info:'100元代金券一张，可叠加',price:'70',index:'100',sellNum:'4666'},
                {url:require('../assets/img/eat2.png'),title:'美食美食2',info:'101元代金券一张，可叠加',price:'70',index:'100',sellNum:'4777'},
                {url:require('../assets/img/eat3.png'),title:'美食美食3',info:'102元代金券一张，可叠加',price:'70',index:'100',sellNum:'4888'},
                {url:require('../assets/img/eat4.png'),title:'美食美食4',info:'103元代金券一张，可叠加',price:'70',index:'100',sellNum:'4999'},
                {url:require('../assets/img/eat5.png'),title:'美食美食5',info:'104元代金券一张，可叠加',price:'70',index:'100',sellNum:'5099'},
                {url:require('../assets/img/eat6.png'),title:'美食美食6',info:'105元代金券一张，可叠加',price:'70',index:'100',sellNum:'5199'},
                {url:require('../assets/img/eat7.png'),title:'美食美食7',info:'106元代金券一张，可叠加',price:'70',index:'100',sellNum:'5399'},
                {url:require('../assets/img/eat8.png'),title:'美食美食8',info:'666元代金券一张，可叠加',price:'66',index:'100',sellNum:'5599'},
                {url:require('../assets/img/eat9.png'),title:'美食美食9',info:'777元代金券一张，可叠加',price:'77',index:'100',sellNum:'5699'},
                {url:require('../assets/img/eat10.png'),title:'美食美食10',info:'888元代金券一张，可叠加',price:'88',index:'100',sellNum:'5899'},
                {url:require('../assets/img/eat11.png'),title:'美食美食11',info:'999元代金券一张，可叠加',price:'99',index:'100',sellNum:'5999'},
                {url:require('../assets/img/eat12.png'),title:'美食美食12',info:'1333元代金券一张，可叠加',price:'111',index:'100',sellNum:'6199',needOrder:true},
                {url:require('../assets/img/eat13.png'),title:'美食美食13',info:'1666元代金券一张，可叠加',price:'222',index:'100',sellNum:'6399',needOrder:true},
                {url:require('../assets/img/eat14.png'),title:'美食美食14',info:'2888元代金券一张，可叠加',price:'333',index:'100',sellNum:'6699',needOrder:true},
                {url:require('../assets/img/eat15.png'),title:'美食美食15',info:'3333元代金券一张，可叠加',price:'666',index:'100',sellNum:'6899',needOrder:true},
                {url:require('../assets/img/eat16.png'),title:'美食美食16',info:'6666元代金券一张，可叠加',price:'888',index:'100',sellNum:'8899',needOrder:true},
                {url:require('../assets/img/eat17.png'),title:'美食美食17',info:'8888元代金券一张，可叠加',price:'999',index:'100',sellNum:'9999'},
            ];
            //给data打乱一下顺序
            let temp=[];
            //打乱顺序方法1(要data的所有数据)
            for(let i = data.length-1 ; i >= 0 ; i--){
                //i == 0 ? temp.push(data[0]) : temp.push(data.splice(this.getRandom(0,i),1)[0]);
                temp.push(data.splice(this.getRandom(0,i),1)[0])
            }
            this.setState({data:temp});
        },1500)
    },
    //当下级页面navigator.pop()回来的时候，重新调用了render方法
    renderLove(){
        let data=this.state.data;
        //console.log(temp);
        let arr=[];
        data.map((msg,i)=>{
            arr.push(<LoveCell key={i} data={msg} navigator={this.props.navigator}/>)
        })
        return arr;

    },
    getRandom(n,m){
        //12 - 20
        return Math.ceil(Math.random()*10000)%(m-n+1)+n;
    }
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',
    },
    refreshTxtWrap:{
        // flex: 1,
        width:width,
        height:(height-60-StatusBar.currentHeight),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.3)'
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
})