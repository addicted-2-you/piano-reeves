import { useEffect, useState } from 'react';

import { useKeydownEvent } from './useKeydownEvent';

const seeYouAfterBabeReference = ['f', 'a', 'c', 'e'];

export function useReferenceCatcher() {
  const key = useKeydownEvent();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (key === null) {
      return;
    }

    if (key === seeYouAfterBabeReference[index]) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, [key]);

  return [
    index === seeYouAfterBabeReference.length ? 'See you after, babe' : null,
    () => setIndex(0),
  ];
}
