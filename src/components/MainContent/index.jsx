import styles from "./mainContent.module.css"
import Movie from "../Movie";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Movie movieTitle="Inglorious Bastards"/>
            <Movie movieTitle="Titanic 1912"/>
            <Movie movieTitle="My trip to Kongo Kinshasa"/>
            <Movie movieTitle="Freedom fighters"/>
        </div>
    )
}

export default MainContent;