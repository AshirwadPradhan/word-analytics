import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

function Container() {
  const [text, setText] = useState("");

  const numberOfChars = text.length;
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfChars: numberOfChars,
    instagramCharsLeft: INSTAGRAM_MAX_CHARACTERS - numberOfChars,
    facebookCharsLeft: FACEBOOK_MAX_CHARACTERS - numberOfChars,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
