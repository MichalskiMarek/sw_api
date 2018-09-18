import React, {Component} from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';

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
        const movies = this.state.movies;
        movies.sort((a,b)=>{
            let keyA = a.episode_id;
            let keyB = b.episode_id;
            return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
        });
        return (
            <BrowserRouter>
                <ul className={'movieList'}>
                    {movies.map((el,i)=>{
                        return <NavLink key={el.title} to={el.title}><li className={'movieTitle'} key={i}>{el.title}</li></NavLink>
                    })}
                </ul>
            </BrowserRouter>
        );
    }
}
