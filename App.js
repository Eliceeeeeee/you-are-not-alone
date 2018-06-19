import React, { Component } from 'react';
import { Container,BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Home from './Component/page/Home';
import Search from './Component/page/Search';
import Cart from './Component/page/Cart';
import WishList from './Component/page/WishList';
import Map from './Component/page/Map';
import Newsletter from './Component/page/Newsletter';
import Contact from './Component/page/Contact';
import Category from './Component/page/Category';
import Product from './Component/page/Product';
import ImageGallery from './Component/page/ImageGallery';
import Login from './Component/page/Login';
import Signup from './Component/page/Signup';
import Checkout from './Component/page/Checkout';

export default class App extends Component {
	constructor(props) {
        super(props);
    } 
	componentWillMount = () => {
	    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
	};
    render() {
        return (
            <Root>
                <Router>
                    <Scene key="root">
                        <Scene initial key="home" component={Home} hideNavBar />
                        {/* <Scene key="search" component={Search} modal hideNavBar />
                        <Scene key="cart" component={Cart} modal hideNavBar />
                        <Scene key="wishlist" component={WishList} modal hideNavBar />
                        <Scene key="map" component={Map} modal hideNavBar />
                        <Scene key="contact" component={Contact} modal hideNavBar />
                        <Scene key="newsletter" component={Newsletter} modal hideNavBar />
                        <Scene key="category" component={Category} hideNavBar />
                        <Scene key="product" component={Product} hideNavBar />
                        <Scene key="imageGallery" component={ImageGallery} modal hideNavBar /> */}
                        <Scene key="login" component={Login} hideNavBar />
                        <Scene key="signup" component={Signup} hideNavBar />
                        {/* <Scene key="checkout" component={Checkout} hideNavBar />  */}
                    </Scene>
                </Router>
            </Root>
        );
    }
}
