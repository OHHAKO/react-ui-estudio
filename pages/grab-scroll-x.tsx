// eslint-disable-next-line css-modules/no-unused-class
import styles from "./grab-scroll-y.module.scss";
import React, { useRef } from "react";

export default function GrabScroll(): React.ReactElement {
  const container = useRef<HTMLDivElement>(null);

  let pos = { left: 0, x: 0 };

  const mouseMoveHandler = function (e: MouseEvent) {
    const dx = e.clientX - pos.x; //움직인 거리

    container.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    container.current.style.cursor = "grab";
    container.current.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
  };

  const mouseDownHandler = function (e: React.MouseEvent<HTMLElement>) {
    pos = {
      left: container.current.scrollLeft,
      x: e.clientX,
    };

    container.current.style.cursor = "grabbing";
    container.current.style.userSelect = "none"; //뭐지

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <>
      <div
        ref={container}
        className={styles.containerX}
        onMouseDown={(event: React.MouseEvent<HTMLElement>) => mouseDownHandler(event)}
      >
        <ul>
          <li>raid spiraled out of control</li>
          <li>violence engulfed the city</li>
          <li>physical confrontations</li>
          <li>space race was well underway</li>
          <li>series of defeats</li>
          <li>outright</li>
        </ul>
        <ul>
          <li>while the nation mourned</li>
          <li>they threw themselves back into work</li>
          <li>sexism openly prevailed</li>
          <li>The land was for from accomplished</li>
          <li>outer space</li>
        </ul>
        <ul>
          <li>ranks of the civil service</li>
          <li> languished</li>
          <li> his response was sobering</li>
          <li>feminist scholars</li>
          <li>desgregated for several years</li>
          <li>reckon with</li>
        </ul>
        <ul>
          <li>segregation of both race and gender</li>
          <li>advanced computing division relied upon human computers</li>
          <li> unskilled temporary workers</li>
          <li>discriminatory conditions</li>
        </ul>
        <ul>
          <li>
            in todays world darden might have gottn her boss fired or served with an equal
            employment opportunity commission complaint
          </li>
          <li>remarks</li>
        </ul>

        <ul>
          <li>fed up with the enforced return to domesticty</li>
          <li>reproductive right</li>
          <li> was required to advocate for herself.</li>
          <li> activist work</li>
          <li>Negotiating this multidimentional terrain</li>
          <li>additional dimensions of individuals and group indentity</li>
        </ul>
      </div>

      <p>
        Computers have a central and growing role in commerce, industry, government, medicine,
        education, entertainment and society at large. Software engineers are those who contribute
        by direct participation or by teaching, to the analysis, specification, design, development,
        certification, maintenance and testing of software systems. Because of their roles in
        developing software systems, software engineers have significant opportunities to do good or
        cause harm, to enable others to do good or cause harm, or to influence others to do good or
        cause harm. To ensure, as much as possible, that their efforts will be used for good,
        software engineers must commit themselves to making software engineering a beneficial and
        respected profession. In accordance with that commitment, software engineers shall adhere to
        the following Code of Ethics and Professional Practice.
      </p>
      <p>
        It is not intended that the individual parts of the Code be used in isolation to justify
        errors of omission or commission. The list of Principles and Clauses is not exhaustive. The
        Clauses should not be read as separating the acceptable from the unacceptable in
        professional conduct in all practical situations. The Code is not a simple ethical algorithm
        that generates ethical decisions. In some situations standards may be in tension with each
        other or with standards from other sources. These situations require the software engineer
        to use ethical judgment to act in a manner which is most consistent with the spirit of the
        Code of Ethics and Professional Practice, given the circumstances.
      </p>
      <p>
        Ethical tensions can best be addressed by thoughtful consideration of fundamental
        principles, rather than blind reliance on detailed regulations. These Principles should
        influence software engineers to consider broadly who is affected by their work; to examine
        if they and their colleagues are treating other human beings with due respect; to consider
        how the public, if reasonably well informed, would view their decisions; to analyze how the
        least empowered will be affected by their decisions; and to consider whether their acts
        would be judged worthy of the ideal professional working as a software engineer. In all
        these judgments concern for the health, safety and welfare of the public is primary; that
        is, the “Public Interest” is central to this Code.
      </p>
    </>
  );
}
