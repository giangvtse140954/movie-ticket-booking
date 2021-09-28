import callApi from '../utils/callApi';
const userApi = {
  loginApi: (user) => callApi('QuanLyNguoiDung/DangNhap', 'POST', user),
};

export default userApi;
