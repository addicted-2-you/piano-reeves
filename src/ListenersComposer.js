export class ListenersComposer {
  constructor(listeners = []) {
    this.listeners = listeners;
  }

  addListener(l) {
    this.listeners.push(l);
  }

  removeListener(l) {
    this.listeners = this.listeners.filter((_l) => _l !== l);
  }

  invoke(...args) {
    this.listeners.forEach((l) => l(...args));
  }
}
