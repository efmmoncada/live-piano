import { Pitch } from "@/types/notes";
import { Piano } from "@tonejs/piano";
import { useBroadcastEvent } from "../../liveblocks.config";
import { PianoNote } from "./pianoNote";

type Props = {
  piano: InstanceType<typeof Piano>;
};

export function PianoView({ piano }: Props) {
  const broadcast = useBroadcastEvent();

  const handleKeyPress = (note: Pitch) => {
    // piano.keyDown({ note: note });
    broadcast({ type: "PLAY_NOTE", pitch: note });
    piano.keyDown({ note: note });
    piano.keyUp({ note: note });
  };

  return (
    <div className="h-screen">
      <PianoNote play={handleKeyPress} note="C4" />
      <PianoNote play={handleKeyPress} note="C#4" />
      <PianoNote play={handleKeyPress} note="D4" />
      <PianoNote play={handleKeyPress} note="D#4" />
      <PianoNote play={handleKeyPress} note="E4" />
      <PianoNote play={handleKeyPress} note="F4" />
      <PianoNote play={handleKeyPress} note="F#4" />
      <PianoNote play={handleKeyPress} note="G4" />
      <PianoNote play={handleKeyPress} note="G#4" />
      <PianoNote play={handleKeyPress} note="A4" />
      <PianoNote play={handleKeyPress} note="A#4" />
      <PianoNote play={handleKeyPress} note="B4" />
      <PianoNote play={handleKeyPress} note="C5" />
    </div>
  );
}
