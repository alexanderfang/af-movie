import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";

const useMovieDetail = (id) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try{
            const { data } = await tmdb.get(`/movie/${id}`);
            setMovie(data);
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return { movie, loading };
}