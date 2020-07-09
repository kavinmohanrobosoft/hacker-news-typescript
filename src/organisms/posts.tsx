import React, { useState, useEffect, useRef } from "react";
import IndividualPosts from "../components/postpage";
import { getData } from "../services/calls";
import { PostsResult } from "../utils/interfaces";
import * as Api from "../services/apis";

const Posts = () => {
  const [posts, setPosts] = useState<PostsResult[]>([]);
  useEffect(() => {
    let url = Api.stories;
    getData(url).then((data) => data && setPosts(data));
  }, []);

  return (
    <div className="App"><div className="arrow-up"></div>{posts && <IndividualPosts posts={posts} />}</div>
  );
};

export default Posts;
