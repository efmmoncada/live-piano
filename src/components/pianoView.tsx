import { Pitch, notes, octaves } from "@/types/notes";
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

  const pitches: Pitch[] = [];

  octaves.forEach((octave) => {
    notes.forEach((note) => {
      pitches.push(`${note}${octave}`)
    });
  });

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
