
# Raf Repeat

## Concept

Welcome to the world of mini tools.

All this does is provide a simplified version of using the requestAnimationFrame.

## Badges

### Coveralls

[![Coverage Status](https://coveralls.io/repos/github/cbuteau/rafrepeat/badge.svg)](https://coveralls.io/github/cbuteau/rafrepeat)

### Circle CI Build

[![CircleCI](https://circleci.com/gh/cbuteau/rafrepeat.svg?style=svg)](https://circleci.com/gh/cbuteau/rafrepeat)

### npm Version

[![npm version](http://img.shields.io/npm/v/rafrepeat.svg?style=flat)](https://npmjs.org/package/rafrepeat "View this project on npm")


### npm big badge

[![NPM](https://nodei.co/npm/rafrepeat.png)](https://nodei.co/npm/rafrepeat/)

## API

You have one constructor.

```javascript
  var repeat = new RafRepeater(function() {
    // DO work.
    return true; // trigger again.
  });
```

The object you create has the following properties and methods.

### Properties

+ isRunning - Whether the repeater is currently running.

### Methods

+ pause - Stops the repeater from running.
+ start - starts the repeater running.

## Status

Having trouble getting simple tests to run.
Get example running first.

http://localhost:3000/example/index.html
