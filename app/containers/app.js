/**
 * Created by panxianwen on 16/11/7.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex: 1}}>
                    <Text>
                        If you like React on the web, you'll like React Native.
                    </Text>
                    <Text>
                        You just use native components like 'View' and 'Text',
                        instead of web components like 'div' and 'span'.
                    </Text>
            </View>
        );
    }
}