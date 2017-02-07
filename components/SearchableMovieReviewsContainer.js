const React = require('react');
const axios = require('axios');
const MovieReviews = require('./MovieReviews')


class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const query = e.target.value;
    axios.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json', {
      params: {
        'api-key': '1821e94438d24626a8b7f9ca84a4f884',
        'query': query
      }
    })
    .then(({ data }) => {
      this.setState({ 
        reviews: data.results
      })
    })
    .catch((error) => {
      console.log(error);
    });   
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h2>Search Movie Reviews: </h2>
        <input type='text' placeholder='Search Movie reviews' onChange={this.handleChange} ></input>
        <MovieReviews reviews={this.state.reviews}/> 
      </div>
    );
  }
}

module.exports = SearchableMovieReviewsContainer;
