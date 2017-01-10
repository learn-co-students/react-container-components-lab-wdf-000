import React from 'react';
import 'whatwg-fetch';
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }
  componentWillMount() {
    // fetch('http://google.com')
    // .then(res => res.json())
    // .then(json => this.parseResults(json))
  }
  parseResults(json) {
    for (var i = 0; i < json.results.length; i++) {
      this.state.reviews.push(json.results[i])
    };
  }
  render() {
    return (
      <div className='latest-movie-reviews'> 
         <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;

