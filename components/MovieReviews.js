import React from 'react'

const MovieReviews= ({reviews})=> {
  const review = reviews.map((review, i)=> <li key={i} className='review'>{review.display_title}</li>)
  return <div className="review-list">
          <ul>{review}</ul>
        </div>
 }

MovieReviews.defaultProps = {
  reviews: []
}

 module.exports = MovieReviews;
