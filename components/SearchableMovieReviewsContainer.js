const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');
const MovieReviews = require('./MovieReviews');

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      query: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setstate({
      reviews: this.state.reviews,
      query: ev.target.value
    })
  }

  componentWillMount() {
   fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.query}?api-key=fc66b640b05549ee9af75b82e830cd28`)
     .then((res => this.setState({ reviews: JSON.parse(res.results) })))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <input onChange={this.onChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}



module.exports = SearchableMovieReviewsContainer;
