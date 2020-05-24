require(['../rafrepeat'], function(RafRepeater) {
  var step = 0;
  var repeater = new RafRepeater(function() {
    console.log(step);
    step++;
    return true;
  }, {});
});
