import React, {Component} from 'react';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            characters: [],
            starships: [],
            planets: []
        }
    }

    componentDidMount() {
        this.props.characters.forEach((el) => {
            fetch(el)
                .then(response => response.json())
                .then(response => this.setState({characters: [...this.state.characters, response.name]}));
        });
        this.props.starships.forEach((el) => {
            fetch(el)
                .then(response => response.json())
                .then(response => this.setState({starships: [...this.state.starships, response.name]}));
        });
        this.props.planets.forEach((el) => {
            fetch(el)
                .then(response => response.json())
                .then(response => this.setState({planets: [...this.state.planets, response.name]}));
        });
    }

    render() {
        const showCrawl = () => {
            this.state.show ? this.setState({show: false}) : this.setState({show: true});
        };
        return (
            <li className={'movie'}>
                <div onClick={showCrawl} className={'movieTitle'}>
                    {this.props.title}
                </div>
                {window.location.href.indexOf("/Opening%20Crawl") > -1 ? (this.state.show ?
                    <div className={'openingCrawl'}>{this.props.openingCrawl}</div> : null) : null}
                {window.location.href.indexOf("/Characters") > -1 ? (this.state.show ?
                    <div className={'openingCrawl'}>{this.state.characters.map((el, i) => {
                        return <div key={i}>{el}</div>
                    })}</div> : null) : null}
                {window.location.href.indexOf("/Starships") > -1 ? (this.state.show ?
                    <div className={'openingCrawl'}>{this.state.starships.map((el, i) => {
                        return <div key={i}>{el}</div>
                    })}</div> : null) : null}
                {window.location.href.indexOf("/Planets") > -1 ? (this.state.show ?
                    <div className={'openingCrawl'}>{this.state.planets.map((el, i) => {
                        return <div key={i}>{el}</div>
                    })}</div> : null) : null}
            </li>
        );
    }
}