import { Question } from "./Question";
export interface IQuestionObject {
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  answer: number;
}
export function convertJsonToQuestion(object: IQuestionObject): Question {
  const choices: string[] = [object.choice1, object.choice2, object.choice3];
  return new Question(object.question, choices, object.answer);
}
