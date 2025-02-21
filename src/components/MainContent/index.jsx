import styles from "./mainContent.module.css";
import Movie from "../Movie";
import movieList from "../../data/movies.js";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            { movieList.map((movie, index) => <Movie key={index} {...movie}/>) }
            {/*Denna kod är till för att lägga till filtrering*/
            /* { movieList.filter(movie => movie.genre === "children").map((movie, index) => <Movie key={index} {...movie}/>) } */} 
        </div>
    )
}

export default MainContent;