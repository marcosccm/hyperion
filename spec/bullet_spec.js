describe("Bullet", function() {
  var bullet;

  beforeEach(function() {
    bullet = new Bullet("image", 0, 0);
  });

  describe("update", function() {
    it("updates itself by calling the moviment function", function() {
      var movement = function() { return { x: 10, y: 20, speed: 30 }; }
      bullet.movement = movement;
      bullet.update(1);
      expect(bullet.x).toEqual(10);
      expect(bullet.y).toEqual(20);
      expect(bullet.speed).toEqual(30);
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
