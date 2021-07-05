import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { img_base_url } from "../configs";

export default function MovieDetail(){
    const { id } = useParams();
    const { movie, loading } = useMovieDetail(id);
    return (
        movie ? (
            <>  
                {/* <img
                    src={`${img_base_url}/original${movie.backdrop_path}`}
                    alt="backdrop_img"
                    style={{
                            objectFit: 'cover',
                            height: '80vh',
                            width: '100%',
                    }}
                /> */}
                <MovieBanner loading={loading} movie={movie} />
                <Container>
                    <Typography color={textPrimary}>
                        ID: {id}
                    </Typography>
                </Container>
            </>
        ) : null
    );
}