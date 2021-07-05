import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";

const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        try{
            const { data } = await tmdb.get(`/movie/now_playing`);
            setMovies(data.results);
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { movies, loading };
}

export default useMovies;