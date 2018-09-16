import React, {Component} from 'react';
//import {NavLink, BrowserRouter, Route} from 'react-router-dom';

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/films')
            .then(response=>response.json())
            .then(response => this.setState({movies: response.results}));
    }

    render() {
        console.log(this.state.movies);
        const movies = this.state.movies;
        return (
            <ul className={'movieList'}>
                {movies.map((el,i)=>{
                   return <li className={'movieTitle'} key={i}>{el.title}</li>
                })}
            </ul>
        );
    }
}
