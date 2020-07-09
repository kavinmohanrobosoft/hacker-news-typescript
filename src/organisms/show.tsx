import React, { useState, useEffect } from "react";
import IndividualPosts from "../components/postpage";
import { getData } from "../services/calls";
import { PostsResult } from "../utils/interfaces";
import * as Api from "../services/apis";

const Show = () => {
  const [posts, setPosts] = useState<PostsResult[]>([]);

  useEffect(() => {
    let url = Api.show;
    getData(url).then((data) => data && setPosts(data));
  }, []);

  return (
    <div className="App">{posts && <IndividualPosts posts={posts} />}</div>
  );
};

export default Show;
