describe("Bullet", function() {
  var bullet;

  beforeEach(function() {
    bullet = new Bullet("image", 0, 0);
  });

  describe("update", function() {
    it("increases the bullet x by speed * dt", function() {
      bullet.update(1);
      expect(bullet.x).toEqual(500);
    });
  });

  describe("render", function() {
    it("renders the sprite with the current x and y", function() {
      var ctx = {};
      bullet = new Bullet("image", 10, 20);
      spyOn(bullet.sprite, 'render');
      bullet.render(ctx);
      expect(bullet.sprite.render).toHaveBeenCalledWith(ctx,10, 20);
    });
  });

});
