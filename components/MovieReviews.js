 import React from 'react'

const MovieReviews= ({reviews})=> {
     return(
     <div className='review-list'>
     <ul>
     { reviews.map((review, i)=> <li key={i} className='review'>{}</li>)}
     </ul>
     </div>
     )
  }
  
MovieReviews.defaultProps = {reviews:[]}

module.exports = MovieReviews;
