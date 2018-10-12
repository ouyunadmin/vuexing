(function (w) {
  function Game(map) {
    this.snake = new Snake();
    this.food = new Food();
    this.map = map;
    this.timeId;
  }

  //渲染
  //extend
  Game.prototype.render = function () {
    this.snake.render(this.map);
    this.food.render(this.map, this.snake);
  }

})(window)