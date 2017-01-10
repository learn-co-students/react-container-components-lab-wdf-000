const React = require('react');
const ReactDOM = require('react-dom');

const LatestMovieReviewsContainer = require(
  './components/LatestMovieReviewsContainer'
);
const SearchableMovieReviewsContainer = require(
  './components/SearchableMovieReviewsContainer'
);

ReactDOM.render(
  <div className="app">
    <h3>Latest Movie Reviews</h3>
    <br/>
    <LatestMovieReviewsContainer />
    <br/>
    <h3>Reviews About Movies With Ponies</h3>
    <br/>
    <SearchableMovieReviewsContainer />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
