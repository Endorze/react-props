import styles from "./movie.module.css"

const Movie = ({movieName}) => {
    return (
        <div className={styles.movie}>
            <h3 className={styles.movieTitle}>{movieName}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illum ipsa asperiores magni unde voluptatem ullam quis quod.</p>
        </div>
    )
}

export default Movie;