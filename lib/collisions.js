var collisions = {
  boxCollision: function(s1,s2) {
    return (
      s1.leftEdge   >= s2.rightEdge &&
      s1.rightEdge  <= s2.leftEdge &&
      s1.bottomEdge >= s2.topEdge   &&
      s1.topEdge    <= s2.bottomEdge 
    );
  }
};
