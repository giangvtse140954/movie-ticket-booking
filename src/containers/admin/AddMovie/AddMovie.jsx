import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import movieApi from '../../../apis/movieApi';

export default class AddMovie extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    isSuccess: false,
  };
  onFinish = async (values) => {
    let frm = new FormData();
    for (let key in values) {
      frm.append(key, values[key]);
    }
    frm.append('hinhAnh', this.state.selectedFile);
    frm.append('maNhom', 'GP14');
    try {
      await movieApi.uploadImg(frm);

      const key = 'updatable';
      this.setState({ isSuccess: true }, () =>
        setTimeout(() => {
          message.success({ content: 'Tác vụ thành công', key, duration: 2 });
        }, 1000)
      );
    } catch (err) {
      const key = 'updatable';
      this.setState({ isSuccess: false }, () =>
        setTimeout(() => {
          message.error({
            content: err.response.data,
            key,
            duration: 2,
          });
        }, 2000)
      );
    }
  };
  onFileChange = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };
  onFinishFailed = async (errorInfo) => {};
  render() {
    return (
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Mã phim'
          name='maPhim'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Tên phim'
          name='tenPhim'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Trailer'
          name='trailer'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <input type='file' onChange={this.onFileChange} name='hinhAnh' />

        <Form.Item
          label='Mô tả'
          name='moTa'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='Lưu'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
