import React, { Component } from "react";
import { connect } from "react-redux";
import userApi from "../../../apis/userApi";
import "./LichSuDatVe.scss";

class LichSuDatVe extends Component {
  state = {
    thongTinNguoiDung: "",
  };

  render() {
    return (
      <>
        <div className="container-fluid lichSuDatVe">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 text-left ">
              <h2>Thông Tin Người Dùng</h2>
              <div>
                <p>
                  <span className="font-weight-bold">Tài Khoản</span> :{" "}
                  {this.state.thongTinNguoiDung.taiKhoan}
                </p>
                <p>
                  <span className="font-weight-bold">Email</span> :{" "}
                  {this.state.thongTinNguoiDung.email}
                </p>
                <p>
                  <span className="font-weight-bold">Số Điện Thoại</span> :{" "}
                  {this.state.thongTinNguoiDung.soDT}
                </p>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12  ">
              <h2>Lịch Sử Đặt Vé</h2>

              {this.state.thongTinNguoiDung.thongTinDatVe?.map((ve, index) => {
                console.log(ve.danhSachGhe);
                return (
                  <div key={index}>
                    <div className="row mb-4">
                      <div className="col-3  text-left  ">
                        <p>
                          <span className="font-weight-bold">Tên Phim</span> :{" "}
                          {ve.tenPhim}
                        </p>
                        <p>
                          <span className="font-weight-bold">Giá Vé</span> :{" "}
                          {ve.giaVe}
                        </p>
                        <p>
                          <span className="font-weight-bold">Mã Vé</span> :{" "}
                          {ve.maVe}
                        </p>
                        <p>
                          <span className="font-weight-bold">Ngày Đặt</span> :{" "}
                          {ve.ngayDat}
                        </p>
                        <p>
                          <span className="font-weight-bold">
                            Thời Lượng Phim
                          </span>{" "}
                          : {ve.thoiLuongPhim} Phút
                        </p>
                      </div>
                      <div clasName="col-3  ">
                        {ve.danhSachGhe?.map((ghe, index) => {
                          return (
                            <div key={index}>
                              <p className="text-black">
                                Ghế {ghe.tenGhe}-{ghe.tenCumRap}-
                                {ghe.tenHeThongRap}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    // console.log(this.props.currentUser);
    userApi
      .layThongTinNguoiDung({ taiKhoan: this.props.currentUser.taiKhoan })
      .then((res) => {
        console.log(res.data);
        this.setState({
          thongTinNguoiDung: res.data,
        });
      })
      .catch((error) => {
        console.log(error.response?.data);
      });
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});

export default connect(mapStateToProps)(LichSuDatVe);
