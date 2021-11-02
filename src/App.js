import React from 'react';
import QuoteCard from './components/QuoteCard.jsx';
import { useState } from 'react';
import axios from 'axios';

const lisa = {
  quote:
    "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
  character: 'Lisa Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
};

function App() {
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => {
        setQuote(response.data[0]);
      });
  };
  const [quote, setQuote] = useState(lisa);

  return (
    <div>
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get another quote
      </button>
    </div>
  );
}

export default App;