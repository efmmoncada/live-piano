
export const notes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;
export const octaves = ["2", "3", "4", "5", "6"] as const;

type Notes = (typeof notes)[number];
type Octaves = (typeof octaves)[number];

export type Pitch = `${Notes}${Octaves}`;
