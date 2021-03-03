import React, { useState } from "react";
import randomQuotes from "random-quotes";

const Quotes = () => {
    const [quote, setQuote] = useState(randomQuotes());

    return (
        <p className="quote" onClick={() => setQuote(randomQuotes())}>
            {quote.body} ({quote.author})
        </p>
    );
};

export default Quotes;
