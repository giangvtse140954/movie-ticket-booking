import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import Filter from './Filter/Filter';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <Filter />
      </>
    );
  }
}
