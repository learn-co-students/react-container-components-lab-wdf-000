const React = require('react')
const MovieReviews = ({ reviews }) => {
  // console.log(reviews)
  return (
  <div className="review-list">
    {reviews.map((review, i) =>
    <li key={i} className='review'>{}</li>)}
  </div>
  )
}

MovieReviews.defaultProps = {reviews: []}

module.exports = MovieReviews;
