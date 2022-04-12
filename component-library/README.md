<p align="center" style="padding-top: 24px;">
    <a href="https://bog-component-library.netlify.app/" rel="noopener" target="_blank"><img width="500" src="https://bog-component-library.netlify.app/static/media/homepage_main.4948c0bb.png" alt="Component Library Logo"></a></p>
</p>

<h4 align="center"><a href="https://bitsofgood.org/" target="_blank">Bits of Good</a> Design System + React Component Library</h4>

## Installation
```
npm install bog-component-library
```
or
```
yarn add bog-component-library
```

## Usage

Import the CSS directly into your project (`src/index.js`) if your asset packager supports it:
```javascript
import 'bog-component-library/dist/styles.css'
```

Import required h4i-design components within `src/App.js` file or your custom component files:
```javascript
import { Button } from 'bog-component-library';
```

Now you are ready to use the imported components, such as:
```javascript
import React from 'react';
import { Button } from 'bog-component-library';

const App = () => (
    <Button onClick={() => alert('Button clicked!')}>APPLY NOW</Button>
)
export default App
```

### Theming
Components use Hack4Impact's Design theme by default (`src/theme.js`) but you can provide your own theme using styled-component's [<ThemeProvider>](https://styled-components.com/docs/advanced). You can either fully replace the theme or replace parts of the theme by placing your custom theme through a prop to our components or through `<ThemeProvider>` in the root of the application.

### Server-side Rendering

This library depends on [styled-components](https://styled-components.com/). Thus, if you are server rendering React or using a framework like next.js or gatsby, follow styled-component's [server rendering setup](https://styled-components.com/docs/advanced#server-side-rendering).

## Design Library
For design work, use the [Figma component library](https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/OG-BoG-Design-System-(Working-File)) which includes all text styles, components, complete color palette, and proper box shadows as implemented in the React library. Any changes to the master components are reflected through all instances of that component throughout your designs. 

To use the library, make a copy into your workspace and create a new page for your designs. All components are accessible through the "Assets" tab as you design on any page. 

Refer to the [BoG Component Library website](https://bog-component-library.netlify.app/) for complete design guidelines.