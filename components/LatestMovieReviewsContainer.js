const React = require('react');
const MovieReviews = require('./MovieReviews');

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(){
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    url += '?' + $.param({
      'api-key': "21e6f0f4866d4f5e891495280f9d13fe"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(result => this.setState({reviews: result.results}))
  }

  componentWillMount(){
    this.getMovies();
  }

  render(){
    return (
      <div className = "latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

module.exports = LatestMovieReviewsContainer;
