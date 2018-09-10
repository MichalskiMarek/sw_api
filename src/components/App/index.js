import React, {Component} from 'react';
import './App.css';
import MainNav from "../MainNav/MainNav";
//import {NavLink, BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <MainNav/>
            </div>
        );
    }
}
