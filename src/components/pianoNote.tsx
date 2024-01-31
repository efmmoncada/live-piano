import { Pitch } from "@/types/notes";
import { Button } from "@nextui-org/react";

type Props = {
  note: Pitch;
  play: (note: Pitch) => void;
};

export function PianoNote({ note, play }: Props) {
  const isAccidental = note.search(/#|b/) !== -1;
  const bgColor = isAccidental ? "black" : "white";
  const textColor = isAccidental ? "white" : "black";

  return (
    <Button
      className={`bg-${bgColor} text-${textColor} h-full border-1 border-${textColor}`}
      onPress={() => play(note)}
    >
      {note}
    </Button>
  );
}
