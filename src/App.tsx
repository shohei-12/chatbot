import React from "react";
import defaultDataset from "./dataset.js";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

type DefaultDataset = typeof defaultDataset;

interface AppState {
  answers: { content: string; nextId: string }[];
  chats: { text: string; type: string }[];
  currentId: keyof DefaultDataset;
  dataset: DefaultDataset;
  open: boolean;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }

  initAnswers() {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({ answers: initAnswers });
  }

  initChats() {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: "question",
    };

    const chats = this.state.chats;
    chats.push(chat);

    this.setState({ chats });
  }

  componentDidMount() {
    this.initChats();
    this.initAnswers();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
