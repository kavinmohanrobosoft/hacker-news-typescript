import React from "react";
import Header from "./molicules/header";
import Footer from "./molicules/footer";
import Posts from "./organisms/posts";
import New from "./organisms/newstories";
import Ask from "./organisms/ask";
import Best from "./organisms/beststories";
import Job from "./organisms/job";
import Show from "./organisms/job";
import history from './history'
import Comments from './organisms/comments'
import * as H from 'history'

import { BrowserRouter, Router, Route, withRouter, RouteComponentProps } from "react-router-dom";

function  App() {
  return (
    <>
      <div className="template">
        
        <Header />
        <BrowserRouter>
        <Router history:history >
          <Route path="/" strict exact component={Posts} />
          <Route path="/new" strict exact component={New} />
          <Route path="/ask"strict exact component={Ask} />
          <Route path="/best" strict exact component={Best} />
          <Route path="/job" strict exact component={Job} />
          <Route path="/show" strict  exact component={Show} />
          <Route path="/comment" strict  exact component={Comments} />
          </Router>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(App);
