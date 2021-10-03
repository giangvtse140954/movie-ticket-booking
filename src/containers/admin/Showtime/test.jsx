import React, { Component } from "react";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { Cascader, Select } from "antd";
import { DatePicker, Space } from "antd";
import theaterApi from "../../../apis/theaterApi";
import { Formik } from "formik";

export default class Showtime extends Component {
  state = {
    heThongRapChieu: null,
    cumRapChieu: null,
  };

  handleOnChangeHeThongRap = async (values) => {
    console.log("mã hệ thống", values);
    try {
      const res = await theaterApi.fetchCinemaBySystemApi(values);
      this.setState({
        ...this.state,
        cumRapChieu: res.data,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

  handleOnChangCumRap = (values) => {};

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div>
        <Formik
          initialValues={{
            maPhim: this.props.match.params.id,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: "",
          }}
          onSubmit={(values) => {
            console.log("values", values);
          }}
          render={(fomikProps) => (
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onSubmitCapture={fomikProps.handleSubmit}
            >
              <Form.Item label="Hệ thống rạp">
                <Select
                  options={this.state.heThongRapChieu?.map((rap, idx) => ({
                    label: rap.tenHeThongRap,
                    value: rap.maHeThongRap,
                  }))}
                  onChange={this.handleOnChangeHeThongRap}
                  placeholder="Chọn hệ thống rạp"
                />
              </Form.Item>
              <Form.Item label="Cụm rạp">
                <Select
                  options={this.state.cumRapChieu?.map((cumRap, idx) => ({
                    label: cumRap.tenCumRap,
                    value: cumRap.tenCumRap,
                  }))}
                  onChange={fomikProps.setFieldValue("maRap", value)}
                  placeholder="Chọn cụm rạp"
                />
              </Form.Item>
              <Form.Item label="Ngày chiếu giờ chiếu">
                <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime />
              </Form.Item>
              <Form.Item label="Giá vé">
                <InputNumber min={75000} max={150000} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button>Tạo lịch chiếu</Button>
              </Form.Item>
            </Form>
          )}
        />
      </div>
    );
  }
  async componentDidMount() {
    try {
      const res = await theaterApi.layHeThongRap();
      this.setState({
        ...this.state,
        heThongRapChieu: res.data,
      });
      console.log(this.state.heThongRapChieu);
    } catch (error) {
      console.log(error);
    }
  }
}
