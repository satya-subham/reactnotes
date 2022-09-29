import React, { useState, useEffect } from "react";
import axios from "axios";

export function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [num, setNum] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
          setPosts([posts, ...response.data]);
          setFilteredData([posts, ...response.data])
      })
  }, []);

  // =============================== FETCH DATA FILTER

  useEffect(() => {
    const newData = posts.filter((data) => {
      if (data.title) {
        return data.title.includes(search);
      }
    });
    setFilteredData(newData);
  }, [search]);

  // ===================================DATA FETCH BY BUTTON CLICK
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  const addId = () => {
    setId(num);
  };

  return (
    <>
      <h1>DataFetch filtered</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredData.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ))}

      {/* <h1>DataFetch</h1>
      {
        posts.map((post) => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))
    } */}

      <h1>DataFetch by button click</h1>
      <div>
        <input
          type="text"
          defaultValue={id}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={addId}>click</button>
        <h1>{post.title}</h1>
        <h3> id = {id}</h3>
        <p>{post.body}</p>
      </div>
    </>
  );
}
