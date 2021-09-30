import { GROUP_ID } from '../settings/apiConfig';
import callApi from '../utils/callApi';

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
};
export default theaterApi;
