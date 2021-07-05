import Home from '../containers/Home';
import Movies from '../containers/Movies';
import TVShows from '../containers/TvShows';
import Favorite from '../containers/Favorite';

const routes = [
    {
        path: '/',
        component: Home,
        text: 'Home'
    },
    {
        path: '/tv-shows',
        component: TVShows,
        text: 'TV Shows'
    },
    {
        path: '/movies',
        component: Movies,
        text: 'Movies'
    },
    {
        path: '/favorite',
        component: Favorite,
        text: 'Favorite'
    },
];

export default routes;