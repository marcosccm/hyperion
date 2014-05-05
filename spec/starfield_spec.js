describe("Starfield", function() {
  var starfield;

  beforeEach(function() {
    starfield = new StarField(0, 0, 20);
  });

  it("has as many stars as the received param", function() {
    expect(starfield.stars.length).toEqual(20); 
  });

  describe("when updating", function() {
    var dt = {};
    it("updates each star", function() {
      starfield = new StarField(0, 0, 2);
      spyOn(starfield.stars[0], 'update');
      spyOn(starfield.stars[1], 'update');

      starfield.update(dt);

      expect(starfield.stars[0].update).toHaveBeenCalledWith(dt);
      expect(starfield.stars[1].update).toHaveBeenCalledWith(dt);
    });
  });

  describe("when rendering", function() {
    var ctx = {};
    it("renders each star", function() {
      starfield = new StarField(0, 0, 2);
      spyOn(starfield.stars[0], 'render');
      spyOn(starfield.stars[1], 'render');

      starfield.render(ctx);

      expect(starfield.stars[0].render).toHaveBeenCalledWith(ctx);
      expect(starfield.stars[1].render).toHaveBeenCalledWith(ctx);
    });
  });
});
