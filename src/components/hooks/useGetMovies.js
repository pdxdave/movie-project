import {useState, useEffect} from 'react';
import {URL, KEY} from '../../helpers/config.js';

export const useGetMovies = () => {

        // need an empty array to take in the movies
        const [state, setState] = useState({ movies:[]})
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
    
        // using async await to make sure we don't move forward until we get a return
        const getMovies = async movieEndpoint => {
            // currently no errors
            setError(false)
            // loading has started
            setLoading(true)
    
            try {
                // await in parens runs first, then outer await parses the json
                const res = await (await fetch(movieEndpoint)).json()
                console.log(res)
                setState( prev => ({
                    // grab the previous state
                    ...prev,
                    movies: [...res.results],
                    // checking for bannerImage. If not there, get the first in array
                    bannerImage: prev.bannerImage || res.results[0],
                    currentPage: res.page,
                    totalPages: res.total_pages
                }))
                
            }
            catch(err){
                setError(true)
                console.log(err)
            }
            //loading has stopped
            setLoading(false)
        }
    
        // useEffect is passing the movieEndpoint to getMovies()
        useEffect(() => {
            getMovies(`${URL}movie/popular?api_key=${KEY}`)
        }, []) // [] will just run once on mount
    
        return [{state, loading, error}, getMovies]
}