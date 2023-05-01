import PostItem from "components/feed/PostItem";
import useFeed from "hooks/useFeed";
import React from "react";

export default function feed() {
  const { posts } = useFeed();
  return (
    <div>
      <ul style={{ margin: 0, listStyle: "none", padding: "0 16px" }}>
        {posts.map((item, index) => (
          <PostItem key={`${item.id}-${index}`} item={item} />
        ))}
      </ul>
    </div>
  );
}
