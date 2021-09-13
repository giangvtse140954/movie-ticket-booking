import callApi from '../utils/callApi';

const theaterApi = {
  fetchTheaterOnMovieApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
};
export default theaterApi;
