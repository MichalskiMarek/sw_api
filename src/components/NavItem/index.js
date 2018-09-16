import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";

export default class NavItem extends Component {
    render() {
        return (
            <NavLink to={'/'+this.props.name}  className={'navItem'}><li>{this.props.name}</li></NavLink>
        );
    }
}
