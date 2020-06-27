
  var ctor;
  var repeater;

  describe('Confirm contructor', function() {
    beforeAll(function(done) {
      ctor = RafRepeater;
      repeater = new RafRepeater(function() {
        for (var i = 0; i < 1000000; i++) {
          console.log(i);
        }
        return true;
      }, {});
      done();
      //
      // require(['rafrepeat'], function(RafRepeater) {
      //   ctor = RafRepeater;
      //   var repeater = new RafRepeater(function() {
      //     for (var i = 0; i < 1000000; i++) {
      //       console.log(i);
      //     }
      //     return true;
      //   }, {});
      //   done();
      // });
    });


    it ('instanceof', function() {
      expect(repeater instanceof RafRepeater).toBe(true);
    });

    it ('param count', function() {
      expect(ctor.length).toBe(2);
    });

    afterAll(function() {
      repeater.pause();
    });
  });
