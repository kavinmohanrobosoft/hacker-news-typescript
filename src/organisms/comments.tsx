import React, { useState, useEffect, useRef } from "react";
import Comment from "../components/comments";
import { getComments } from "../services/calls";
import { PostsResult } from "../utils/interfaces";
import * as Api from "../services/apis";

const Comments = () => {
  const [posts, setPosts] = useState<PostsResult[]>([]);
  useEffect(() => {
    var url_string = window.location.href;
    var link = new URL(url_string);
    var id = link.searchParams.get("id");
    console.log(id);
    let url = `${Api.baseURL}item/${id}.json`;
    getComments(url).then((data) => data && setPosts(data));
  }, []);

  return <div className="App">{posts && <Comment posts={posts} />}</div>;
};

export default Comments;
