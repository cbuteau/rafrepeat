describe('Run some basic tests', function() {
  var repeater;

  before(function(done) {
    require(['rafrepeat'], function(RafRepeater) {
      repeater = new RafRepeater(function() {

        return true;
      }, {});

      done();
    });
  });

  it ('instance of', function() {
    expect(repeater instanceof RafRepeater).to.equal(true);
  });
});
