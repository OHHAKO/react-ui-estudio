// eslint-disable-next-line css-modules/no-unused-class
import styles from "./grab-scroll-y.module.scss";
import React, { useRef, useEffect } from "react";

export default function GrabScroll(): React.ReactElement {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current.scrollTop = 5;
  }, []);

  let pos = { top: 0, y: 0 };

  const mouseMoveHandler = function (e: MouseEvent) {
    const dy = e.clientY - pos.y; //움직인 거리

    container.current.scrollTop = pos.top - dy;
  };

  const mouseUpHandler = function () {
    if (!container.current) return;

    container.current.style.cursor = "grab";
    container.current.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
  };

  const mouseDownHandler = function (e: React.MouseEvent<HTMLElement>) {
    pos = {
      top: container.current.scrollTop,
      y: e.clientY,
    };

    if (!container.current) return;
    container.current.style.cursor = "grabbing";
    container.current.style.userSelect = "none"; //뭐지

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <>
      <div
        ref={container}
        className={styles.container}
        onMouseDown={(event: React.MouseEvent<HTMLElement>) => mouseDownHandler(event)}
      >
        <p>
          Computers have a central and growing role in commerce, industry, government, medicine,
          education, entertainment and society at large. Software engineers are those who contribute
          by direct participation or by teaching, to the analysis, specification, design,
          development, certification, maintenance and testing of software systems. Because of their
          roles in developing software systems, software engineers have significant opportunities to
          do good or cause harm, to enable others to do good or cause harm, or to influence others
          to do good or cause harm. To ensure, as much as possible, that their efforts will be used
          for good, software engineers must commit themselves to making software engineering a
          beneficial and respected profession. In accordance with that commitment, software
          engineers shall adhere to the following Code of Ethics and Professional Practice.
        </p>
        <p>
          It is not intended that the individual parts of the Code be used in isolation to justify
          errors of omission or commission. The list of Principles and Clauses is not exhaustive.
          The Clauses should not be read as separating the acceptable from the unacceptable in
          professional conduct in all practical situations. The Code is not a simple ethical
          algorithm that generates ethical decisions. In some situations standards may be in tension
          with each other or with standards from other sources. These situations require the
          software engineer to use ethical judgment to act in a manner which is most consistent with
          the spirit of the Code of Ethics and Professional Practice, given the circumstances.
        </p>
        <p>
          Ethical tensions can best be addressed by thoughtful consideration of fundamental
          principles, rather than blind reliance on detailed regulations. These Principles should
          influence software engineers to consider broadly who is affected by their work; to examine
          if they and their colleagues are treating other human beings with due respect; to consider
          how the public, if reasonably well informed, would view their decisions; to analyze how
          the least empowered will be affected by their decisions; and to consider whether their
          acts would be judged worthy of the ideal professional working as a software engineer. In
          all these judgments concern for the health, safety and welfare of the public is primary;
          that is, the “Public Interest” is central to this Code.
        </p>
      </div>
    </>
  );
}
