import styles from "./mainContent.module.css";
import Movie from "../Movie";

let movie1 = {
    movieName: "Spartacus",
    actor1: "Brad Pit",
    actor2: "Lara Croft",
    genre: "children"
}
let movie2 = {
    movieName: "Ratatouille",
    actor1: "Råtta",
    actor2: "Lång man med brunt hår",
    genre: "historical"
}
let movie3 = {
    movieName: "Tomato Town",
    actor1: "Tomat Tomatsson",
    actor2: "Juice Fredriksson",
    genre: "horror"
}
let movie4 = {
    movieName: "How I met your Mother",
    actor1: "En lång snubbe",
    actor2: "Och många andra människor",
    genre: "children"
}

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Movie {...movie1}/>
            <Movie {...movie2}/>
            <Movie {...movie3}/>
            <Movie {...movie4}/>
        </div>
    )
}

export default MainContent;