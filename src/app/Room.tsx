"use client";

import { PianoView } from "@/components/pianoView";
import { Button } from "@nextui-org/react";
import { Piano } from "@tonejs/piano";
import { useState } from "react";
import { useEventListener, useOthers } from "../../liveblocks.config";

export function Room() {
  const [piano, setPiano] = useState<InstanceType<typeof Piano> | null>(null);
  const others = useOthers();

  const numUsers = others.length;

  const loadPiano = () => {
    const piano = new Piano({
      velocities: 1,
    });

    piano.toDestination();
    piano.load().then(() => {
      console.info("Piano Samples Loaded!");
      setPiano(piano);
    });
  };

  useEventListener(({ connectionId, event }) => {
    switch (event.type) {
      case "KEY_DOWN": {
        piano?.pedalDown(); // ! these are workaround/hacks because the recv'r cuts off the note before recv the KEY_UP event for some reason.
        piano?.keyDown({ note: event.pitch });
      }
      case "KEY_UP": {
        piano?.keyUp({ note: event.pitch, time: "+1" });
        piano?.pedalUp(); // ! these are workaround/hacks because the recv'r cuts off the note before recv the KEY_UP event for some reason.
      }
    }
  });

  return piano !== null ? (
    <div className="h-screen flex items-center justify-center">
      <PianoView piano={piano} />
      <div className="absolute bottom-0 right-0">
        Users Connected: {numUsers}
      </div>
    </div>
  ) : (
    <div className="h-screen grid place-content-center">
      <Button onPress={loadPiano}>Load Interactive Piano</Button>
    </div>
  );
}
