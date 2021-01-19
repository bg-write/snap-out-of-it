import React from 'react';

class QuoteAndAuthor extends React.Component {
	render() {
		return (
			<div id="quote-box">
				<div key={Math.random()}>
					<h1 id="text">"{this.props.quote}"</h1>
					<h5 id="author">
						{this.props.author ? this.props.author : 'Unknown'}
					</h5>
				</div>
				<button onClick={this.props.handleClick} id="new-quote" className="hvr-grow-shadow">
					Slap!
				</button>
			</div>
		);
	}
}

export default QuoteAndAuthor;
