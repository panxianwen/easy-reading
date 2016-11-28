/**
 * Created by panxianwen on 16/11/27.
 */
import React from 'react';
import {
    Dimensions,
    Animated
} from 'react-native';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../img/splash.png');

export default class Splash extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.bounceValue,
            {toValue: 1.2, duration: 1000}
        ).start();

        this.timer = setTimeout(()=>{
            const { navigator } = this.props;

        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return(
            <Animated.Image
                style={{ width: maxWidth,
                    height: maxHeight,
                    transform: [{ scale: this.state.bounceValue }] }}
                source={splashImg}
            />
        );
    }
}