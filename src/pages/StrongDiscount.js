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
} from 'react-native';

let {width,height} = Dimensions.get('window');

import Title from '../components/Title'

export default React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Title data={{name:'威哥券'}} navigator={this.props.navigator}/>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',
    }
})