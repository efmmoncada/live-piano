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

  useEventListener((e) => {
    piano?.keyDown({ note: e.event.pitch });
    piano?.keyUp({ note: e.event.pitch });
  });

  return piano !== null ? (
    <div className='flex h-screen justify-center'>
      <PianoView piano={piano} />
      <div className='absolute bottom-0 right-0'>Users Connected: {numUsers}</div>
    </div>
  ) : (
    <div className="h-screen grid place-content-center">
      <Button onPress={loadPiano}>Load Interactive Piano</Button>
    </div>
  );
}
