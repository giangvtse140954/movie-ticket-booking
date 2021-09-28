import { GROUP_ID } from '../settings/apiConfig';
import callApi from '../utils/callApi';

const theaterApi = {
  fetchTheaterOnMovieApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  // fetchCinemaSystemApi() {
  //   return callApi(`QuanLyRap/LayThongTinHeThongRap`);
  // },
  // fetchCinemaApi(cinameSystem) {
  //   return callApi(
  //     `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinameSystem}`
  //   );
  // },
  fetchCinemaApi() {
    return callApi(
      `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  },
};
export default theaterApi;
