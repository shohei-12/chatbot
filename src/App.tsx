import React from "react";
import defaultDataset from "./dataset.js";
import "./assets/styles/style.css";

interface AppState {
  answers: string[];
  chats: string[];
  currentId: string;
  dataset: object;
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
  render() {
    return (
      <section className="c-section">
        <div className="c-box"></div>
      </section>
    );
  }
}
