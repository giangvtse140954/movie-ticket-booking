import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import Filter from './Filter/Filter';
import './Home.scss';
import MovieList from './MovieList/MovieList';

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <Filter />
        <MovieList />
      </>
    );
  }
}
