import React, { Component, PropTypes } from 'react';

class SearchableMovieReviewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {reviews:[]};
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        {this.state.reviews.map((r) => (<div className="review">r</div>))}
      </div>
    );
  }
}

module.exports = SearchableMovieReviewsContainer;
