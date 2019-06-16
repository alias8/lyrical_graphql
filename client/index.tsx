import React from "react";
import ReactDOM from "react-dom";

class Root extends React.Component {
  public render() {
    return <div>Lyrical</div>;
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
