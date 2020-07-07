import React, { useState } from "react";
import OlList from "../atoms/ollist";
import { IndividualPostsProps } from '../utils/types'

const IndividualPosts = (props:IndividualPostsProps) => {
  let [openCommentBox, setCommentVal] = useState(false);
  const [page, setPageItems] = useState({
    start: 0,
    end: 30
  });
  if (props.posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <OlList
        className="postlist"
        start={page.start +1}
        data={props.posts.slice(page.start, page.end).map((post) => (
          <>
            <li key={post.id}>
              <a href={post.url}>{post.title}</a>
            </li>
            {/* <div className="commentLink" onClick={() => setCommentVal(true)}>Comments</div> */}
            
          </>
        ))}
      ></OlList>
      <div className="moreLink" onClick={() => setPageItems({start: page.start+30, end: page.end+30})}>More</div>
    </>
  );
};

export default IndividualPosts;
