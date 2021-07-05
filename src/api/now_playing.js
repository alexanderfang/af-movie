import tmdb from './tmdb';
const { now_playing } = require('../configs/urls');

const getNowPlaying = async (page) => {
    const { data } = await tmdb.get(now_playing, {params: {page}, headers: {'x-api-key': 'apikey'}});
    return data.results;
};

export default getNowPlaying;