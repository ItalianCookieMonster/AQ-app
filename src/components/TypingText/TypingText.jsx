import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const TypingEffect = ({ textFromOutput }) => {
  const [text, setText] = useState(textFromOutput);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (textFromOutput) {
      setTimeout(() => {
        setText(textFromOutput);
      }, 200);
    }
  }, [textFromOutput]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="typing-effect">{displayText}</div>;
};

export default TypingEffect;
