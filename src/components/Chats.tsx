import React from "react";
import { Chat } from "./index";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chats: {
      height: 400,
      padding: 0,
      overflow: "auto",
    },
  })
);

interface ChatsProps {
  chats: {
    text: string;
    type: string;
  }[];
}

const Chats: React.FC<ChatsProps> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats}>
      {props.chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
