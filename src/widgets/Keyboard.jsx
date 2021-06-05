import React from 'react';

import Key from 'components/Key';

import { firthOctave } from 'constants/frequency';

function Keyboard() {
  return (
    <div className="keyboard">
      {Object.keys(firthOctave).map((note) => (
        <Key key={note} note={note} />
      ))}
    </div>
  );
}

export default Keyboard;
