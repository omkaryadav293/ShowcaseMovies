import axios from 'axios';
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjdjYzE4ZWZjYTUzNDg0YjIxNDhlNmI5ODQxNGJhMyIsIm5iZiI6MTcyMjU3ODkxNC40NTU4MjEsInN1YiI6IjY2YWM3NGMwZjUzNzllNTA4Y2MwMjk0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQlSGhCiHcF2q20ZViOMUvd6d3EppJGa0chDFHLNPaw'
      }
})

export default instance;