import React, { useCallback, useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useMovies from "../hooks/useMovies";
import MovieCardLoader from "../components/MovieCardLoader";
import MovieBanner from "../components/MovieBanner";
import MovieItem from "../components/MovieItem/MovieItem";
import GridList from "../components/GridList";
import tmdb from "../api/tmdb";
import { movie_popular } from "../configs/urls";

const Home = () => {
    const {movies, loading} = useMovies();
    const [popular, setPopular] = useState([]);
    const highlight = movies[0];

    const getPopularMovies = useCallback(async () => {
        const { data } = await tmdb.get(movie_popular);
        setPopular(data.results);
    }, []);

    useEffect(() => {
        getPopularMovies();
    }, [getPopularMovies]);

    return (
        <>
            {highlight ? (
                <MovieBanner movie={highlight} loading={loading} />
            ) : null}
            <Container maxWidth="xl">
                <div style={{marginBottom: 24}}>
                    <Typography variant="h4" color="textPrimary" style={{ fontWeight: "bold" }}>
                        Popular Movies
                    </Typography>
                    <GridList movies={popular}/>
                    <Typography variant="h4" color="textPrimary" style={{ fontWeight: "bold" }}>
                        Now Playing
                    </Typography>
                    <GridList movies={movies}/>
                </div>
            </Container>
        </>
    );
}

export default Home;