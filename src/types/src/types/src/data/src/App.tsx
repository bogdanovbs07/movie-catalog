import { movies } from './data/movies';
import './App.css';

function App() {
  document.title = 'Моя коллекция фильмов | Кинотека';

  return (
    <div className="container">
      <h1>🎬 Каталог фильмов</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-description">{movie.description}</p>
            <span className="movie-year">Год выпуска: {movie.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
