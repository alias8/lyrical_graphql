import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from "./components/App";
import { SongCreate } from "./components/SongCreate";
import SongList from "./components/songList";

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink(),
  cache
});

class Root extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route path={"/"} component={SongList} />
          <Route path={"/#/song/new"} component={SongCreate} />
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
