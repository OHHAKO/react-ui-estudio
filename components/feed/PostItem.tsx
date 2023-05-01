import styles from "./PostItem.module.scss";
import { PostItemType } from "hooks/useFeed";
import React from "react";

type Props = {
  item: PostItemType;
};

export default function PostItem({ item }: Props) {
  return (
    <li className={styles.container}>
      <div>
        <div className={styles.profile}>
          <img src={item.profileImage} width={23} height={23} />
          <span>{item.name} </span>
        </div>
        <p className={styles.content}>{item.content} </p>
        <p className={styles.publishAt}>{String(item.publishAt)}</p>
      </div>
      <img src={item.image} width={200} height={100} />
    </li>
  );
}
