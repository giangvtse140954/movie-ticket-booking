import React, { Component } from 'react';
import './TheaterDetail.scss';
import TheaterInfo from './TheaterInfo/TheaterInfo';

export default class TheaterDetail extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <>
        <TheaterInfo />
      </>
    );
  }
}
