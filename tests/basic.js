  var repeater;
  // repeater = new RafRepeater(function() {
  //
  //   return true;
  // }, {});

  describe('Run some basic tests', function() {

    // beforeAll(function(done) {
    //   require(['rafrepeat'], function(RafRepeater) {
    //     repeater = new RafRepeater(function() {
    //
    //       return true;
    //     }, {});
    //
    //     done();
    //   });
    // });

    it ('instance of', function() {
      expect(repeater instanceof RafRepeater).toBe(true);
    });
  });
