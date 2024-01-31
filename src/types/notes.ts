type Octaves = "3" | "4" | "5";
type Notes = "C" | "D" | "E" | "F" | "G" | "A" | "B";
type Accidentals = "#" | "b" | "";


export type Pitch = `${Notes}${Accidentals}${Octaves}`;
