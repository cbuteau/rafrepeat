
function RafRepeater(callback, options) {
  this.callback = callback;
  this.options = options;
}

RafRepeater.prototype {
  start: function() {
    this.token = requestAnimationFrame(this.callback.bind(this));
  },
  pause: function() {
    cancelAnimationFrame(this.token);
  }
};

window.RafRepeater = RafRepeater;
