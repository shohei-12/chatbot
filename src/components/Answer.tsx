import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

interface AnswerProps {
  content: string;
}

const Answer: React.FC<AnswerProps> = (props) => {
  //const classes = useStyles();
  return (
    <Button variant="contained" color="primary">
      {props.content}
    </Button>
  );
};

export default Answer;
