import React, { useState, useEffect } from 'react';
import './Quotes.css';

const Quotes = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		getQuote();
	}, []);

	const getQuote = () => {
		let url =
			'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				let dataQuotes = data.quotes;
				let randomNum = Math.floor(Math.random() * dataQuotes.length);
				let randomQuote = dataQuotes[randomNum];

				setQuote(randomQuote.quote);
				setAuthor(randomQuote.author);
			});
	};

	const handleClick = () => {
		getQuote();
	};

	return (
		<>
			<div className="quote-box-home">
				<div className="sassy-box">
					<div class="sassy-quote">

						<div>
							<h1 className="sassy-text">{quote}</h1>
							<h5 className="sassy-author">{author}</h5>
						<div class="sassy-button">
							<button
								onClick={handleClick}
								id="new-quote"
								class="hvr-grow-shadow"
							>
								You're OK.
							</button>
						</div>	
						</div>
						

					</div>
				</div>
			</div>
		</>
	);
};

export default Quotes;
