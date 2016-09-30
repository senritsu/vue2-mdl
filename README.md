# vue2-mdl
A set of Vue components for using the MDL CSS framework.

## Requirements

- [Vue.js](https://vuejs.org) 2.0
- [MDL](https://getmdl.io/)
- [Dialog Polyfill](https://github.com/GoogleChrome/dialog-polyfill) for MDL dialogs

For the moment MDL and the polyfill can/should be included directly in your root html, as can be seen in the [usage section](#usage)

## Included components

- Button, in various style variations
- TextField, regular, expandable and multiline
- Icon
- Spacer
- Layout, with vue-router slot by default
- Header
- Drawer, to go along with the layout
- Navigation, with nav links
- Menu, with menu actions and menu button
- Grid, rows and cells
- Card, with actions, media, menu, text and title

# Usage

## short version

```js
import Vue2Mdl from 'vue2-mdl'
Vue.use(Vue2Mdl)
```

## long version

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Your Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.4/dialog-polyfill.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue_grey-indigo.min.css" />
    <script defer type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.4/dialog-polyfill.min.js"></script>
    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    <script defer src="your-built-app.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import YourApp from './YourApp.vue'

// import components and make globally available
import Vue2Mdl from 'vue2-mdl'
Vue.use(Vue2Mdl)

// mount your application
const router = new VueRouter({
  // router options
})

const AppComponent = Vue.extend(YourApp)

new AppComponent({
  el: "#app",
  router
})
```

## Components

### Buttons

```html
<mdl-button>Test Button</mdl-button>
<mdl-button fab icon="add"></mdl-button>
<mdl-button colored>Test Button</mdl-button>
<mdl-button colored accent>Test Button</mdl-button>
```

### ...

No more content as of yet.
