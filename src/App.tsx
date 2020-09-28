import React from "react";
import defaultDataset from "./dataset.js";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

type DefaultDataset = typeof defaultDataset;

interface AppState {
  answers: { content: string; nextId: keyof DefaultDataset }[];
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
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestion(nextQuestionId: keyof DefaultDataset) {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question",
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers as {
        content: string;
        nextId: keyof DefaultDataset;
      }[],
      chats: chats,
      currentId: nextQuestionId,
    });
  }

  selectAnswer(selectedAnswer: string, nextQuestionId: keyof DefaultDataset) {
    switch (true) {
      case nextQuestionId === "init":
        this.displayNextQuestion(nextQuestionId);
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: "answer",
        });

        this.setState({ chats });

        this.displayNextQuestion(nextQuestionId);
        break;
    }
  }

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
        </div>
      </section>
    );
  }
}
