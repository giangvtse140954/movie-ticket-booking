import React, { Component } from 'react';
import './Carousel.scss';
import Slider from 'react-slick';
import movieApi from '../../../../apis/movieApi';
import { getYoutubeThumbnail } from '../../../../utils/getImgFromLink';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isModalVisible: false,
      trailer: '',
    };
    this.myRef = React.createRef();
  }

  showTrailer = (trailer) => {
    this.setState({ isModalVisible: true, trailer });
  };
  handleCancel = () => {
    this.setState({ trailer: '', isModalVisible: false });
    this.myRef.current.src = this.state.trailer;
  };
  render() {
    return (
      <div className='slider'>
        <Modal
          visible={this.state.isModalVisible}
          footer={null}
          maskClosable={true}
          onCancel={this.handleCancel}
          width={1000}
          bodyStyle={{ height: '500px' }}
        >
          <iframe
            ref={this.myRef}
            width='100%'
            height='100%'
            src={this.state.trailer}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </Modal>
        <Slider>
          {this.state.movies.map((movie) => {
            let img = getYoutubeThumbnail(movie.trailer);
            return (
              <div key={movie.maPhim} className='carousel__item'>
                <img src={img} alt='img' />
                <PlayCircleOutlined
                  className='carousel__play'
                  style={{ fontSize: '5rem' }}
                  onClick={() => {
                    this.showTrailer(movie.trailer);
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
  async componentDidMount() {
    try {
      const { data } = await movieApi.fetchMovieWithPaginationApi(1, 4);
      this.setState({ movies: data.items });
    } catch (err) {
      console.log(err);
    }
  }
}
