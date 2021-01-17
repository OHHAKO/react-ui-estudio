import styles from "./scroll-sticky.module.scss";

import React, { useEffect, useRef, useState } from "react";

export default function Parent(): React.ReactElement {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    const gap = 55;
    if (ref.current && ref.current.getBoundingClientRect().top <= gap) setSticky(true);
    console.log(ref.current.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className={styles.root}>
      <h1>IEEE &apos;Code of Ethics&apos;</h1>
      <h3>PREAMBLE </h3>
      <div>
        <div className={`${styles.sticky_wrapper} ${isSticky ? styles.sticky : ""}`} ref={ref}>
          sticky가 적용된 블럭 내부 컨텐츠
        </div>
        <p>
          The short version of the code summarizes aspirations at a high level of the abstraction;
          the clauses that are included in the full version give examples and details of how these
          aspirations change the way we act as software engineering professionals. Without the
          aspirations, the details can become legalistic and tedious; without the details, the
          aspirations can become high sounding but empty; together, the aspirations and the details
          form a cohesive code. Software engineers shall commit themselves to making the analysis,
          specification, design, development, testing and maintenance of software a beneficial and
          respected profession. In accordance with their commitment to the health, safety and
          welfare of the public, software engineers shall adhere to the following Eight Principles:
        </p>
        <ul>
          <li>1. PUBLIC – Software engineers shall act consistently with the public interest.</li>
          <li>
            2. CLIENT AND EMPLOYER – Software engineers shall act in a manner that is in the best
            interests of their client and employer consistent with the public interest.
          </li>
          <li>
            3. PRODUCT – Software engineers shall ensure that their products and related
            modifications meet the highest professional standards possible.
          </li>
          <li>
            4. JUDGMENT – Software engineers shall maintain integrity and independence in their
            professional judgment.
          </li>
          <li>
            5. MANAGEMENT – Software engineering managers and leaders shall subscribe to and promote
            an ethical approach to the management of software development and maintenance.
          </li>
          <li>
            6. PROFESSION – Software engineers shall advance the integrity and reputation of the
            profession consistent with the public interest.
          </li>
          <li>
            7. COLLEAGUES – Software engineers shall be fair to and supportive of their colleagues.
          </li>
          <li>
            8. SELF – Software engineers shall participate in lifelong learning regarding the
            practice of their profession and shall promote an ethical approach to the practice of
            the profession.
          </li>
        </ul>
      </div>

      <div>
        <h2>Full Version</h2>
        <h3>PREAMBLE </h3>
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
          The Code contains eight Principles related to the behavior of and decisions made by
          professional software engineers, including practitioners, educators, managers, supervisors
          and policy makers, as well as trainees and students of the profession. The Principles
          identify the ethically responsible relationships in which individuals, groups, and
          organizations participate and the primary obligations within these relationships. The
          Clauses of each Principle are illustrations of some of the obligations included in these
          relationships. These obligations are founded in the software engineer’s humanity, in
          special care owed to people affected by the work of software engineers, and the unique
          elements of the practice of software engineering. The Code prescribes these as obligations
          of anyone claiming to be or aspiring to be a software engineer.
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
        <p>
          The dynamic and demanding context of software engineering requires a code that is
          adaptable and relevant to new situations as they occur. However, even in this generality,
          the Code provides support for software engineers and managers of software engineers who
          need to take positive action in a specific case by documenting the ethical stance of the
          profession. The Code provides an ethical foundation to which individuals within teams and
          the team as a whole can appeal. The Code helps to define those actions that are ethically
          improper to request of a software engineer or teams of software engineers.
        </p>
        <p>
          The Code is not simply for adjudicating the nature of questionable acts; it also has an
          important educational function. As this Code expresses the consensus of the profession on
          ethical issues, it is a means to educate both the public and aspiring professionals about
          the ethical obligations of all software engineers.
        </p>
      </div>
    </div>
  );
}
