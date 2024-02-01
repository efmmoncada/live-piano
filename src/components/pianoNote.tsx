import { Pitch } from "@/types/notes";
import { Button } from "@nextui-org/react";

type Props = {
  note: Pitch;
  play: (note: Pitch) => void;
  backgroundColor: "black" | "white";
  textColor: "black" | "white";
};

export function PianoNote({ note, play, backgroundColor, textColor }: Props) {
  return (
    <Button
      className={`bg-${backgroundColor} text-${textColor} h-full border-1 border-${textColor}`}
      onPress={() => play(note)}
    >
      {note}
    </Button>
  );
}
