/**
 * Created by Administrator on 2017/4/1.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';

// const Dimensions = require('Dimensions');
// let {width,height,scale} = Dimensions.get('window');

let changeData = require('../data/Address.json');
let sortData = require('../data/AddressSort.json');

import Title from '../components/Title'

export default React.createClass({
    getInitialState(){
        let getSectionData = function (dataBlob, sectionID) {
            return dataBlob[sectionID];
        }

        let getRowData = function (dataBlob, sectionID, rowID) {
            return dataBlob[sectionID + ':' + rowID];
        }
        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }),
        }
    },
    render(){
        return(
            <View style={styles.container}>
                {/*头部*/}
                <Title navigator={this.props.navigator} data={{name:'威哥电商'}}/>
                {/*地址块*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    contentContainerStyle={styles.container}
                />
            </View>
        )
    },
    componentDidMount(){
        //优化一下，不用每次进来都循环
        if(!this.props.tempData) {
            for (var i in sortData) {
                for (var j in changeData) {
                    if (changeData[j]['pinyin'].charAt(0) == sortData[i]['title']) {
                        sortData[i]['city'].push(changeData.splice(j, 1)[0]);
                    }
                }
            }
            this.props.setData(sortData);
        }
        let data = this.props.tempData||sortData;
        //console.log(data)
        let dataBlob = {}, sectionIDs = [], rowIDs = [], arr = [];
        for (let i = 0; i < data.length; i++) {
            sectionIDs.push(i);
            dataBlob[i] = data[i].title;
            rowIDs[i] = [];
            arr = data[i].city;
            for (let j = 0; j < arr.length; j++) {
                rowIDs[i].push(j);
                dataBlob[i + ':' + j] = arr[j]
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    },
    renderRow(data){
        return(
            <TouchableOpacity activeOpacity={0.3} onPress={()=>{this.setCity(data.name)}}>
                <View style={styles.rowStyle}>
                    <Image source={data.icon} style={styles.imageStyle}></Image>
                    <Text style={styles.textStyle}>{data.name}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    renderSectionHeader(data,id){
        return(
            <TouchableOpacity style={styles.sectionStyle}>
                <Text style={{color:'#333',fontSize:20}}>{data}</Text>
            </TouchableOpacity>
        )
    },
    setCity(name){
        this.props.setCity(name);
        this.props.navigator.pop();
    }
})

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'#fff'
    },
    header:{
        flexDirection:'row',
        height:60,
        alignItems: 'center',
        backgroundColor: '#FF6100',
    },
    headerBackWrap:{
        paddingLeft:15,
        paddingRight:15,
    },
    backIcon:{
        width:7,
        height:13
    },
    imageStyle:{
        width:80,
        height:80,
        borderRadius:40,
        // marginLeft:10,
    },
    sectionStyle:{
        height:40,
        justifyContent: 'center',
        paddingLeft:10,
        backgroundColor:'#e8e8e8'
    },
    rowStyle:{
        flexDirection:'row',
        alignItems: 'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        padding:10
    },
    textStyle:{
        marginLeft:10,
        color:'#333',
        fontSize:16
    }
})