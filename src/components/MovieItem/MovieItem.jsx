import MovieCardSmall from "../MovieCardSmall";
import { Card, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { img_base_url } from "../../configs";

const useStyles = makeStyles({
    flipCard: {
        backgroundColor: "transparent",
        width: "300px",
        height: "450px",
        perspective: "1000px",
        "&:hover": {
            "& $flipCardInner": {
                transform: "rotateY(180deg)",
            }
        },
        borderRadius: 5, 
        marginBottom: 24, 
        marginRight: 10
    },
    flipCardInner: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        transition: "transform 0.8s",
        transformStyle: "preserve-3d",
        borderRadius: 5,
    },
    flipCardFront: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        backgroundColor: "rgb(33,33,33)",
        color: "black",
        borderRadius: 5,
    },
    flipCardBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        backgroundColor: "rgb(33,33,33)",
        color: "white",
        transform: "rotateY(180deg)",
        borderRadius: 5,
    }
});

const MovieItem = ({movie}) => {
    const classes = useStyles();
    return(
        <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                    <Card raised={true}>
                        <CardMedia 
                            image={`${img_base_url}/w500${movie.poster_path}`}
                            style={{
                                height: 450,
                                width: '100%'
                            }}
                        />
                    </Card>
                </div>
                <div className={classes.flipCardBack}>
                    <Card raised={true}>
                        <div style={{ position: "absolute", 
                                        width: "90%", 
                                        height: "100%", 
                                        margin: 0, 
                                        padding: 15, 
                                        background: "rgba(33,33,33,0.8)",
                                         }}>
                            <Typography variant="h5">
                                {movie.title}
                            </Typography>
                            <Typography variant="subtitle1">
                                ({movie.release_date.split('-')[0]})
                            </Typography>
                            <br/>
                            <Typography variant="caption">
                                {/* {movie.overview.length > 488 ? movie.overview.substring(0,488)+"..." : movie.overview } */}
                                {movie.overview }
                            </Typography>
                        </div>
                        <CardMedia 
                            image={`${img_base_url}/w500${movie.poster_path}`}
                            style={{
                                height: 450,
                                width: '100%'
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;