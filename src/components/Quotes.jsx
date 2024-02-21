import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState("");
  
    useEffect(() => {
      Axios.get("https://type.fit/api/quotes")
        .then((res) => {
          setQuotes(res.data);
        })
        .catch((error) => {
          console.error("Error fetching quotes:", error);
        });
    }, []);
  
    const generateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setRandomQuote(randomQuote ? randomQuote.text : "No quotes available");
    };
  
    return (
      <div className="flex flex-col items-center justify-center" style={{ height: "calc(60vh - 50px)" }}>
           <h1 className="text-3xl capitalize text-white  font-bold mb-6">Random Quotes</h1>
         <h2 className="text-2xl text-white font mb-6">"{randomQuote}"</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-black focus:outline-none text-lg" onClick={generateQuote}>Generate a quote</button>
      </div>
    );
  }

export default Quotes;
