import React from 'react';

import { createOscillator } from 'utils/sound.utils';

import { addKeyUpListener, removeKeyUpListener } from '../keyboard-listeners/keyup-listener';
import { addKeyDownListener, removeKeyDownListener } from '../keyboard-listeners/keydown-listener';

function WhiteKey(props) {
  const { note } = props;

  const oscillatorRef = React.useRef(null);

  const [keyPressed, setKeyPressed] = React.useState(false);

  React.useEffect(() => {
    if (!keyPressed) {
      oscillatorRef.current = createOscillator(note);
    }
  }, [keyPressed]);

  function playNote() {
    if (!keyPressed) {
      setKeyPressed(true);
      oscillatorRef.current.start(0);
    }
  }

  function stopPlayNote() {
    if (keyPressed) {
      setKeyPressed(false);
      oscillatorRef.current.stop(0);
    }
  }

  React.useEffect(() => {
    function playNoteKeyboard(e) {
      if (e.key === 'Shift' && keyPressed) {
        stopPlayNote();
      }

      if (
        (e.shiftKey && e.key.toLowerCase() === note.slice(0, note.length - 1).toLowerCase()) ||
        (!e.shiftKey && e.key.toLowerCase() === note.toLowerCase())
      ) {
        playNote();
      }
    }

    function stopPlayNoteKeyboard(e) {
      if (e.key === 'Shift' && keyPressed) {
        stopPlayNote();
      }

      if (
        (e.shiftKey && e.key.toLowerCase() === note.slice(0, note.length - 1).toLowerCase()) ||
        (!e.shiftKey && e.key.toLowerCase() === note.toLowerCase())
      ) {
        stopPlayNote();
      }
    }

    addKeyDownListener(playNoteKeyboard);
    addKeyUpListener(stopPlayNoteKeyboard);

    return () => {
      removeKeyDownListener(playNoteKeyboard);
      removeKeyUpListener(stopPlayNoteKeyboard);
    };
  }, [keyPressed]);

  return (
    <button
      type="button"
      className={`key ${note.includes('#') ? 'black-key' : 'white-key'} ${
        keyPressed ? '--active' : ''
      }`}
      onMouseDown={playNote}
      onMouseUp={stopPlayNote}
    >
      {note}
    </button>
  );
}

export default WhiteKey;
