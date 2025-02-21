import Cast from "../Cast/cast"
import styles from "./movie.module.css"


const Movie = ({movieName, actor1, actor2, genre, imgPath}) => {

    const showImage = ( {imgPath }) => {
        if (!imgPath) {
            <p>No image found!</p>
            return;
        } else {
            return <img src={imgPath} alt={movieName}/>
        }
    }

    const isHorror = ( {genre} ) => {
        if (genre === "horror") {
            return (
                <div>I see that you love horror</div>
            )
        }
    }

    return (
        <div  className={`${styles.movie} ${styles[genre]}`}>
            <h3 className={styles.movieTitle}>{movieName}</h3>
            {showImage({imgPath})}
            {isHorror({genre})}
            <Cast mainActor={actor1} supportingActor={actor2}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illum ipsa asperiores magni unde voluptatem ullam quis quod.</p>
        </div>
    )
}

Movie.defaultProps = {
    movieName: "Generic Movie Title",
    actor1: "Bröd Pitt",
}


export default Movie;