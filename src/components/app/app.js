import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopHeader from '../shop-header';
import './app.css';
import {HomePage, CartPage} from '../pages';

const App = () => {
    return (
        <main role = 'main' className = "container">
            <ShopHeader numItems = {5} total = {650}/>
            <Switch>
                <Route path='/' 
                    component = {HomePage} 
                    exact/>
                <Route path='/cart' 
                    component = {CartPage} 
                    />
            </Switch>
        </main>
    );
};

export default App;