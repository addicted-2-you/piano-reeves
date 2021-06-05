// snatched from https://github.com/haowen737/react-typewriter-hook/blob/master/src/useTypewriter.ts

import { useState, useEffect, useRef } from 'react';

import { TypeWriter } from '../TypeWriter';

const writter = new TypeWriter();

export function useTypeWriter(str) {
  const [word, setWord] = useState(null);

  const intervalRef = useRef(null);
  const strRef = useRef(null);

  useEffect(() => {
    strRef.current = setWord(writter.startTypeWord(str));
  }, [str]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWord(writter.typing());
    }, writter.rd());

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [word]);

  return word;
}
