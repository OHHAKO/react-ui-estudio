import styles from "./ScrollHiddenBanner.module.scss";
import React, { useEffect, useRef } from "react";

//state와 setInterval 함께 쓰는 방법
export default function Parent(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  let isStop = true;

  const handleScroll = () => {
    if (ref.current && isStop) {
      ref.current.style.display = "none";
      isStop = false;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      console.log("time");
      if (isStop == true && ref.current) {
        ref.current.style.display = "block";
      }
      if (isStop == false) {
        isStop = true;
      }
    }, 600);

    return () => {
      window.removeEventListener("scroll", () => handleScroll), clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.root} ref={ref}>
      스크롤시 hidden 되는 영역
    </div>
  );
}
