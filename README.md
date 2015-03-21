# [Este.js](https://github.com/steida/este) • [TodoMVC](http://todomvc.com)

[![Circle CI](https://circleci.com/gh/steida/este-todomvc.svg?style=svg)](https://circleci.com/gh/steida/este-todomvc)
[![Join the chat at https://gitter.im/steida/este-todomvc](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/steida/este-todomvc)
[![Dependency Status](https://david-dm.org/steida/este-todomvc.png)](https://david-dm.org/steida/este-todomvc)
[![devDependency Status](https://david-dm.org/steida/este-todomvc/dev-status.png)](https://david-dm.org/steida/este-todomvc#info=devDependencies)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

> ES6 React Flux webpack gulp om-like isomorphic immutable k̶i̶t̶c̶h̶e̶n̶s̶i̶n̶k̶ t̶w̶e̶e̶t̶y̶b̶i̶r̶d̶s̶ TodoMVC.

> For dev stack updates and changes please follow [Este.js](https://github.com/steida/este). I don't have time to maintain this demo. Maybe someone else could help? 

![Este Logo](https://cloud.githubusercontent.com/assets/66249/5931133/9e973dfc-a699-11e4-83bc-7b5c6fb58bfd.jpeg)

## Features

- Written in [babeljs.io](https://babeljs.io/), the best ES6 and ES7 transpiler.
It handles future JavaScripts with [React JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax spiced by [Flowtype](http://flowtype.org/) type [annotations](http://flowtype.org/docs/type-annotations.html#_) already. Sourcemaps
enabled by default.
- [React](http://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), [react-router](https://github.com/rackt/react-router), [immutable.js](http://facebook.github.io/immutable-js/), and more awesomeness.
- Isomorphic architecture with state-less stores, server side rendering, and routing inside expressjs.
- [jest](https://facebook.github.io/jest) unit testing.
- Global immutable app state like Om with cursors, so app state can be snapshotted and reloaded. Undo redo is super easy.
- The state of art performance thanks to [immutable.js](http://facebook.github.io/immutable-js) and [PureRenderMixin](http://facebook.github.io/react/docs/pure-render-mixin.html) combo.
- Well tuned dev stack based on [gulp.js](http://gulpjs.com/) and [webpack](http://webpack.github.io/) configured both for dev and production.
- CSS livereload and webpack module hot reload, so you can tweak React in real time.
- Vanilla [Flux](https://facebook.github.io/flux/), remember what I wrote about frameworks?
- Isomorphic 404 and 500 pages.

## Install

```
  npm install --global gulp
  git clone https://github.com/steida/este-todomvc.git
  cd este-todomvc
  npm install
```

## Run

- `gulp` run app in development mode
- `gulp -p` run app in production mode

## Credit

made by [Daniel Steigerwald](https://twitter.com/steida)
