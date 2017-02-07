const React = require('react');
const axios = require('axios');
const MovieReviews = require('./MovieReviews')


class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }  

  componentWillMount() {
    axios.get('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=1821e94438d24626a8b7f9ca84a4f884')
    .then(({ data }) => {
      this.setState({ 
        reviews: data.results
      })
    })
    .catch((error) => {
      console.log(error);
    });   
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/> 
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;
