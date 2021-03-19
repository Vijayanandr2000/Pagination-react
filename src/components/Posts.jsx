import React from "react";

const Posts = ({ posts }) => {
  return (
    <ul className="list-group">
      {posts.map((ele) => (
        <li className="list-group-item">{ele.title}</li>
      ))}
    </ul>
  );
};
export default Posts;
