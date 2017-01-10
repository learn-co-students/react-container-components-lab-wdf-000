const React = require('react')

function MovieReview(props) {
	return(
		<div className="review-list">
			{props.review}
		</div>
	)
}

MovieReview.defaultProps = {
	reviews: []
}

module.exports = MovieReview;