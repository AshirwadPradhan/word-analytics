import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

function Container() {
  const [text, setText] = useState("");
  // const numberOfWords =
  // const numberOfChars = ;
  // const instagramCharsLeft = s;
  // const facebookCharsLeft = ;
  const numberOfChars = text.length;

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfChars: numberOfChars,
    instagramCharsLeft: 280 - numberOfChars,
    facebookCharsLeft: 2200 - numberOfChars,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
