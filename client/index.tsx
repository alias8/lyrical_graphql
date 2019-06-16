import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
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
        <SongList />
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
