import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { Cascader, Select } from "antd";
import { DatePicker, Space } from "antd";
import theaterApi from "../../../apis/theaterApi";
import { Formik, useFormik } from "formik";
import moment from "moment";
import { useSelector } from "react-redux";

export default function Showtime(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      // console.log("object", values);
      try {
        const res = await theaterApi.taoLichChieu(
          values,
          currentUser.accessToken
        );
        console.log(res.data);
      } catch (error) {
        console.log(error.respoanse?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(async () => {
    try {
      let res = await theaterApi.layHeThongRap();
      setState({
        ...state,
        heThongRapChieu: res.data,
      });
    } catch (error) {}
  }, []);

  const handleOnChangeHeThongRap = async (values) => {
    console.log("mã hệ thống", values);
    try {
      const res = await theaterApi.fetchCinemaBySystemApi(values);
      setState({
        ...state,
        cumRapChieu: res.data,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

  const handleOnChangeCumRap = (values) => {
    // console.log("maRap", values);
    formik.setFieldValue("maRap", values);
  };

  const onOk = (values) => {
    // formik.setFieldValue
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log("object", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeDate = (values) => {
    // console.log("object", values);
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log("object", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeInputNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h3>Tạo lịch chiếu </h3>
        <Form.Item label="Hệ thống rạp">
          <Select
            options={state.heThongRapChieu?.map((rap, idx) => ({
              label: rap.tenHeThongRap,
              value: rap.maHeThongRap,
            }))}
            onChange={handleOnChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap, idx) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleOnChangeCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeDate}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber
            min={75000}
            max={150000}
            onChange={onChangeInputNumber}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </>
  );
}
