import React, { Component } from 'react';
import FilterDropdown from './FilterDropdown/FilterDropdown';
import './Filter.scss';

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <FilterDropdown content='Phim' width='282px' />
        <FilterDropdown content='Phim' width='282px' />
        <FilterDropdown content='Phim' width='282px' />
      </div>
    );
  }
}
