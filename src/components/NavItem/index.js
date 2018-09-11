import React, {Component} from 'react';

export default class NavItem extends Component {
    render() {
        return (
            <li className={'navItem'}>{this.props.name}</li>
        );
    }
}
