// 定义面板积分类

class Scorepanel {
  public score:number = 0;
  public level:number = 1;
  private scoreEle: HTMLElement;
  private levelEle: HTMLElement;
  private maxLevel: number;
  private addLevelCondition: number;

  constructor(maxLevel: number = 10, addLevelCondition: number = 10) {
    this.scoreEle = document.querySelector('.score-box .text');
    this.levelEle = document.querySelector('.level-box .text');
    this.maxLevel = maxLevel;
    this.addLevelCondition = addLevelCondition;
  }

  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    if (this.score % this.addLevelCondition === 0) {
      this.addLevel();
    }
  }

  // 等级提升
  private addLevel() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default Scorepanel;
