import { Pitch } from "@/types/notes";
import { Piano } from "@tonejs/piano";
import { useBroadcastEvent } from "../../liveblocks.config";
import { PianoGroup } from "./pianoGroup";

type Props = {
  piano: InstanceType<typeof Piano>;
};

export function PianoView({ piano }: Props) {
  const broadcast = useBroadcastEvent();

  const handleKeyPress = (note: Pitch) => {
    broadcast({ type: "PLAY_NOTE", pitch: note });
    piano.keyDown({ note: note });
    piano.keyUp({ note: note, time: "+1" });
  };

  const pitches: Pitch[] = [
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
    "A#5",
    "B5",
  ];

  const groups = [];

  let i = 0;
  while (pitches.length > 0) {
    let numTake = i % 2 === 0 ? 5 : 7;
    groups.push(pitches.splice(0, numTake));
    i++;
  }

  return (
    <div className="flex w-max mx-auto p-4 overflow-auto items-center h-5/6">
      {groups.map((group, i) => (
        <PianoGroup key={i} notes={group} play={handleKeyPress} />
      ))}
    </div>
  );
}
