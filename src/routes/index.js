import AddMovie from '../containers/admin/AddMovie/AddMovie';
import Dashboard from '../containers/admin/Dashboard/Dashboard';
import UserManagement from '../containers/admin/UserManagement/UserManagement';
import Home from '../containers/client/Home/Home';
import MovieDetail from '../containers/client/MovieDetail/MovieDetail';
import TheaterDetail from '../containers/client/TheaterDetail/TheaterDetail';

export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/movie-detail/:movieId',
    component: MovieDetail,
    exact: false,
    isPrivate: false,
  },
  {
    path: '/theater-detail/:theaterId',
    component: TheaterDetail,
    exact: false,
    isPrivate: false,
  },
];
export const adminRoutes = [
  {
    path: '/admin',
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/admin/user-management',
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
];
