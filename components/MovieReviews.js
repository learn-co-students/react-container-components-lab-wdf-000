import React from 'react';

const MovieReviews = (props) => (
  <div className='review-list'>
    {props.reviews.map(review => (<div className='review' />))}
  </div> 
)

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews
