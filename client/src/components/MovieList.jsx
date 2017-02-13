var React = require('react');

var Movie = require('./Movie.jsx');

var MovieList = React.createClass({

  render: function() {

    var movieNodes = this.props.data.map(function(movie) {
      return (
          <Movie title={movie.title} key={movie.id}>
            {movie.releaseDate}
          </Movie>
        );
    });

    return (
        <div className="movielist">
          {movieNodes}
        </div>
      )
  }

});

module.exports = MovieList;