import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </>
  );
}

function Smiley({ isHappy }) {
  return isHappy === true ? <h1>😄</h1> : <h1>🤨</h1>;
}

/* function Smiley({ isHappy }) {
  let moodSmiley = null;
  if (isHappy) {
    moodSmiley = (
      <span role="img" aria-label=" A emoji that indicates happyness">
        🙂
      </span>
    );
  } else {
    moodSmiley = (
      <span role="img" aria-label=" A emoji that indicates sadness">
        ☹️
      </span>
    );
  }

  return <h1>{moodSmiley}</h1>;
} */
