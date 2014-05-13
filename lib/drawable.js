function Drawable() {
  function hitBox(){
    return {
      leftEdge: this.x,
      rightEdge: this.x + this.sprite.width,
      topEdge: this.y,
      bottomEdge: this.y + this.sprite.height 
    }
  }

  return {
    hitBox: hitBox
  }
}

