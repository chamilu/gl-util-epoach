import React, { useState } from "react";
import randomQuotes from "random-quotes";

const Quotes = () => {
    const [quote, setQuote] = useState(randomQuotes());

    setInterval(() => {
        setQuote(randomQuotes());
    }, 1000 * 60);

    return (
        <p className="quote" onClick={() => setQuote(randomQuotes())}>
            {quote.body} ({quote.author})
        </p>
    );
};

export default Quotes;
