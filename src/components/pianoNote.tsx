import { Pitch } from "@/types/notes";
import { Button } from "@nextui-org/react";
import { useOthersMapped, useSelf } from "../../liveblocks.config";

type Props = {
  note: Pitch;
  keyDown: (note: Pitch) => void;
  keyUp: (note: Pitch) => void;
  backgroundColor: "black" | "white";
  textColor: "black" | "white";
};

export function PianoNote({
  note,
  keyDown,
  keyUp,
  backgroundColor,
  textColor,
}: Props) {
  const notesImPlaying = useSelf((me) => me.presence.notesPlaying);
  const myPlayingColor = useSelf((me) => me.presence.color);

  const notesOthersPlaying = useOthersMapped((other) => ({
    color: other.presence.color,
    notesUserPlaying: other.presence.notesPlaying,
  }));

  let colorToPaint;

  const usersPlayingThisNote = notesOthersPlaying.filter(
    ([connectionId, data]) => data.notesUserPlaying.includes(note),
  );

  if (notesImPlaying.includes(note)) {
    colorToPaint = myPlayingColor;
  } else if (usersPlayingThisNote.length > 0) {
    colorToPaint = usersPlayingThisNote[0][1].color;
  } else {
    colorToPaint = backgroundColor;
  }

  return (
    <Button
      style={{
        backgroundColor: colorToPaint,
      }}
      onPressStart={() => keyDown(note)}
      onPressEnd={() => keyUp(note)}
      className={`text-${textColor} h-full border-1 border-${textColor}`}
    >
      {note}
    </Button>
  );
}
