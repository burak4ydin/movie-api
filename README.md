[![Build status](https://travis-ci.com/burak4ydin/movie-api.svg?branch=main)](https://github.com/burak4ydin/movie-api)

# movie-api
include directors/IMDB/movies
<<<<<<< HEAD
=======
HEAD
=======
>>>>>>> origin/main

# Movies

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movie | `GET` | Empty | List all movies. |
| /api/movie | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 } | Create a new movie. |
| /api/movie/:movie_id | `GET` | Empty | Get a movie. |
| /api/movie/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movie/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movie/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movie/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Directors

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/director | `GET` | Empty | List all directors. |
| /api/director | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
| /api/director/:director_id | `GET` | Empty | Get a director. |
| /api/director/:director_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a director with new info. |
| /api/director/:director_id | `DELETE` | Empty | Delete a director. |
| /api/director/:director_id/best10movie | `GET` | Empty | The director's top 10 films. |

# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'burak', password:'burak123' } | Create a new user. |
| /authenticate | `POST` | { username: 'burak', password:'burak123' } | Generate a token. |


<<<<<<< HEAD
# Demo
[Live demo on Heroku](https://burak-movie-api.herokuapp.com/)

enjoy!
=======

# Demo
[Live demo on Heroku](https://burak-movie-api.herokuapp.com/)

enjoy!
>>>>>>> readme file updated
>>>>>>> origin/main
