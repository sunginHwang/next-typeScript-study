import App, {Container} from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import configureStore from '../core/store/configureStore';
import { Provider } from 'react-redux'


export default withRedux(configureStore)( class MyApp extends App  {


    render () {
        const {props} = this as any;
        console.log(props);
        const {Component, pageProps, store} = props;
        return <Container>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Container>
    }
} as any )