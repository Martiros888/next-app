import { createWrapper } from 'next-redux-wrapper';
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

// @ts-ignore
const App:FC = ({ Component, pageProps}) => {
    return (
        <Provider store={store}>
            <Component {...pageProps}></Component>
        </Provider>
    )
}
const makestore = () => store
const wrapper = createWrapper(makestore)


export default wrapper.withRedux(App);