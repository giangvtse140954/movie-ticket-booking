import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { UserOutlined, AimOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img
          src='https://tix.vn/app/assets/img/icons/web-logo.png'
          alt='logo'
        />
        <ul className='header__nav'>
          <li>
            <Link to='/'>Lịch chiếu</Link>
          </li>
          <li>
            <Link to='/'>Cụm rạp</Link>
          </li>
          <li>
            <Link to='/'>Tin tức</Link>
          </li>
          <li>
            <Link to='/'>Ứng dụng</Link>
          </li>
        </ul>
        <div className='header__private'>
          <div className='header__item'>
            <Link to='/'>
              <Avatar icon={<UserOutlined />} />
              <span className='header__text'>Đăng nhập</span>
            </Link>
          </div>
          <div className='header__item'>
            <Link to='/'>
              <Avatar icon={<AimOutlined />} />
              <span className='header__text'>Hồ Chí Minh</span>
              <DownOutlined />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
