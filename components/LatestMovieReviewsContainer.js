import React, { Component } from 'react';
// const MovieReviews = require('./MovieReviews').default;
const MovieReviews = require('./MovieReviews');

const SearchableMovieReviews = require('./SearchableMovieReviewsContainer')

class LatestMovieReviewsContainer extends Component{
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
     <div className='latest-movie-reviews'>
     <MovieReviews reviews={this.state.reviews}/>
     </div>
     )
     }
}

module.exports = LatestMovieReviewsContainer
