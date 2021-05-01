
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

## Concept/Intent

The requestAnimationFrame() has been used for 2D and 3D rendering on canvas for some time.
Its efficiency is starting to be used in WorkQueues for other apps now.

However it does take up cycles on the Main UI thread of the browser.

And since it needs to be re-requested each pass.  We can let it go to sleep and then come back to it.

It is my attitude that you should abstract this use and use it while work is needed to be done.

```javascript
const WORK_PER_CALLBACK = 3;

function rafCallback() {
  let count = 0;
  while (WorkQueue.length) {
    if (count <= WORK_PER_CALLBACK) {
      let work = WorkQueue.pop();
      work.dispatch();
      count++;
    }
    // return true and keep it running if more work to be done.
    return WorkQueue.length !== 0;
  }

  // return false to let it go to sleep.
  return false;
}
```

## Usage

Honestly anyone can copy and paste this code and modify it to their own use.
I am fan of code that does ONE JOB.

Use it as an internal class.
But if you come up with another option that should be included...
let me know and I will probably add it if it is generic enough.


## API

You have one constructor.

```javascript
  var repeat = new RafRepeater(function() {
    // DO work.
    return true; // trigger again.
  });
```

The object you create has the following properties and methods.

### Optional Options

```javascript
  var repeat = new RafRepeater(function() {
    // DO work.
    return true; // trigger again.
  }, {
    forgetTry: false //default ...otherwise there is a try-catch
    notContinue: false //default if an exception happens do we requeue requestAnimationFrame()
  });
```


### Properties

+ isRunning - Whether the repeater is currently running.

### Methods

+ pause - Stops the repeater from running.
+ start - starts the repeater running.

## Status

Having trouble getting simple tests to run.
Get example running first.

http://localhost:3000/example/index.html
