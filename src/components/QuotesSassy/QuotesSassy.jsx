import React, { useState, useEffect } from 'react';
import "./QuotesSassy.css";
import QuoteAndAuthor from './QuotesSassyCard';
import quotes from '../../services/quotesSassy-api';

class QuotesSassy extends React.Component {
	constructor() {
		super();
		this.state = {
			quote: quotes[0].quote,
			author: quotes[0].author,
		};
	}
	randomQuote() {
		const randomNumber = Math.floor(Math.random() * quotes.length);
		return quotes[randomNumber];
	}
	shuffleQuotes(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	handleClick = () => {
		const generateRandomQuote = this.randomQuote();
		this.setState({
			quote: generateRandomQuote.quote,
			author: generateRandomQuote.author,
		});
		this.shuffleQuotes(quotes);
	};
	
	render() {
		return (
			<div className="sassy-box">
				<QuoteAndAuthor handleClick={this.handleClick} {...this.state} />
			</div>
		);
	}
}

export default QuotesSassy;
