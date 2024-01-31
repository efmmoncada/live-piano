"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { NextUIProvider } from "@nextui-org/react";
import { RoomProvider } from "../../liveblocks.config";
import { Room } from "./Room";

export default function Home() {
  const roomId = "live-piano-room";

  return (
    <NextUIProvider>
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense
          fallback={
            <div className="h-screen grid place-content-center">
              Loading Liveblocks...
            </div>
          }
        >
          {() => <Room />}
        </ClientSideSuspense>
      </RoomProvider>
    </NextUIProvider>
  );
}
