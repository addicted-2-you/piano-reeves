import { useEffect, useState } from 'react';

export function useKeydownEvent() {
  const [key, setKey] = useState(null);

  useEffect(() => {
    function keydownHandler(event) {
      setKey(event.key);
    }

    function keyupHandler() {
      setKey(null);
    }

    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
      window.removeEventListener('keyup', keyupHandler);
    };
  }, []);

  return key;
}
