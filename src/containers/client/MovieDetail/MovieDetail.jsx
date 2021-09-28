import { Col, Row, Spin } from 'antd';
import React, { Component } from 'react';
import theaterApi from '../../../apis/theaterApi';
import './MovieDetail.scss';
export default class MovieDetail extends Component {
  state = {
    movie: null,
  };
  render() {
    const { movie } = this.state;
    let strDate = '';
    if (movie) {
      const date = new Date(movie.ngayKhoiChieu);
      strDate =
        date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
    return (
      <>
        {movie ? (
          <div className='info'>
            <div className='info__container'>
              <h2>{movie.tenPhim}</h2>
              <Row>
                <Col span={6}>
                  <div className='info__poster'>
                    <img src={movie.hinhAnh} alt='anhanh' />
                  </div>
                </Col>
                <Col span={14}>
                  <div className='info__detail'>
                    <h2>{movie.tenPhim}</h2>
                    <p>{movie.moTa}</p>
                    <p>
                      Thời lượng:{' '}
                      {
                        movie.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]
                          .thoiLuong
                      }
                    </p>
                    <p>Ngày khởi chiếu: {strDate}</p>
                    <p>
                      Giá vé:{' '}
                      {
                        movie.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]
                          .giaVe
                      }
                    </p>
                    <button className='info__button'>XEM TRAILER</button>
                    <button className='info__button'>MUA VÉ NGAY</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          <Spin />
        )}
      </>
    );
  }
  async componentDidMount() {
    try {
      const { data } = await theaterApi.fetchMovieByApi(
        this.props.match.params.movieId
      );
      console.log(data);
      this.setState({ movie: data });
    } catch (err) {
      console.log(err);
    }
  }
}
