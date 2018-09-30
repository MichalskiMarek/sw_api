import React, {Component} from 'react';
import NavItem from "../NavItem";
import {BrowserRouter, Route} from 'react-router-dom'
import Movies from "../Movies";
import Switch from "react-router/es/Switch";

export default class MainNav extends Component {
    render() {
        const menuItems = ['Opening Crawl', 'Characters', 'Starships', 'Planets'];
        return (
            <BrowserRouter>
                <nav>
                    <ul className={'mainNav'}>
                        {menuItems.map((el, i) => {
                            return <NavItem name={el} key={i}/>
                        })}
                    </ul>
                    <Switch>
                        <Route exact path={'/'} component={null}/>
                        <Route path={'/'} component={Movies}/>
                    </Switch>
                </nav>
            </BrowserRouter>
        );
    }
}
