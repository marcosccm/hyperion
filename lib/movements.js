var movements = {
  linearForward: function(x, y, speed, dt) {
    var nextX = x + speed * dt;
    return { x: nextX, y: y, speed: speed };
  }
}
