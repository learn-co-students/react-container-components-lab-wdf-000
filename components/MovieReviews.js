const React = require('react')


const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      {reviews.map(({ 
        display_title, 
        mpaa_rating, 
        critics_pick,  
        headline, 
        summary_short, 
        publication_date, 
        link }, i) => {

        return (
          <li className="review" key={i}>
            <h1>{display_title} : {publication_date} </h1>
            <p>rating: {mpaa_rating}</p>
            <p>critics pick: {critics_pick} </p>
            <p>headline: {headline} </p>
          </li>
        )
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;