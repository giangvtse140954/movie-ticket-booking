import React, { Component } from 'react';
import TheaterInfo from './TheaterInfo/TheaterInfo';
import TheaterShowtime from './TheaterShowtime/TheaterShowtime';

export default class TheaterDetail extends Component {
  render() {
    return (
      <>
        <TheaterInfo />
        <TheaterShowtime />
      </>
    );
  }
}
