var React = require('react')

var Movie = React.createClass({

  render: function() {
    return (
        <div className="movie">
          <p>
          <em>{this.props.title}:</em> {this.props.children}
          </p>
        </div>
      );
  }

});

module.exports = Movie;