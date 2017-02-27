const React = require('react')
const MovieReviews = require('./MovieReviews')
const { fetch } = require('whatwg-fetch');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],      
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }


  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;