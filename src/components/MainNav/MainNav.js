import React, {Component} from 'react';
import NavItem from "../NavItem";

export default class MainNav extends Component {
    render() {
        return (
            <nav >
                <ul className={'mainNav'}>
                    <NavItem name={'Movies'}/>
                    <NavItem name={'Characters'}/>
                    <NavItem name={'Starships'}/>
                    <NavItem name={'Planets'}/>
                </ul>
            </nav>
        );
    }
}
