import React from "react";
import Title from "./Title";

const QuoteBox = ({ quoteRandom, handle, color }) => {
  const obj = {
    background: color,
  };
  return (
    <article className="card">
      <i className="fa-solid fa-quote-left"></i>
      <p>{quoteRandom.quote}</p>
      <Title quoteRandom={quoteRandom} />
      <button onClick={handle} style={obj}>
        &gt;
      </button>
    </article>
  );
};

export default QuoteBox;
