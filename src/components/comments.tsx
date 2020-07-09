import React, { useState } from "react";
import List from "../atoms/list";
import Textarea from "../atoms/textarea";
import Opentext from "../atoms/opentext";
import { IndividualPostsProps } from "../utils/types";
import fire from "firebase";

const Comment = (props: IndividualPostsProps) => {

  const [text, handleText] = useState("");

  if (props.posts.length === 0) {
    return <div>Loading...</div>;
  }
  const handleSubmit = () => {
    fire.database().ref("comments").push(text);
    handleText("");
  };
  return (
    <>
      <Textarea
        className="textarea"
        value={text}
        onchange={(e: React.FormEvent<HTMLTextAreaElement> ) => handleText(e.currentTarget.value)}
      />
      <div className="button">
        <button onClick={() => handleSubmit()}>
          <Opentext text="Add Comment" />
        </button>
      </div>
      <div></div>
      <List
        className="postlist"
        data={props.posts.map(
          (post) =>
            post && (
              <>
                <li key={post.id}>{post.text}</li>
              </>
            )
        )}
      ></List>
    </>
  );
};

export default Comment;
