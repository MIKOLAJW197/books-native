import React from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import BookSearchNavigation from './app/routing'
import {createAppContainer} from 'react-navigation';

const NavContainer = createAppContainer(BookSearchNavigation);

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({isReady: true});
    }

    render() {

        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <NavContainer/>
        );
    }
}

