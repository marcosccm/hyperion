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
      expect(bullet.x).toBe(10);
      expect(bullet.y).toBe(20);
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

    it("removes bullets that are out of range", function() {
      cannon = new Cannon("bullet_image", 90);
      cannon.shoot();
      cannon.cooled = true;
      cannon.shoot();
      cannon.magazine[0].x = 100;
      cannon.magazine[1].x = 90;

      expect(cannon.magazine.length).toEqual(2);
      cannon.update(0);
      expect(cannon.magazine.length).toEqual(1);
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
