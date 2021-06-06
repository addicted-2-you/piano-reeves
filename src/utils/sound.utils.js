import { firthOctave } from 'constants/frequency';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const gainNode = audioContext.createGain();
gainNode.gain.value = 1 / 12;
gainNode.connect(audioContext.destination);

export function createOscillator(note) {
  const oscillator = audioContext.createOscillator();
  oscillator.connect(gainNode);
  oscillator.frequency.value = firthOctave[note];
  return oscillator;
}
