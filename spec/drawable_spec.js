describe("A Drawable", function() {
  var drawable;

  function StubDrawable(args) {
    this.x =  args.x;
    this.y =  args.y;
    this.sprite =  {
      width: args.width,
      height: args.height
    }
  }
  StubDrawable.prototype = Drawable();
  

  describe("has a hit box", function() {
    beforeEach(function() {
      drawable = new StubDrawable({ x: 10, y: 20, width: 35, height: 40 });
    });

    it("with leftEdge equals x", function() {
      expect(drawable.hitBox().leftEdge).toEqual(10);
    });

    it("with rightEdge equals to x + sprite.width", function() {
      expect(drawable.hitBox().rightEdge).toEqual(45);
    });

    it("with topEdge equals to y", function() {
      expect(drawable.hitBox().topEdge).toEqual(20);
    });

    it("with bottomEdge equals to y + sprite.height", function() {
      expect(drawable.hitBox().bottomEdge).toEqual(60);
    });
  });
});
