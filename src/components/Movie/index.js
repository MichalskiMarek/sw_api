import React, {Component} from 'react';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCrawl: false
        }
    }

    render() {
        let showCrawl = () => {
            this.state.showCrawl ? this.setState({showCrawl: false}) : this.setState({showCrawl: true})
            ;
        };
        return (
            <li className={'movie'}>
                <div onClick={showCrawl} className={'movieTitle'}>
                    {this.props.title}
                </div>
                {window.location.href.indexOf("/Opening%20Crawl") > -1 ? (this.state.showCrawl ?
                    <div className={'openingCrawl'}>{this.props.openingCrawl}</div> : null) : null}
            </li>


        );
    }
}