const React = require('react');

const MovieReviews = ({reviews}) => {
  debugger;
  return (
    <div className="review-list">
      <div className="review-list">
          {reviews.map((review, i) =>
          <li key={i} className='review'>{review.headline}</li>)}
        </div>
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: [],
}

module.exports = MovieReviews;