describe("Cannon", function() {
  var cannon;

  beforeEach(function() {
    cannon = new Cannon();
  });

  it("starts empty", function() {
    expect(cannon.magazine).toEqual([]);
  });

  describe("shooting", function() {
    it("adds a bullet to the magazine", function() {
      cannon.shoot();
      expect(cannon.magazine.length).toBe(1);
    });

    it("respects the cooldown time", function() {
      cannon.shoot();
      cannon.shoot();
      expect(cannon.magazine.length).toBe(1);
    });
  });

  describe("updating", function() {
    it("calls update on all bullets", function() {
      var dt = {};
      var bullet = cannon.shoot()
      spyOn(bullet, 'update');
      cannon.update(dt);
      expect(bullet.update).toHaveBeenCalledWith(dt);
    
    });
  });

  describe("rendering", function() {
    it("calls render on all bullets", function() {
      var ctx = {};
      var bullet = cannon.shoot()
      spyOn(bullet, 'render');
      cannon.render(ctx);
      expect(bullet.render).toHaveBeenCalledWith(ctx);
    
    });
  });
});
