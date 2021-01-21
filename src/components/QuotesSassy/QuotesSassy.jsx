import React, { useState, useEffect } from 'react';
import "./QuotesSassy.css";
// import QuoteAndAuthor from './QuotesSassyCard';
import quotesSassyAPI from '../../services/quotesSassy-api';

const QuotesSassy = () => {
	const [quote, setQuoteSassy] = useState('');
	const [author, setAuthorSassy] = useState('');

	useEffect(() => {
		getQuoteSassy();
	}, []);

	const getQuoteSassy = () => {
		fetch(quotesSassyAPI)
		.then((res) => res.json())
		.then((data) => {
			let dataQuotesSassy = data.quotesSassy;
			let randomNum = Math.floor(Math.random() * dataQuotesSassy.length);
			let randomQuoteSassy = dataQuotesSassy[randomNum];

			setQuoteSassy(randomQuoteSassy.quote);
			setAuthorSassy(randomQuoteSassy.author);
		});
	};

	const handleClick = () => {
		getQuoteSassy();
	};

	return (
		<>
		<div id="quote-box">
			<div id="text">
				<p>{quote}</p>
			</div>
			<div id="author">
				<p>{author}</p>
			</div>
			<button onClick={handleClick} id="new-quote">
				Slap!
			</button>
		</div>
		</>
	);
};

export default QuotesSassy

// class QuotesSassy extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			quote: quotes[0].quote,
// 			author: quotes[0].author,
// 		};
// 	}
// 	randomQuote() {
// 		const randomNumber = Math.floor(Math.random() * quotes.length);
// 		return quotes[randomNumber];
// 	}
// 	shuffleQuotes(array) {
// 		return array.sort(() => Math.random() - 0.5);
// 	}

// 	handleClick = () => {
// 		const generateRandomQuote = this.randomQuote();
// 		this.setState({
// 			quote: generateRandomQuote.quote,
// 			author: generateRandomQuote.author,
// 		});
// 		this.shuffleQuotes(quotes);
// 	};
	
// 	render() {
// 		return (
// 			<div className="sassy-box">
// 				<QuoteAndAuthor handleClick={this.handleClick} {...this.state} />
// 			</div>
// 		);
// 	}
// }

// export default QuotesSassy;
