import { Pitch } from "@/types/notes";
import { PropsWithChildren } from "react";
import { PianoNote } from "./pianoNote";

function PianoRow({ children }: PropsWithChildren) {
  return <div className="flex justify-center h-1/2">{children}</div>;
}

type Props = {
  notes: Pitch[];
  play: (note: Pitch) => void;
};

export function PianoGroup({ notes, play }: Props) {
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
          <PianoNote key={pitch} note={pitch} play={play} />
        ))}
      </PianoRow>
      <PianoRow>
        {naturals.map((pitch) => (
          <PianoNote key={pitch} note={pitch} play={play} />
        ))}
      </PianoRow>
    </div>
  );
}
