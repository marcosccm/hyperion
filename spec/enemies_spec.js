describe("Enemies", function() {
  var randomizer = function() { return 20; }
  var enemies;

  beforeEach(function() {
    enemies = new Enemies({ randomizer: randomizer, xBoundary: 30 });
  });

  describe("when spawning enemies", function() {
    it("creates the enemy in a random location on the right corner", function() {
      var enemy = enemies.spawn();

      expect(enemy.x).toEqual(30);
      expect(enemy.y).toEqual(20);
    });

    it("keeps track of the created enemy", function() {
      enemies.spawn();
      expect(enemies.inner.length).toEqual(1);
    });
  });
});
