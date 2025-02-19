import styles from "./mainContent.module.css"
import Movie from "../Movie";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </div>
    )
}

export default MainContent;