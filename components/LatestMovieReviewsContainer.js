import React, { Component, PropTypes } from 'react';

import MovieReviews from './MovieReviews.js';

class LatestMovieReviewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {reviews:[]}
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;
// export default LatestMovieReviewsContainer;
