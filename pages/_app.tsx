import App, {Container} from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import initializeStore from '../core/store/configureStore';
import { Provider } from 'react-redux'


export default withRedux(initializeStore)( class MyApp extends App  {


    render () {
        const {props} = this as any;
        const {Component, pageProps, store} = props;
        
        return <Container>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Container>
    }
} as any)