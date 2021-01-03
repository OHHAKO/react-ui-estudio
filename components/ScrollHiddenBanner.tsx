import styles from "./ScrollHiddenBanner.module.scss";
import React, { useEffect, useRef } from "react";

export default function Parent(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  let isStop = true;

  const handleScroll = () => {
    if (ref.current && isStop) {
      ref.current.style.display = "none";
      isStop = false;
    }
  };

  setInterval(() => {
    if (isStop == true && ref.current) {
      ref.current.style.display = "block";
    }
    if (isStop == false) {
      isStop = true;
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className={styles.root} ref={ref}>
      스크롤시 hidden 되는 영역
    </div>
  );
}
