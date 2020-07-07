import React, { useState, useEffect } from "react";
import IndividualPosts from './individualPosts'
import { getData } from '../services/calls'
import { PostsResult } from '../utils/interfaces';
import * as Api from '../services/apis'

const New = () => {
    const [posts, setPosts] = useState<PostsResult[]>([]);
  
    useEffect(() => {
        let url = Api.newStory
        let result= getData(url)
        setPosts(result);
      
    }, []);
  
    return (
      <div className="App">
        <IndividualPosts posts={posts}  />
      </div>
    );
  }

export default New;
