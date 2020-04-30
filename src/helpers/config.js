
const URL = 'https://api.themoviedb.org/3/';
const KEY = 'd521a7a89e0ed4b04f04615b686ed405';

const SEARCH = `${URL}search/movie?api_key=${KEY}&query=`;
const POPULAR_SEARCH = `${URL}movie/popular?api_key=${KEY}`;

const BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
    URL,
    KEY,
    SEARCH,
    POPULAR_SEARCH,
    BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
}