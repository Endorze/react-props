import styles from "./movieSection.module.css"

const Moviesection = () => {
    return (
        <div className={styles.movieSection}>
            <div className={styles.movieWrapper}>
                <div className={styles.movieFrame}>
                    <h2>Article</h2>
                    <p>Lorem lorem lorem lorem lorem</p>
                </div>
                <div className={styles.movieFrame}>
                <h2>Article</h2>
                <p>Lorem lorem lorem lorem lorem</p>
                </div>
            </div>
            <div className={styles.movieWrapper}>
                <div className={styles.movieFrame}>
                    <h2>Article</h2>
                    <p>Lorem lorem lorem lorem lorem</p>
                    </div>
                    <div className={styles.movieFrame}>
                    <h2>Article</h2>
                    <p>Lorem lorem lorem lorem lorem</p>
                </div>
            </div>
        </div>
    )
}

export default Moviesection;