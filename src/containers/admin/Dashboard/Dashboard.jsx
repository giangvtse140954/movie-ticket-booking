import { Space, Table } from 'antd';
import moment from 'moment';
import './Dashboard.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../../apis/movieApi';

export default class Dashboard extends Component {
  state = {
    movies: null,
  };
  render() {
    const columns = [
      {
        title: 'Mã phim',
        dataIndex: 'maPhim',
        key: 'id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Tên phim',
        dataIndex: 'tenPhim',
        key: 'name',
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'hinhAnh',
        key: 'image',
        render: (text) => (
          <img src={text} alt='anhhh' style={{ width: '50px' }} />
        ),
      },
      {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'description',
        render: (text) => <div className='dashboard__table'>{text}</div>,
      },
      {
        title: 'Mã nhóm',
        dataIndex: 'maNhom',
        key: 'groupId',
      },
      {
        title: 'Ngày khởi chiếu',
        dataIndex: 'ngayKhoiChieu',
        key: 'date',
        render: (text) =>
          `${new Date(text).getDate()}/${
            new Date(text).getMonth() + 1
          }/${new Date(text).getFullYear()}`,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size='middle'>
            <button>Tạo lịch chiếu</button>
            <button>Sửa</button>
            <button>X</button>
          </Space>
        ),
      },
    ];
    return (
      <div>
        <Link to='/admin/add-movie'>Thêm phim</Link>
        <input type='text' /> <button>Tìm</button>
        <Table columns={columns} dataSource={this.state.movies} />
      </div>
    );
  }
  async componentDidMount() {
    try {
      const { data } = await movieApi.fetchAllMovieApi();
      console.log(data);
      this.setState({ movies: data });
    } catch (err) {
      console.log(err);
    }
  }
}
