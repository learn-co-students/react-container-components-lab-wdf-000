const React = require('react');

function MovieReviews(props){
  return(
    <div className = "review-list">
      {props.reviews.map((review,i) => <p className="review" key={i}>{JSON.stringify(review)}</p>)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
