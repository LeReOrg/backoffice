import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";

import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import "assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router history={hist}>
      <RecoilRoot>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin" component={Admin} />
         
        </Switch>
      </RecoilRoot>
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);
