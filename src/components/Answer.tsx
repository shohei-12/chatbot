import React from "react";
import defaultDataset from "../dataset";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type DefaultDataset = typeof defaultDataset;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#ff8549",
      color: "#ff8549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#ff8549",
        color: "#fff",
      },
    },
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
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={props.select.bind(null, props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
