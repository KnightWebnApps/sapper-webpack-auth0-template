# Knight Apps Sapper Webpack Template

## Getting Started

1. Get the template
    `npx degit "KnightWebnApps/sapper-webpack-template" my-app`

2. Install modules
   `npm i`

3. Start new project
    `npm run dev`

### Features: Basic UI Library, Global CSS Custom Properties and 🔥 Default Styling

- [X] Button
- [X] Icon Button
- [X] Link
- [X] Text Field
- [X] Checkbox Field
- [ ] Numeric Field
- [ ] Select Field
- [ ] Slider
- [ ] Switch
- [X] List View
- [X] Grid View
- [X] Sidebar View
- [X] Card
- [X] Center
- [X] Error
- [ ] Chips
- [ ] Tables
- [ ] Dialog
- [ ] Snackbar
  
## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.

UI Widgets are under `src/widgets`, and components are under `src/components`.

Keep widget styling scoped, colors and typography are global.

## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
npm install -D @sveltejs/svelte-virtual-list
```