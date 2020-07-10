import React, { useState, useEffect, useContext, createContext } from "react";
import { IQuestion, Question } from "src/models/Question";
import * as tha3lab from "@public/tha3lab.json";
import {
  convertJsonToQuestion,
  IQuestionObject,
} from "src/models/QuestionJsonAdapter";

export interface ISessionContext {
  init: () => void;
  questions: Question[];
  submitAnswer: (number) => boolean | null;
  current: number;
  currentScore: number;
  goNext: () => boolean;
  isSubmited: () => boolean;
}
export const SessionContext = React.createContext<ISessionContext>({
  questions: undefined,
  submitAnswer: undefined,
  current: 0,
  currentScore: 0,
  goNext: () => undefined,
  isSubmited: () => undefined,
  init: () => undefined,
});

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider: React.FC = ({ children }) => {
  const data: IQuestionObject[] = tha3lab.array;
  const questions = data.map((d) => convertJsonToQuestion(d));
  const [current, setCurrent] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const init = () => {
    setCurrent(0);
    setCurrentScore(0);
    setAnswers([]);
  };
  const submitAnswer = (answer: number) => {
    if (current != null && !isSubmited()) {
      answers.push(answer);
      setCurrentScore(currentScore + questions[current].getScore(answer));

      return questions[current].checkAnswer(answer);
    }
    return null;
  };
  const isSubmited = () => {
    return answers[current] !== undefined;
  };
  const goNext = () => {
    if (!isSubmited()) return false;
    current + 1 >= questions.length
      ? setCurrent(null)
      : setCurrent(current + 1);
    return !!current;
  };

  return (
    <SessionContext.Provider
      value={{
        init,
        questions,
        submitAnswer,
        current,
        currentScore,
        goNext,
        isSubmited,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
