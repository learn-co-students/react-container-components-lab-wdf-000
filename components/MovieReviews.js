import React, { PropTypes } from 'react';

const MovieReviews = ({ reviews }) => { 
  return (
    <div className="review-list">
      { reviews.map((r)=>(<div className="review">r</div>)) }
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews:[],
};

// MovieReviews.propTypes = {
// };

module.exports = MovieReviews;
