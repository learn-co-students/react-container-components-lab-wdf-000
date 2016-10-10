import React from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }
  render() {
    return (
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewContainer
