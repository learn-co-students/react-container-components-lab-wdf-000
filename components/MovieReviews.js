const React = require('react');

const MovieReviews = ({ reviews }) => {
    return (
      <div className='review-list'>
        {reviews.map(({ byline, headline, summary_short, link, multimedia }, i) => {
          return (
            <div className='review' key={i}>
              <h3>{headline}</h3>
              <h5>{byline}</h5>
              { multimedia ? 
              <img src={multimedia.src} width={multimedia.width} height={multimedia.height} /> 
              : null }
              <p>{summary_short}</p>
              <a href={link.url} target="_blank">{link.suggested_link_text}</a> 
            </div>
          );
          }
        )}
      </div>
    );
}

MovieReviews.defaultProps = {reviews: []};

module.exports = MovieReviews;
