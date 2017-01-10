const React = require('react')
import 'whatwg-fetch';
const MovieReviews = require('./MovieReviews.js')

class LatestMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		}
	}

	componentWillMount() {}

	parseResults(json) {
		for (var i = 0; i < json.results.length; i++) {
			this.state.reviews.push(json.results[i])
		};
	}

	render () {
		return(
			<div className="latest-movie-reviews">
				<MovieReviews 
					reviews={this.state.reviews} 
				/>
			</div>
		)
	}
}

module.exports = LatestMovieReviewsContainer;