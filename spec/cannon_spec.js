describe("Cannon", function() {
  var cannon;

  beforeEach(function() {
    cannon = new Cannon();
  });

  it("starts empty", function() {
    expect(cannon.magazine).toEqual([]);
  });

  describe("shooting", function() {
    it("creates a bullet with the associated img and the received x and y", function() {
      cannon = new Cannon("bullet_image");
      var bullet = cannon.shoot(10, 20);
      expect(bullet.sprite.image).toBe("bullet_image");
      expect(bullet.sprite.x).toBe(10);
      expect(bullet.sprite.y).toBe(20);
    });

    it("adds that bullet to the magazine", function() {
      cannon.shoot(10, 20);
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
