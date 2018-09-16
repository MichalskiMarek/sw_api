import React, {Component} from 'react';
import NavItem from "../NavItem";
import {BrowserRouter, Route} from 'react-router-dom'
import Movies from "../Movies";

export default class MainNav extends Component {
    render() {
        return (
            <BrowserRouter>
                    <nav>
                        <ul className={'mainNav'}>
                            <NavItem name={'Movies'}/>
                            <NavItem name={'Characters'}/>
                            <NavItem name={'Starships'}/>
                            <NavItem name={'Planets'}/>
                        </ul>
                        <Route path={'/Movies'} component={Movies}/>
                    </nav>

            </BrowserRouter>
        );
    }
}
