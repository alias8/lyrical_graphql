import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

import Default from "./components/Default";
import NoMatch from "./components/NoMatch";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
import "./style/style.css";

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
          <Default>
            <Switch>
              <Route exact={true} path={"/"} component={SongList} />
              <Route exact={true} path={"/songs/new"} component={SongCreate} />
              <Route exact={true} path={"/songs/:id"} component={SongDetail} />
              <Route component={NoMatch} />
            </Switch>
          </Default>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
