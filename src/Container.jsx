import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState('');
  const numberOfWords = text.split(/\s/).filter((word) => word !== '').length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - text.length;
  const facebookCharactersLeft = 2200 - text.length;

  return <main className="container">
    <Textarea text={text} setText={setText} />
    <Stats
      numberOfWords={numberOfWords}
      numberOfCharacters={numberOfCharacters}
      instagramCharactersLeft={instagramCharactersLeft}
      facebookCharactersLeft={facebookCharactersLeft}
    />
  </main>;
}
