describe("Star", function() {
  var star;

  beforeEach(function() {
    star = new Star(0, 0, 20);
  });

  describe("when updating", function() {
    it("moves from right to left according to its speed", function() {
      star = new Star({ x: 5, y: 0, speed: 2});

      dt = 0.5;
      star.update(dt);

      expect(star.x).toEqual(4);
    });

    it("resets the star to its boundary in case of escaping", function() {
      star = new Star({ x: 0, y: 0, speed: 2, boundary: 10});

      dt = 1;
      star.update(dt);

      expect(star.x).toEqual(10);
    });
  });

  describe("when rendering", function() {
    it("draws a square with its coordinates and colour", function() {
      var ctx = { fillRect: function() {} };
      star = new Star({ x: 5, y: 6, size: 2, colour: 'red'});
      spyOn(ctx,'fillRect')

      star.render(ctx);

      expect(ctx.fillStyle).toEqual('red');
      expect(ctx.fillRect).toHaveBeenCalledWith(5,6,2,2);
    });
  });

});
