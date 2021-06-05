// TODO: remove code duplication

import { ListenersComposer } from '../ListenersComposer';

const listenersComposer = new ListenersComposer();

function invoke(e) {
  listenersComposer.invoke(e);
}

export function addKeyDownListener(l) {
  listenersComposer.addListener(l);
}

export function removeKeyDownListener(l) {
  listenersComposer.removeListener(l);
}

export function startListenKeyDown() {
  document.addEventListener('keydown', invoke);
}

export function stopListenKeyDown() {
  document.removeEventListener('keydown', invoke);
}
