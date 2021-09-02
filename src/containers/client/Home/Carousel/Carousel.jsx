import React, { Component } from 'react';
import { Image } from 'antd';
import './Carousel.scss';
import Slider from 'react-slick';
import movieApi from '../../../../apis/movieApi';

export default class Carousel extends Component {
  state = {
    movies: [],
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      // cssEase: 'linear',
    };
    return (
      <Slider {...settings}>
        {this.state.movies.map((movie) => {
          return (
            <div>
              <div className='carousel__item'>
                {/* <Image src={movie.hinhAnh} preview={false} height={'100%'} /> */}
                <img src={movie.hinhAnh} alt='hinhAnh' />
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
  async componentDidMount() {
    const { data } = await movieApi.fetchAllMovieApi();

    this.setState({ movies: data });
    console.log(data[1]);
  }
}
