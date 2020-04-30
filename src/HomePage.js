import React from 'react'
import Banner from './components/Banner'

import {useGetMovies} from './components/hooks/useGetMovies.js'

import {
    URL,
    KEY,
    SEARCH,
    POPULAR_SEARCH,
    BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE } from './helpers/config.js'


const HomePage = () => {

    const [{state, loading, error}, getMovies] = useGetMovies()

    console.log(state)

    return (
        <React.Fragment>
            <Banner />
        </React.Fragment>
    )
}

export default HomePage