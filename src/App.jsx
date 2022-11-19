import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./json/quotes.json";

function App() {
  const getIndex = (arr) => {
    const rand = Math.trunc(Math.random() * (arr.length - 0) + 0);
    return arr[rand];
  };
  const [quoteRandom, setQuoteRandom] = useState(getIndex(quotes));

  const getRGB = () => {
    const color = [];
    while (color.length < 3) {
      const ran = Math.trunc(Math.random() * (255 - 0) + 0);
      color.push(ran);
    }
    const rgb = `rgb(${color[0]},${color[1]},${color[2]})`;
    return rgb;
  };
  const [color, setColor] = useState(getRGB);
  const rgb = {
    backgroundColor: color,
    color,
  };

  const click = () => {
    setQuoteRandom(getIndex(quotes));
    setColor(getRGB);
  };
  return (
    <div className="App" style={rgb}>
      <QuoteBox quoteRandom={quoteRandom} handle={click} color={color} />
    </div>
  );
}

export default App;
