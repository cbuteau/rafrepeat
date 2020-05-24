require(['rafrepeat'], function(RafRepeater) {

  describe('Confirm contructor', function() {
    var repeater = new RafRepeater(function() {
      for (var i = 0; i < 1000000; i++) {
        console.log(i);
      }
      return true;
    }, {});

    it ('instanceof', function() {
      expect(repeater instanceof RafRepeater).toBe(true);
    });

    it ('param count', function() {
      expect(RafRepeater.length).toBe(2);
    });
  });

});
