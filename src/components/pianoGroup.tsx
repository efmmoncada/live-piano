import { Pitch } from "@/types/notes";
import { PropsWithChildren } from "react";
import { PianoNote } from "./pianoNote";

function PianoRow({ children }: PropsWithChildren) {
  return <div className="flex justify-center h-1/2">{children}</div>;
}

type Props = {
  notes: Pitch[];
  keyDown: (note: Pitch) => void;
  keyUp: (note: Pitch) => void;
};

export function PianoGroup({ notes, keyDown, keyUp }: Props) {
  const [naturals, accidentals] = notes.reduce(
    ([naturals, accidentals], currPitch) => {
      if (currPitch.search(/#|b/) === -1) naturals.push(currPitch);
      else accidentals.push(currPitch);
      return [naturals, accidentals];
    },
    [[] as Pitch[], [] as Pitch[]],
  );

  return (
    <div className="flex flex-col h-full">
      <PianoRow>
        {accidentals.map((pitch) => (
          <PianoNote
            key={pitch}
            note={pitch}
            keyDown={keyDown}
            keyUp={keyUp}
            backgroundColor="black"
            textColor="white"
          />
        ))}
      </PianoRow>
      <PianoRow>
        {naturals.map((pitch) => (
          <PianoNote
            key={pitch}
            note={pitch}
            keyDown={keyDown}
            keyUp={keyUp}
            backgroundColor="white"
            textColor="black"
          />
        ))}
      </PianoRow>
    </div>
  );
}
