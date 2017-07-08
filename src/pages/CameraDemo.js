/**
 * Created by Administrator on 2017/3/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Vibration,
    View,
    StatusBar
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

import Title from '../components/Title'
import ScanRes from './ScanRes'

class BarcodeScannerApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: '',
            cameraType: 'back',
            text: '请扫描二维码',
            torchMode: 'off',
            type: '',
        };
    }

    componentDidMount(){
        this.lock=false;
    }

    barcodeReceived(e) {
        if(this.lock) return;
        this.lock=true;
        this.props.navigator.push({
            component:ScanRes,
            // passProps:{}  //传递过去的参数
            passProps:{url:e.data}
        })
        //if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();

        /*this.setState({
            barcode: e.data,
            text: `${e.data} (${e.type})`,
            type: e.type,
        });*/
    }

    render() {
        return (
            <View style={styles.container}>
                <Title navigator={this.props.navigator} data={{name:'返回',statuActive:true,backgroundStyle:{backgroundColor:'rgba(0,0,0,0.7)'}}}/>
                <BarcodeScanner
                    onBarCodeRead={this.barcodeReceived.bind(this)}
                    style={{ flex: 1}}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                />
                <View style={styles.statusBar}>
                    <Text style={styles.statusBarText}>{this.state.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e8e8e8'
    },
    statusBar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    statusBarText: {
        fontSize: 20,
        color:'#fff'
    },
});

export default BarcodeScannerApp;
