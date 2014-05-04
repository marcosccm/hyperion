describe("Sprite", function() {
  var sprite;

  beforeEach(function() {
    sprite = new Sprite();
  });

  it("has a default scale of 1", function() { 
    expect(sprite.scale).toEqual(1);
  });

  it("has a default frameCount of 1", function() { 
    expect(sprite.frameCount).toEqual(1);
  });

  it("has a default frameRate of 30", function() { 
    expect(sprite.frameRate).toEqual(30);
  });

  describe("updating", function() {
    it("updates the currentframe by the framerate times the dt", function() {
      expect(sprite.currentFrame).toEqual(0);
      sprite.update(0.01);
      expect(sprite.currentFrame).toEqual(0.3);
    });

    it("keeps the currentFrame under the totalFrames limit", function() {
      var sprite = new Sprite({ frameRate: 1, frameCount: 2 });
      expect(sprite.currentFrame).toEqual(0);
      sprite.update(1);
      expect(sprite.currentFrame).toEqual(1);
      sprite.update(1);
      expect(sprite.currentFrame).toEqual(2);
      sprite.update(1);
      expect(sprite.currentFrame).toEqual(0);
    });
  });
});
