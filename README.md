## About

This web app aims to provide a collaborative environment for musicians to share ideas even when not sitting right next to one another, much like authors might utilize Google Sheets. As one user plays notes on the piano, other users connected to a room will hear what is being played in real-time, and play their own ideas for the room simultaneously.

## Built With

[![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/)
- [Liveblocks API Key](https://liveblocks.io/)

### Installation

Install dependencies:

```sh
pnpm install
```

### Usage

To run the project in development, run `pnpm dev`.

### Roadmap

- [ ] Classic piano layout with ~4 octaves
- [ ] Keyboard to piano key mapping to play multiple notes at once using keyboard
- [ ] MIDI controller support using [WebMIDI.js](https://webmidijs.org/) or the native [Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)
- [ ] Link sharable rooms in order to enable "private" rooms among friends
- [ ] Mobile Support
- [ ] Support for various other instruments/effects/sounds
