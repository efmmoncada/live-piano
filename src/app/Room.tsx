"use client";

import { PianoView } from '@/components/pianoView';
import { Button } from '@nextui-org/react';
import { Piano } from "@tonejs/piano";
import { useState } from "react";
import { useEventListener } from "../../liveblocks.config";

export function Room() {
  const [piano, setPiano] = useState<InstanceType<typeof Piano> | null>(null)

  const loadPiano = () => {
    const piano = new Piano({
      velocities: 1,
    });

    piano.toDestination();
    piano.load().then(() => {
      console.info("Piano Samples Loaded!");
      setPiano(piano);
    })
  }

  useEventListener((e) => {
    piano?.keyDown({ note: e.event.pitch });
    piano?.keyUp({ note: e.event.pitch });
  });

  return <>
    <Button onPress={loadPiano}>Load Interactive Piano</Button>
    {piano !== null && <PianoView piano={piano} />}
  </>;
}
