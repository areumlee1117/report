const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRlNGJhNTJhMjcxMzdlODk0YTljZWQwODFkZWU4MiIsInN1YiI6IjY1MzBmNTk3ZjE3NTljMDEzOTRiMzgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOU7K-U_lRv_24DhOdk_EiVWNWYX2FC0kUCOFh8sNDo'
  }
};
const moviesContainer = document.getElementById('movies-container');

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    console.log(response.results);
    const movies = response.results
    let str = "";
    movies.forEach(movie => {
      const temp_html =
        `<div class="cardbox">
  <div class="col" onclick="alert('영화 id : ${movie.id}')">

  <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}"

  <div class="card-body">
  <h5 class="title">${movie.title}</h5>
  <p class="overview">${movie.overview}
  </p>
  </div>
  <div class="card-footer">
  <small class="vote_average">${movie.vote_average}</small>
  </div>
  </div>`
      // moviesContainer.innerHTML= temp_html
      str = str + temp_html;
    });
  
    moviesContainer.innerHTML = str
    console.log(str);
  })
  .catch(err => console.error(err));



  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

