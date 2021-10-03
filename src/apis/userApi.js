import { GROUP_ID } from "../settings/apiConfig";
import callApi from "../utils/callApi";
const userApi = {
  loginApi: (user) => callApi("QuanLyNguoiDung/DangNhap", "POST", user),

  //List user
  fetchAllUserAdmin: () => {
    return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  },

  //Add user
  addUserAdmin: (formData, token) => {
    return callApi("QuanLyNguoiDung/ThemNguoiDung", "POST", formData, token);
  },

  //Delete User
  deleteUserAdmin: (taiKhoan, token) => {
    return callApi(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      "DELETE",
      null,
      token
    );
  },
  //Search User

  searchUser: (taiKhoan) => {
    return callApi(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${taiKhoan}`
    );
  },
};

export default userApi;
