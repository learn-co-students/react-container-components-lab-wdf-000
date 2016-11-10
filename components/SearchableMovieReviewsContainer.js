const React = require('react');
const MovieReviews = require('./MovieReviews');

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(){
    ///Hardcoded for now but should be read from the site
    var searchFor = "ponies";
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    url += '?' + $.param({
      'query': searchFor,
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
      <div className = "searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

module.exports = SearchableMovieReviewsContainer;
