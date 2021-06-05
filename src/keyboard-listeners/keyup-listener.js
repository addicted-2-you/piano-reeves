// TODO: remove code duplication

import { ListenersComposer } from '../ListenersComposer';

const listenersComposer = new ListenersComposer();

function invoke(e) {
  listenersComposer.invoke(e);
}

export function addKeyUpListener(l) {
  listenersComposer.addListener(l);
}

export function removeKeyUpListener(l) {
  listenersComposer.removeListener(l);
}

export function startListenKeyUp() {
  document.addEventListener('keyup', invoke);
}

export function stopListenKeyUp() {
  document.removeEventListener('keyup', invoke);
}
