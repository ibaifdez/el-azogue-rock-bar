# El Azogue Rock Bar

quiero crear una pagina web para este bar que se llama El Azogue Rock, te dejo el logo y la carta que tienen ahora mismo, quiero que uses los colores que usa el bar como principales y el rollo Rock que tiene,  usa las fotos y los datos del pdf que te he adjuntado, este es el instagram del bar https://www.instagram.com/el_azogue_rock y esta es la ubicación del bar https://maps.app.goo.gl/6ndi6RpyJhZuVYx19 . Hazme la web y si necesitas que sea en varias webs para hacerlo lo mejor posible adelante. Cualquier  duda me dices. Quiero que sea responsive importante, que se vea bien tanto en pc como en movil (principalmente tiene que ser facil de usar para movil que es  donde lo veran los clientes

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c4631a8e-cb4f-4759-8341-4fe8a9ff506c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Netlify deployment

`netlify.toml` sets the build command to `bun run build` and the publish directory
to `dist`, overriding the dashboard build settings. This is a TanStack Start app
using Nitro, with its Netlify preset explicitly selected in `netlify.toml`.
The preset writes public assets to `dist` and the SSR handler to
`.netlify/functions-internal`; the server handler is deployed as a Netlify Function.
Keep the publish directory at `dist` rather than `dist/client`.

The original logo and menu photos are imported directly from `src/assets/`.
Vite generates their deployment URLs alongside the CSS and JavaScript, so the
site does not depend on Lovable's asset proxy. The original `.asset.json`
metadata is preserved for reference; pages use the JPEG imports. When replacing
a photo, update the corresponding JPEG as well.
