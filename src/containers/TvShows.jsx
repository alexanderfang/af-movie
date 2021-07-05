import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import tmdb from "../api/tmdb";
import MovieCardLoader from "../components/MovieCardLoader";
import TVItem from "../components/TVItem";
import { tv_popular } from "../configs/urls";
// import useTVShows from "../hooks/useTVShows";

export default function TVShows(){
    const [page, setPage] = useState(1);
    // const {loading, totalPage, tvShows} = useTVShows(page);

    const prevPage = () => {
        setPage(page - 1);
    };

    const nextPage = () => {
        setPage(page + 1);
    };

    return (
        <Container>
            <div style={{ height: 64 }}></div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                <Typography variant="h5" component="span" color="textPrimary">
                    Popular TV Shows
                </Typography>
                <div style={{ flexGrow: 1 }}></div>
                <IconButton onClick={prevPage} disabled={page===1}>
                    <MdChevronLeft />
                </IconButton>
            </div>
        </Container>
    );
}