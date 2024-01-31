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

1. Create a `.env.local` at the root of the project and fill it out following the format provided in `.env.local`
2. Install dependencies by running `pnpm install`

## Usage

To run the project in development, run `pnpm dev`.

## Roadmap

- [x] Classic piano layout with ~4 octaves
- [ ] Keyboard to piano key mapping to play multiple notes at once using keyboard
- [ ] MIDI controller support using [WebMIDI.js](https://webmidijs.org/) or the native [Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)
- [ ] Link sharable rooms in order to enable "private" rooms among friends
- [ ] Mobile Support
- [ ] Support for various other instruments/effects/sounds

## Contributing
I'd appreciate any contributions to the project! To contribute, follow the following guidelines:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/yourFeature`)
3. Implement and commit your changes (`git commit -m "description of your feature"`)
4. Push your changes (`git push origin feature/yourFeature`)
5. Open a pull request

## License
Distributed under the GNU General Public License v3.0. See `LICENSE.txt` for more information.

## Questions
If you have any questions or would just like to chat about the project, feel free to email me at [emmanuel.moncada27@gmail.com](mailto:emmanuel.moncada27@gmail.com) or shoot me a message on Discord [@__emmanuel](https://discordapp.com/users/582393395570409492)