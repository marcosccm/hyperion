describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player({ speed: 200, x: 0, y: 0 });
  });

  it("can move up", function() {
    player.up(0.01);
    expect(player.y).toEqual(-2); 
  });

  it("can move down", function() {
    player.down(0.01);
    expect(player.y).toEqual(2); 
  });

  it("can move left", function() {
    player.left(0.01);
    expect(player.x).toEqual(-2); 
  });

  it("can move right", function() {
    player.right(0.01);
    expect(player.x).toEqual(2); 
  });

  it("can shoot", function() {
    var cannon = jasmine.createSpyObj('cannon', ['shoot']);
    player = new Player({ x: 0, y: 0, cannon: cannon });
    player.shoot();
    
    expect(cannon.shoot).toHaveBeenCalledWith(40, 11.5);
  });

  describe("when rendering", function() {
    it("renders its sprite and the cannons", function() {
      var ctx = {};
      var cannon = jasmine.createSpyObj('cannon', ['render']);
      player = new Player({ x: 10, y: 20, cannon: cannon });
      spyOn(player.sprite, 'render');

      player.render(ctx);

      expect(player.sprite.render).toHaveBeenCalledWith(ctx,10, 20);
      expect(player.cannon.render).toHaveBeenCalledWith(ctx);
    });
  });

  describe("when updating", function() {
    it("updates its cannon and sprite", function() {
      var dt = 0;
      var cannon = jasmine.createSpyObj('cannon', ['update']);
      player = new Player({ x: 10, y: 20, cannon: cannon });
      spyOn(player.sprite, 'update');

      player.update(dt);

      expect(player.cannon.update).toHaveBeenCalledWith(dt);
      expect(player.sprite.update).toHaveBeenCalledWith(dt);
    });
  });
});
