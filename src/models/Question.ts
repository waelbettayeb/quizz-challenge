export interface IQuestion {
  getScore: (number) => number;
  checkAnswer: (number) => boolean;
}

export class Question implements IQuestion {
  text: string;
  choises: string[];
  private expectedAnswer: number;
  static SCORE = 10;
  constructor(text: string, choises: string[], expectedAnswer: number) {
    this.text = text;
    this.choises = choises;
    this.expectedAnswer = expectedAnswer;
  }
  checkAnswer = (answer: number) => answer === this.expectedAnswer;
  getScore = (answer: number) =>
    this.checkAnswer(answer) ? Question.SCORE : 0;
}
