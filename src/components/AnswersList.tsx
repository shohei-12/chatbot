import React from "react";
import { Answer } from "./index";

interface AnswersListProps {
  answers: { content: string; nextId: string }[];
}

const AnswersList: React.FC<AnswersListProps> = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => (
        <Answer content={value.content} key={index.toString()} />
      ))}
    </div>
  );
};

export default AnswersList;
