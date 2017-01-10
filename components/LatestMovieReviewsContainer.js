const React = require('react');
const MovieReviews = require('./MovieReviews');
const SearchableMovieReviewsContainer = require('./SearchableMovieReviewsContainer')

class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
   return (this.state.reviews !== nextState.reviews);
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
        <SearchableMovieReviewsContainer />
      </div>
    )
  }


}


module.exports = LatestMovieReviewsContainer
