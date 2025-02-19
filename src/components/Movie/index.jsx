import Cast from "../Cast/cast"
import styles from "./movie.module.css"


const Movie = ({movieName, actor1, actor2, genre}) => {
    return (
        <div className={`${styles.movie} ${styles[genre]}`}>
            <h3 className={styles.movieTitle}>{movieName}</h3>
            <Cast mainActor={actor1} supportingActor={actor2}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illum ipsa asperiores magni unde voluptatem ullam quis quod.</p>
        </div>
    )
}


export default Movie;