const React = require('react')

const MovieReviews = require('./MovieReviews')

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      reviews: [],
      // searchTerm: '',
    }

  //   this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  // handleSubmit(e){
  //   this.setState({ searchTerm: e.target.value });
  // }

  handleSearchInputChange(e){
    e.preventDefault();
    const searchTerm = e.target.value;

    fetch(BASE_URL.concat(searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <input onChange={this.handleSearchInputChange} />
        <MovieReviews reviews={this.state.reviews}/> 

      </div>

    )
  }
}

module.exports = SearchableMovieReviewsContainer;