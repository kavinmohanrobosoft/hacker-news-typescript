import React from 'react';
import Posts from '../organisms/posts';
import New from '../organisms/newstories';
import Ask from '../organisms/ask';
import Best from '../organisms/beststories';
import Job from '../organisms/job';
import Show from '../organisms/job'




import { BrowserRouter, Route } from "react-router-dom";

const Body = () => {
    return <BrowserRouter>
    <Route path="" component={Posts} />
    <Route path="/new" component={New} />
    <Route path="/ask" component={Ask} />
    <Route path="/best" component={Best} />
    <Route path="/job" component={Job} />
    <Route path="/show" component={Show} />
  </BrowserRouter>
}

export default Body;