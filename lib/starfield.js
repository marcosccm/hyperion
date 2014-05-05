function StarField(width, height, totalStars) {
  var speeds = [50, 100, 200, 400];
  var colours = ['#a5b9ff', '#ffcc8a', '#fff5f2', '#ffecd3'];

  this.stars = _.map(_.range(totalStars), function() {
      return new Star({
        x: _.random(0, width), 
        y: _.random(0, height), 
        size: 1,
        speed: _.sample(speeds), 
        colour: _.sample(colours),
        boundary: width
      });
  });
}

StarField.prototype.update = function(dt) {
  this.stars.forEach(function(star) { star.update(dt) });
};

StarField.prototype.render = function(ctx) {
  this.stars.forEach(function(star) { star.render(ctx) });
};

function Star(args) {
  this.x = args.x;
  this.y = args.y;
  this.boundary = args.boundary;
  this.speed = args.speed;
  this.size = args.size;
  this.colour = args.colour;
}

Star.prototype.update = function(dt) {
  this.x -= this.speed * dt;

  if (this.x < 0) {  
    this.x = this.boundary;                         
    this.y = _.random(0, this.boundary);
  }                                   
};

Star.prototype.render = function(ctx) {
  ctx.fillStyle = this.colour
  ctx.fillRect(this.x, this.y, this.size, this.size);
};
