var React = require('react');

var MovieList = require('./MovieList.jsx');

var movieData = [
  {id: 1, title: "Top Gun", releaseDate: "June 1989"},
  {id: 2, title: "Top Gun Part Deux", releaseDate: "June 1990"},
  {id: 3, title: "Top Gun: Menage a trois", releaseDate: "June 1991"}
]

var MovieBox = React.createClass({

  getInitialState: function() {
    return {data: movieData}
  },

  render: function() {
    return (
        <div className="moviebox">
          <h1>Upcoming Movies</h1>
          <MovieList data={this.state.data} />
          <button>Get showtimes</button>
        </div>
      )
  }

}); 


module.exports = MovieBox;