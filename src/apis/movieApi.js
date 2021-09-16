import { GROUP_ID } from '../settings/apiConfig';
import callApi from '../utils/callApi';

const movieApi = {
  fetchAllMovieApi() {
    return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },
  fetchMovieWithPaginationApi(pageNum, numOfItems, movieName = null) {
    const url = `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}${
      movieName ? `&tenPhim=${movieName}` : ''
    }&soTrang=${pageNum}&soPhanTuTrenTrang=${numOfItems}`;
    return callApi(url);
  },
  fetchMovieOnDateApi(from, to, pageNum, numOfItems, movieName = null) {
    const url = `QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=${GROUP_ID}&${
      movieName ? `tenPhim=${movieName}&` : ''
    }soTrang=${pageNum}&soPhanTuTrenTrang=${numOfItems}&tuNgay=${from}&denNgay=${to}`;
    return callApi(url);
  },
};

export default movieApi;
