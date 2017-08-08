import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "a9d96ad0"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviess: [],
      selectedMovie: null
    };

    this.movieSearch("    ");
  }

  movieSearch(sub) {
    YTSearch({ key: API_KEY, sub: sub }, movies => {
      this.setState({
        movies: movies,
        selectedmovies: movies[0]
      });
    });
  }

  render() {
    const moviesSearch = _.debounce(sub => {
      this.movieSearch(sub);
    }, 300);

    return (
      <div>
        <SearchBar onSearchSubChange={movieSearch} />
        <MovieDetail movie={this.state.selectedMovie} />
        <VideoList
          onMovieSelect={selectedMovie => this.setState({ selectedMovie })}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

ReactDOM.render();
