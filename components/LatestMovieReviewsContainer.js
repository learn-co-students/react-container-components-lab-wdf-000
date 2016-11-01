const React = require('react')
const MovieReviews = require('./MovieReviews.js')

class LatestMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		}
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