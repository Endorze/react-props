function Movie (movieName, actor1, actor2, genre, imgPath) {
    this.movieName = movieName;
    this.actor1 = actor1;
    this.actor2 = actor2;
    this.genre = genre;
    this.imgPath = imgPath;
}

const movieList = [
    new Movie("Spartacus","Brad Pit", "Lara Croft", "children", "image/statue.jpg"),
    new Movie("Ratatouille","Brad Pit", "Råtta", "children", "image/statue.jpg"),
    new Movie("Tomato Town","Juice Fredriksson", "Lara Croft", "horror", "image/statue.jpg"),
    new Movie("How i met your brother","Sean Mcloughley", "Elon Musk", "historical", "image/statue.jpg"),
]

export default movieList;