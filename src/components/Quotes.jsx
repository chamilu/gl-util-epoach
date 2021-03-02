import React from "react";
import randomQuotes from "random-quotes";

const Quotes = () => {
    const quote = randomQuotes();
    return (
        <p className="quote">
            {quote.body} ({quote.author})
        </p>
    );
};

export default Quotes;
