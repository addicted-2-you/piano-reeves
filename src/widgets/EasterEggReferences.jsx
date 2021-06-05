import React from 'react';

import { useReferenceCatcher } from 'hooks/useReferenceCatcher';
import { useTypeWriter } from 'hooks/useTypewriter';

function EasterEggReferences() {
  const [referenceText, reset] = useReferenceCatcher();

  const text = useTypeWriter(referenceText);

  React.useEffect(() => {
    let timeout = null;
    if (referenceText === text) {
      timeout = setTimeout(() => {
        reset();
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [referenceText, text]);

  return <h2 className="easter-egg-references">{text || null}</h2>;
}

export default EasterEggReferences;
