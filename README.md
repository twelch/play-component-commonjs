# play-ui-lib-browserify
Playing with creating a flexible UI component library with browserify.  

## Goal
Create a standalone library of UI components using Browserify.

## Architecture and Design Decisions
 * Mixins for base component functionality
 * Composition for creating new components from others
 * Vanilla JS for DOM event handling and asynch
 * EventEmitter for component communication
 * Handlebars UI templates
 * Optional jQuery plugin bindings ('cause some people want that)

## Build Features
 * Dev and production builds with and without jQuery
 * Precompiled handlebar templates (hbsfy)

### Usage
Install dependencies
~~~~
npm install
~~~~

Start dev server with livereload:
~~~~
npm run start
~~~~
Browse to http://localhost:9966/examples/

ESLint watch:
~~~~
npm run lint:watch
~~~~

Generate standalone builds
~~~~
npm run build
~~~~

Generates multiple builds in dist folder including dev, minified production, and minified production with jQuery.  Sourcemaps are included.
