import callApi from '../utils/callApi';

const bookingApi = {
  createShowtimeApi(data, token) {
    return callApi(`QuanLyDatVe/TaoLichChieu`, 'POST', data, token);
  },
};

export default bookingApi;
