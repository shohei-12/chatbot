import React from "react";
import defaultDataset from "../dataset";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type DefaultDataset = typeof defaultDataset;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

interface AnswerProps {
  content: string;
  select: (
    selectedAnswer: string,
    nextQuestionId: keyof DefaultDataset
  ) => void;
  nextId: keyof DefaultDataset;
}

const Answer: React.FC<AnswerProps> = (props) => {
  //const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={props.select.bind(null, props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
