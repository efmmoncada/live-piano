import { Pitch, notes, octaves } from "@/types/notes";
import { Piano } from "@tonejs/piano";
import { useEffect } from "react";
import { useBroadcastEvent, useMyPresence } from "../../liveblocks.config";
import { PianoGroup } from "./pianoGroup";

type Props = {
  piano: InstanceType<typeof Piano>;
};

export function PianoView({ piano }: Props) {
  const broadcast = useBroadcastEvent();
  const [myPresence, updateMyPresence] = useMyPresence();

  useEffect(() => {
    console.log(myPresence.notesPlaying);
  }, [myPresence.notesPlaying]);

  const handleKeyDown = (note: Pitch) => {
    broadcast({ type: "KEY_DOWN", pitch: note });
    updateMyPresence({ notesPlaying: [...myPresence.notesPlaying, note] });
    piano.keyDown({ note: note });
  };

  const handleKeyUp = (note: Pitch) => {
    broadcast({ type: "KEY_UP", pitch: note });
    updateMyPresence({
      notesPlaying: myPresence.notesPlaying.filter((n) => n !== note),
    });
    piano.keyUp({ note: note });
  };

  // const handleKeyPress = (note: Pitch) => {
  //   broadcast({ type: "PLAY_NOTE", pitch: note });
  //   updateMyPresence({ notesPlaying: [...myPresence.notesPlaying, note] });
  //   piano.keyDown({ note: note });
  //   piano.keyUp({ note: note, time: "+1" });
  // };

  const pitches: Pitch[] = [];

  octaves.forEach((octave) => {
    notes.forEach((note) => {
      pitches.push(`${note}${octave}`);
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
        <PianoGroup
          key={i}
          notes={group}
          keyDown={handleKeyDown}
          keyUp={handleKeyUp}
        />
      ))}
    </div>
  );
}
