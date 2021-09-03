import React from 'react';

import { startListenKeyDown, stopListenKeyDown } from './keyboard-listeners/keydown-listener';
import { startListenKeyUp, stopListenKeyUp } from './keyboard-listeners/keyup-listener';

import Keyboard from './widgets/Keyboard';

function App() {
  React.useEffect(() => {
    startListenKeyDown();
    startListenKeyUp();

    return () => {
      stopListenKeyDown();
      stopListenKeyUp();
    };
  });

  return (
    <>
      <main className="workspace">
        <div className="keyboard-container">
          <Keyboard />
        </div>
      </main>
    </>
  );
}

export default App;
