import React, { Component } from 'react';
import { Dropdown, Button, Menu, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

export default class FilterDropdown extends Component {
  handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key='1' icon={<UserOutlined />}>
          1st menu item
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
          2nd menu item
        </Menu.Item>
        <Menu.Item key='3' icon={<UserOutlined />}>
          3rd menu item
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button
            type='link'
            style={{
              color: '#000000',
              width: `${this.props.width}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRight: '1px solid #f3f3f3',
            }}
          >
            <span>{this.props.content}</span>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    );
  }
}
