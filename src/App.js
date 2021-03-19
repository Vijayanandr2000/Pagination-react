import React, { useState, useEffect } from "react";
import Page from "./components/Page";
import Posts from "./components/Posts";

const App = () => {
  const [post, setPost] = useState([]);
  const [initial, setInitial] = useState(1);
  const [page, setpage] = useState(10);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  });
  const first = initial * page;
  const last = first - page;
  const perPage = post.slice(last, first);
  // console.log(first, last, perPage);

  const pageNum = (number) => {
    setInitial(number);
  };
  return (
    <div className="container">
      <h1>PAGINATION (:</h1>
      <Posts posts={perPage} />
      <Page pageNum={pageNum} />
    </div>
  );
};
export default App;
