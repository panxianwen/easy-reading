/**
 * Created by panxianwen on 16/11/7.
 */
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import App from './containers/app';

const store = configureStore();

export default class Root extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
