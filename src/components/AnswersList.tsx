import React from "react";
import defaultDataset from "../dataset";
import { Answer } from "./index";

type DefaultDataset = {
  [nextQuestionId: string]: {
    answers: { content: string; nextId: string }[];
    question: string;
  };
};

interface AnswersListProps {
  answers: { content: string; nextId: string }[];
  select: (selectedAnswer: string, nextQuestionId: string) => void;
}

const AnswersList: React.FC<AnswersListProps> = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => (
        <Answer
          content={value.content}
          select={props.select}
          nextId={value.nextId}
          key={index.toString()}
        />
      ))}
    </div>
  );
};

export default AnswersList;
