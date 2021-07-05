import React from "react";
import {
    Container,
    makeStyles,
    Typography,
    Button,
    Card,
    CardMedia,
} from "@material-ui/core";
import MovieCardLoader from "./MovieCardLoader";
import MovieCardSmall from "./MovieCardSmall";
import { img_base_url } from "../configs";
import { MdAdd, MdInfoOutline } from "react-icons/md";

const useStyles = makeStyles({
    banner: {
        position: 'relative',
        marginBottom: 24,
    },
    banner_img: {
        objectFit: 'cover',
        height: '80vh',
        width: '100%',
    },
    banner_overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    banner_overlay_title: {
        display: 'flex',
        alignItems: 'center',
        background: 'rgb(33,33,33)',
        background: 'linear-gradient(0deg,rgba(33,33,33,1) 0%, rgba(255,255,255,0) 0%)',
        color: 'white',
        width: '100%',
        height: '70%',
        padding: 24,
    },
    banner_overlay_title_text: { width: '50%' }
});

export default function MovieBanner({ movie, loading }){
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            {loading ? (
                <MovieCardLoader />
            ) : (
                <>
                    <div style={{ background: 'linear-gradient(0deg, rgba(33,33,33,1), rgba(255,255,255,0))', height: "80vh", width: "100%", position: "absolute" }}>
                    </div>
                    <img
                        src={`${img_base_url}/original${movie.backdrop_path}`}
                        alt="backdrop_img"
                        className={classes.banner_img}/>
                </>
            )}
            <div className={classes.banner_overlay}>
                <div className={classes.banner_overlay_title}>
                    <MovieCardSmall image={movie.poster_path}/>
                    <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                            {`${movie.original_title} (${movie.release_date.split('-')[0]})`}
                    </Typography>
                </div>
            </div>
        </div>
    );
}