import { Space, Table, Button } from "antd";
import "./Dashboard.scss";

import React, { Component } from "react";
import movieApi from "../../../apis/movieApi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    movies: null,
  };
  onDeleteClick = async (movieId) => {
    console.log(movieId);
    try {
      await movieApi.deleteMovie(movieId, this.props.currentUser.accessToken);
      const { data } = await movieApi.fetchAllMovieApi();
      this.setState({ movies: data });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const columns = [
      {
        title: "Mã phim",
        dataIndex: "maPhim",
        key: "id",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Tên phim",
        dataIndex: "tenPhim",
        key: "name",
      },
      {
        title: "Hình ảnh",
        dataIndex: "hinhAnh",
        key: "image",
        render: (text) => (
          <img src={text} alt="anhhh" style={{ width: "50px" }} />
        ),
      },
      {
        title: "Mô tả",
        dataIndex: "moTa",
        key: "description",
        render: (text) => <div className="dashboard__table">{text}</div>,
      },
      {
        title: "Mã nhóm",
        dataIndex: "maNhom",
        key: "groupId",
      },
      {
        title: "Ngày khởi chiếu",
        dataIndex: "ngayKhoiChieu",
        key: "date",
        render: (text) =>
          `${new Date(text).getDate()}/${
            new Date(text).getMonth() + 1
          }/${new Date(text).getFullYear()}`,
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Link to={`/admin/showtime/${record.maPhim}`}>
              <Button>Tạo lịch chiếu</Button>
            </Link>

            <button>Sửa</button>
            <button
              onClick={() => {
                this.onDeleteClick(record.maPhim);
              }}
            >
              X
            </button>
          </Space>
        ),
      },
    ];
    return (
      <div>
        <Link to="/admin/add-movie">Thêm phim</Link>
        <input type="text" /> <button>Tìm</button>
        <Table columns={columns} dataSource={this.state.movies} />
      </div>
    );
  }
  async componentDidMount() {
    try {
      const { data } = await movieApi.fetchAllMovieApi();
      this.setState({ movies: data });
    } catch (err) {
      console.log(err);
    }
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});
export default connect(mapStateToProps)(Dashboard);