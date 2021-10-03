import { Form, Input, Button, message } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import userApi from "../../../../apis/userApi";

class AddUser extends Component {
  state = {
    isSuccess: false,
  };
  onFinish = async (values) => {
    const token = this.props.currentUser.accessToken;
    // console.log("token", token);
    let formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    try {
      await userApi.addUserAdmin(formData, token);
      const key = "updatable";
      this.setState({ isSuccess: true }, () =>
        setTimeout(() => {
          message.success({ content: "Tác vụ thành công", key, duration: 2 });
        }, 1000)
      );
    } catch (err) {
      const key = "updatable";
      this.setState({ isSuccess: false }, () =>
        setTimeout(() => {
          message.error({
            content: err.response?.data,
            key,
            duration: 2,
          });
        }, 2000)
      );
    }
  };
  render() {
    return (
      <>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số Điện Thoại"
            name="soDt"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mã nhóm"
            name="maNhom"
            rules={[{ required: true, message: "Vui lòng nhập mã nhóm!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mã Loại Người Dùng"
            name="maLoaiNguoiDung"
            rules={[
              { required: true, message: "Vui lòng nhập loại người dùng!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Họ Tên"
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="Lưu">
              Thêm Người dùng
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});

export default connect(mapStateToProps, null)(AddUser);
