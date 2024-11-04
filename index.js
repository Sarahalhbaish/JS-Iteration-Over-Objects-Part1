/* ----------------- Q.1 ----------------- */
const person = {
    name: "Sarah", 
    age: 29, 
    city: "Kuwait"
}

// console.log(person);


/* ----------------- Q.2 ----------------- */
person.email = "sarah21995@live.com";


/* ----------------- Q.3 ----------------- */
// { name: 'John', age: 25 }
const hasKey = (object,key) => {
    let result = false;
    if (object[key])
        return result = true;
    return result;
}

// console.log(hasKey(person,"name"));

/* *********************************************************************************** */
const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];


/* ----------------- Q.4 ----------------- */
const movie = (object, key) => {
        object.forEach(num => {
                console.log(num[key]);
        })
}
movie(movies, "title");


/* ----------------- Q.5 ----------------- */
const movieCount = (object, key) => {
    let number = 0;
    object.filter(num => {
        if (num.year === key)
            number++ ;
    });
    return number;
}
console.log(movieCount(movies, 1994));


/* ----------------- Q.6 ----------------- */
const genreUpdate = (object, key, type) => {
    object.forEach(num => {
        if (num.title === key){
            num.genre = type;
            console.log(num.genre);
        }
    });
    return object;
}
console.log(genreUpdate(movies, "The Dark Knight", "Action/Drama"));
