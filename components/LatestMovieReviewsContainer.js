const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');
const MovieReviews = require('./MovieReviews');

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
   fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=fc66b640b05549ee9af75b82e830cd28')
     .then((res => this.setState({ reviews: JSON.parse(res.results) })))
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}


module.exports = LatestMovieReviewsContainer;
