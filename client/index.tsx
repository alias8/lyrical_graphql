import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import { App } from "./components/App";
import SongCreate from "./components/SongCreate";
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
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/songs/new">Create Song</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={"/"} component={SongList} />
            <Route exact path={"/songs/new"} component={SongCreate} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
