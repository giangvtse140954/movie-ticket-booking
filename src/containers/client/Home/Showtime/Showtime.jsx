import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';
import './Showtime.scss';
import theaterApi from '../../../../apis/theaterApi';
import { Link } from 'react-router-dom';

export default class Showtime extends Component {
  state = {
    cinemaSystems: null,
    selectedCinemaSystem: null,
    cinema: null,
    selectedCinema: null,
  };
  onSystemClick = (system) => {
    this.setState({
      selectedCinemaSystem: system,
      cinema: system.lstCumRap,
      selectedCinema: system.lstCumRap[0],
    });
  };
  onCinemaClick(cinema) {
    this.setState({ selectedCinema: cinema });
  }
  render() {
    return (
      <div className='showtime'>
        {this.state.cinemaSystems && this.state.cinemaSystems.length > 0 ? (
          <Row>
            <Col span={2}>
              {this.state.cinemaSystems.map((theater) => {
                return (
                  <div
                    className={`showtime__item  ${
                      theater.maHeThongRap ===
                      this.state.selectedCinemaSystem.maHeThongRap
                        ? 'active'
                        : ''
                    }`}
                    key={theater.maHeThongRap}
                  >
                    <div className='showtime__theater'>
                      <img
                        src={theater.logo}
                        alt=''
                        className='showtime__img'
                        onClick={() => this.onSystemClick(theater)}
                      />
                    </div>
                  </div>
                );
              })}
            </Col>
            <Col span={8}>
              {this.state.cinema.map((item) => {
                return (
                  <Row
                    className={`showtime__item ${
                      item.maCumRap === this.state.selectedCinema.maCumRap
                        ? 'active'
                        : ''
                    }`}
                    key={item.maCumRap}
                    onClick={() => this.onCinemaClick(item)}
                  >
                    <Col span={6}>
                      <img
                        src='https://i2.wp.com/www.dasym.com/wp-content/uploads/2017/07/Cinema-Image-by-Alexandre-Chassignon-on-Flickr.jpg?fit=2304%2C1728&ssl=1'
                        alt=''
                        width='50px'
                        height='50px'
                      />
                    </Col>
                    <Col span={18}>
                      <span style={{ fontSize: '14px', fontWeight: '700' }}>
                        {item.tenCumRap}
                      </span>
                      <br />
                      <div className='showtime__cinema'>
                        <span style={{ fontSize: '12px', color: 'gray' }}>
                          {item.diaChi}
                        </span>
                      </div>
                      {/* <Link/> */}
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col span={14}>
              {this.state.selectedCinema.danhSachPhim.map((movie) => {
                let check = false;
                const length = movie.lstLichChieuTheoPhim.length;
                return (
                  <Row key={movie.maPhim} className='showtime__movie'>
                    <Col span={4}>
                      <img src={movie.hinhAnh} alt='hhinhAnh' />
                    </Col>
                    <Col span={20}>
                      <span style={{ fontSize: '14px', fontWeight: '700' }}>
                        {movie.tenPhim}
                      </span>
                      <br />
                      {movie.lstLichChieuTheoPhim.map((showtime, i) => {
                        const time = new Date(showtime.ngayChieuGioChieu);
                        const current = new Date();
                        if (time >= current) {
                          check = true;
                          return (
                            <Link
                              className='showtime__time'
                              to={`/movie-detail/${showtime.maLichChieu}`}
                              key={showtime.maLichChieu}
                            >
                              {time.getHours()}:{time.getMinutes()}{' '}
                            </Link>
                          );
                        }
                        if (length - 1 === i && !check) {
                          return <p key='1'>Hiện đã hết suất chiếu</p>;
                        }
                        return null;
                      })}
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        ) : (
          <div className='spinner'>
            <Spin />
          </div>
        )}
      </div>
    );
  }
  async componentDidMount() {
    const { data } = await theaterApi.fetchCinemaApi();
    let selectedCinemaSystem = null;
    let cinema = null;
    let selectedCinema = null;
    if (data.length > 0) {
      selectedCinemaSystem = data[0];
      if (data[0].lstCumRap && data[0].lstCumRap.length > 0) {
        cinema = data[0].lstCumRap;
        if (cinema && cinema.length > 0) {
          selectedCinema = cinema[0];
        }
      }
    }
    this.setState({
      cinemaSystems: data,
      selectedCinemaSystem,
      cinema,
      selectedCinema,
    });
  }
}
