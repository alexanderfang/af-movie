import { Grid } from "@material-ui/core";
import MovieItem from "./MovieItem/MovieItem";

export default function GridList({movies}) {
    return (
        <Grid
            container
            direction="row"
            alignContent="space-between"
            justify="flex-start">
                {
                    movies.slice(1, movies.length - 1).map((movie,i) => (
                        <div key={i}>
                            <MovieItem movie={movie}/>
                        </div>
                    ))
                }
        </Grid>
    );
}