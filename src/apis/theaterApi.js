import { GROUP_ID } from "../settings/apiConfig";
import callApi from "../utils/callApi";

const theaterApi = {
  fetchTheaterOnMovieApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetchCinemaApi() {
    return callApi(
      `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  },
  fetchMovieByApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetchCinemaBySystemApi(systemId) {
    return callApi(
      `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${systemId}`
    );
  },

  //Lấy hệ thống rạp
  layHeThongRap() {
    return callApi(`QuanLyRap/LayThongTinHeThongRap`);
  },

  //Tạo lịch chiếu
  taoLichChieu(thongtinlichchieu, token) {
    return callApi(
      "QuanLyDatVe/TaoLichChieu",
      "POST",
      thongtinlichchieu,
      token
    );
  },

  fetchSystems() {
    return callApi(`QuanLyRap/LayThongTinHeThongRap`);
  },

};
export default theaterApi;
