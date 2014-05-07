describe("Collisions", function() {
  describe("box collision", function() {
    it("happens when the boxes are equal", function() {
      var detected = collisions.boxCollision(
        { rightEdge: 0, leftEdge: 1, topEdge: 0, bottomEdge: 1 },
        { rightEdge: 0, leftEdge: 1, topEdge: 0, bottomEdge: 1 }
      );

      expect(detected).toBe(true);
    });

    it("happens when the boxes are inside each other", function() {
      var detected = collisions.boxCollision(
        { rightEdge: 2, leftEdge: 4, topEdge: 2, bottomEdge: 6 },
        { rightEdge: 1, leftEdge: 5, topEdge: 1, bottomEdge: 7 }
      );

      expect(detected).toBe(true);
    });

    it("does not happen when the boxes are away on the x axis", function() {
      var detected = collisions.boxCollision(
        { rightEdge: 0, leftEdge: 1, topEdge: 0, bottomEdge: 1 },
        { rightEdge: 2, leftEdge: 3, topEdge: 0, bottomEdge: 1 }
      );

      expect(detected).toBe(false);
    });

    it("does not happen when the boxes are away on the y axis", function() {
      var detected = collisions.boxCollision(
        { rightEdge: 0, leftEdge: 1, topEdge: 0, bottomEdge: 1 },
        { rightEdge: 0, leftEdge: 1, topEdge: 2, bottomEdge: 3 }
      );

      expect(detected).toBe(false);
    });
  });
});
