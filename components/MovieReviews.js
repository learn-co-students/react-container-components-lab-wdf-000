const React = require('react');

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => <h5 className="review">{review.display_title}</h5>)}
  </div>
)


MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
