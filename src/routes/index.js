import AddMovie from "../containers/admin/AddMovie/AddMovie";
import Dashboard from "../containers/admin/Dashboard/Dashboard";
import UserManagement from "../containers/admin/UserManagement/UserManagement";
import AddUser from "../containers/admin/UserManagement/AddUser/AddUser";
import Home from "../containers/client/Home/Home";
import MovieDetail from "../containers/client/MovieDetail/MovieDetail";
import TheaterDetail from "../containers/client/TheaterDetail/TheaterDetail";
import Showtime from "../containers/admin/Showtime/Showtime";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/movie-detail/:movieId",
    component: MovieDetail,
    exact: false,
    isPrivate: false,
  },
  {
    path: "/theater-detail/:theaterId",
    component: TheaterDetail,
    exact: false,
    isPrivate: false,
  },
];
export const adminRoutes = [
  {
    path: "/admin",
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/user-management",
    component: UserManagement,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/admin/movie-detail',
    component: AddMovie,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/add-user",
    component: AddUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/showtime/:id",
    component: Showtime,
    exact: true,
    isPrivate: true,
  },
];
