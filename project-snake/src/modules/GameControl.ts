import Food from "./Food";
import Scorepanel from "./Scorepanel";
import Snake from "./Snake";

const keyboardKey = [
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'ArrowLeft',
  'Up',
  'Right',
  'Down',
  'Left',
]

// 定义游戏控制类
class GameControl{
  snake: Snake;
  food: Food;
  scorepanel: Scorepanel;
  direction: string = 'ArrowRight'; // 蛇前进的方向
  isLive: boolean = true;
  button: HTMLElement;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorepanel = new Scorepanel(10, 2);
    this.button = document.querySelector('.button-box');
    this.init();
  }

  // 游戏初始化
  init() {
    this.button.addEventListener('click', this.clickButton);
  }

  // 点击开始按钮
  clickButton = () =>{
    this.button.style.display = 'none';
    document.addEventListener('keydown', this.handleKeydown);
    this.run();
  }

  // 键盘事件
  handleKeydown = (e: KeyboardEvent) => {
    if (keyboardKey.includes(e.key) && !this.snake.isTurnRound(e.key, this.direction)) {
      this.direction = e.key;
    }
  }

  // 检查蛇是否吃到食物
  checkEatFood(x: number, y:number) {
    if (x === this.food.x && y === this.food.y) {
      this.scorepanel.addScore(); // 加分
      this.snake.addBody(); // 蛇增加长度
      this.food.changeSite(); // 改变食物位置
    }
  }

  // 蛇运动
  run = () => {
    let x = this.snake.x;
    let y = this.snake.y;
    switch(this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        x += 10;
        break;
      case 'ArrowDown':
      case 'Down':
        y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        x -= 10;
        break;
    }

    this.checkEatFood(x, y);

    try {
      this.snake.x = x;
      this.snake.y = y;
    } catch (err) {
      alert(err.message + 'GAME OVER!');
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run, 300 - (this.scorepanel.level - 1) * 30);
  }

}

export default GameControl;