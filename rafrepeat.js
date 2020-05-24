
function createClosure(repeaterPtr, callback, options) {
  return function() {
    var continueRun;
    if (options.forgetTry) {
      // Save complexity without a try catch when solidified.
      continueRun = callback(options);
    } else {
      try {
        continueRun = callback(options);
      } catch (e) {
        console.log(options.name);
        console.error(e);
      }
    }
    if (continueRun) {
      repeaterPtr.start();
    }
  };
}


function RafRepeater(callback, options) {
  this.options = options;
  this.callback = createClosure(this, callback, options);
  this.start();
}

RafRepeater.prototype = {
  start: function() {
    this.token = requestAnimationFrame(this.callback);
  },
  pause: function() {
    cancelAnimationFrame(this.token);
  }
};


var exposed = RafRepeater;

// only exposed for browsers not NODE JS.
if (typeof define === 'function' && define.amd) {
  define(function() {
    return exposed;
  });
} else {
  window.RafRepeater = exposed;
}
