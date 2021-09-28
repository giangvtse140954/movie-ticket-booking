import Home from '../containers/client/Home/Home';
import MovieDetail from '../containers/client/MovieDetail/MovieDetail';

export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/movie-detail',
    component: MovieDetail,
    exact: false,
    isPrivate: false,
  },
];
