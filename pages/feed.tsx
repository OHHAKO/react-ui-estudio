import useFeed from "hooks/useFeed";
import React from "react";

export default function feed() {
  const { posts } = useFeed();
  return (
    <div>
      <h1> well come to feed! </h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <p>이름: {item.name} </p>
            <p>내용: {item.content} </p>
            <p>날짜: {String(item.publishAt)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
