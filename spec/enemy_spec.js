describe("Enemy", function() {
  var enemy;

  beforeEach(function() {
    enemy = new Enemy({ x: 10, y: 20, image: "bla" });
  });

  describe("when updating", function() {
    it("moves from right to left according to its speed", function() {
      dt = 0.01;
      enemy.update(dt);

      expect(enemy.x).toEqual(6);
    });
  });

  describe("when rendering", function() {
    it("draws its sprite according to its x and y", function() {
      var ctx = {};
      spyOn(enemy.sprite, 'render');

      enemy.render(ctx);

      expect(enemy.sprite.render).toHaveBeenCalledWith(ctx,10, 20);
    });
  });

});
