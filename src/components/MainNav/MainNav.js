import React, {Component} from 'react';
import NavItem from "../NavItem";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Movies from "../Movies";

export default class MainNav extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <nav>
                        <ul className={'mainNav'}>
                            <NavItem name={'Movies'}/>
                            <NavItem name={'Characters'}/>
                            <NavItem name={'Starships'}/>
                            <NavItem name={'Planets'}/>
                        </ul>
                        <Route path={'/Movies'} component={Movies}/>
                    </nav>
                </Switch>

            </BrowserRouter>
        );
    }
}
