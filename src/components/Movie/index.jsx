import styles from "./movie.module.css"

const Movie = () => {
    return (
        <div className={styles.movie}>
            <h3 className={styles.movieTitle}>Movie</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illum ipsa asperiores magni unde voluptatem ullam quis quod.</p>
        </div>
    )
}

export default Movie;