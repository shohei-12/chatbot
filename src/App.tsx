import React from "react";
import defaultDataset from "./dataset.js";
import "./assets/styles/style.css";
import { AnswersList } from "./components/index";

type DefaultDataset = typeof defaultDataset;

interface AppState {
  answers: { content: string; nextId: string }[];
  chats: string[];
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

  initAnswer() {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({ answers: initAnswers });
  }

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
