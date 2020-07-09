import React, { useState } from "react";
import OlList from "../atoms/ollist";
import { IndividualPostsProps } from "../utils/types";
import Opentext from "../atoms/opentext";

const IndividualPosts = (props: IndividualPostsProps) => {
  const [page, setPageItems] = useState({
    start: 0,
    end: 30,
  });
  if (props.posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <OlList
        className="postlist"
        start={page.start + 1}
        data={props.posts.slice(page.start, page.end).map(
          (post) =>
            post &&
            post.url && (
              <>
                <li key={post.id}>
                  <a href={post.url}>{post.title}</a>
                  <a href={post.url}> ({new URL(post.url).hostname})</a>
                  <br />
                  <Opentext
                    text={`${post.descendants} points by ${
                      post.by && post.time
                    } ago | `}
                  />
                  <Opentext text={`${post.score} `} />
                  <a href={`/comment?id=${post.id}`}>
                    <Opentext text="comments" />
                  </a>
                  <div>
                    <Opentext text={`${post.score} `} />
                  </div>
                </li>
              </>
            )
        )}
      ></OlList>
      <div
        className="moreLink"
        onClick={() =>
          setPageItems({ start: page.start + 30, end: page.end + 30 })
        }
      >
        <Opentext text="More" />
      </div>
    </>
  );
};

export default IndividualPosts;
