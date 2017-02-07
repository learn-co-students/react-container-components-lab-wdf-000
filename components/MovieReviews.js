const React = require('react');

const MovieReviews = ({ reviews }) => {
    return (
      <div className='review-list'>
        {reviews.map(({ display_title, mpaa_rating, critics_pick, byline, headline, summary_short }, i) => {
          return <p className='review' key={i}>
            {display_title, mpaa_rating, critics_pick, byline, headline, summary_short}
          </p>
          }
        )}
      </div>
    );
}

MovieReviews.defaultProps = {reviews: []};

module.exports = MovieReviews;
