import { firthOctave } from 'constants/frequency';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

export function createOscillator(note) {
  const oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  oscillator.frequency.value = firthOctave[note];
  return oscillator;
}
