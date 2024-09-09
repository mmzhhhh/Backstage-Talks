import issue8 from "../assests/images/backstagetalks_cover_issue_8.png";
import issue7 from "../assests/images/backstagetalks_cover_issue_7.png";
import issue6 from "../assests/images/backstagetalks_cover_issue_6.png";
import issue5 from "../assests/images/backstagetalks_cover_issue_5.png";
import issue4 from "../assests/images/backstagetalks_cover_issue_4.png";
import issue3 from "../assests/images/backstagetalks_cover_issue_3.png";
import issue2 from "../assests/images/backstagetalks_cover2017.png";
import issue1 from "../assests/images/backstagetalks_cover2016_n.png";
import Issue from "./Issue";
import React, { useCallback, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Main({ onColorChange }) {
  const [activeIssue, setActiveIssue] = useState("issue8");

  const handleLeave = useCallback(
    (origin, destination, direction) => {
      onColorChange(destination.index);
      setActiveIssue(destination.anchor);
    },
    [onColorChange]
  );

  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        onLeave={handleLeave}
        anchors={[
          "issue8",
          "issue7",
          "issue6",
          "issue5",
          "issue4",
          "issue3",
          "issue2",
          "issue1",
        ]}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" data-anchor="issue8">
                <Issue
                  img={issue8}
                  id="issue-8"
                  number={8}
                  available={true}
                  link={
                    "https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r"
                  }
                />
              </div>
              <div className="section" data-anchor="issue7">
                <Issue
                  img={issue7}
                  id="issue-7"
                  number={7}
                  available={true}
                  link={
                    "https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r"
                  }
                />
              </div>
              <div className="section" data-anchor="issue6">
                <Issue
                  img={issue6}
                  id="issue-6"
                  number={6}
                  available={true}
                  link={
                    "https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r"
                  }
                />
              </div>
              <div className="section" data-anchor="issue5">
                <Issue
                  img={issue5}
                  id="issue-5"
                  number={5}
                  available={true}
                  link={
                    "https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r"
                  }
                />
              </div>
              <div className="section" data-anchor="issue4">
                <Issue img={issue4} id="issue-4" number={4} available={false} />
              </div>
              <div className="section" data-anchor="issue3">
                <Issue img={issue3} id="issue-3" number={3} available={false} />
              </div>
              <div className="section" data-anchor="issue2">
                <Issue img={issue2} id="issue-2" number={2} available={true} />
              </div>
              <div className="section" data-anchor="issue1">
                <Issue
                  img={issue1}
                  id="issue-1"
                  number={1}
                  available={false}
                  link={
                    "https://brot.sk/products/backstage-talks-2?_pos=1&_sid=1c5730cc8&_ss=r"
                  }
                />
                <div className="md:hidden">
                <div className=" md:hidden items-center justify-center text-center w-full">
                  <p className=" font-bold text-lg">
                    Backstage Talks is a magazine of casual, but in depth
                    dialogues on design and business. Our decisions shape and
                    influence this complex world—to have a chance to make the
                    right ones, we need to talk.
                  </p>
                  <small className=" text-sm">
                    &copy;&nbsp;2024&nbsp;
                    <a
                      href="https://milk.sk/"
                      target="_blank"
                      rel="noreferrer"
                      className=" underline hover:no-underline"
                    >
                      Published by studio Milk
                    </a>
                  </small>
                  <br />
                  <br />
                  <p className=" mb-4 underline font-bold text-md">
                    <a href="https://backstagetalks.com/privacy-policy.php">
                      Privacy Policy
                    </a>
                  </p>
                  {/* contact */}
                  <p className="mt-4 text-md font-bold underline">
                    <a href="mailto:info@backstagetalks.com">
                      info@backstagetalks.com
                    </a>
                  </p>
                </div>
              </div>
              </div>
              <div className="md:hidden">
                <div className=" md:hidden items-center justify-center text-center max-w-[400px]">
                  <p className=" font-bold text-lg">
                    Backstage Talks is a magazine of casual, but in depth
                    dialogues on design and business. Our decisions shape and
                    influence this complex world—to have a chance to make the
                    right ones, we need to talk.
                  </p>
                  <small className=" text-sm">
                    &copy;&nbsp;2024&nbsp;
                    <a
                      href="https://milk.sk/"
                      target="_blank"
                      rel="noreferrer"
                      className=" underline hover:no-underline"
                    >
                      Published by studio Milk
                    </a>
                  </small>
                  <br />
                  <br />
                  <p className=" mb-4 underline font-bold text-md">
                    <a href="https://backstagetalks.com/privacy-policy.php">
                      Privacy Policy
                    </a>
                  </p>
                  {/* contact */}
                  <p className="text-md font-bold underline">
                    <a href="mailto:info@backstagetalks.com">
                      info@backstagetalks.com
                    </a>
                  </p>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <ul
        id="menu"
        className="hidden md:block md:fixed right-4 bottom-4 text-sm leading-6"
      >
        {[
          { anchor: "issue8", label: "Issue #8" },
          { anchor: "issue7", label: "Issue #7" },
          { anchor: "issue6", label: "Issue #6" },
          { anchor: "issue5", label: "Issue #5" },
          { anchor: "issue4", label: "Issue #4" },
          { anchor: "issue3", label: "Issue #3" },
          { anchor: "issue2", label: "Issue #2" },
          { anchor: "issue1", label: "Issue #1" },
        ].map((item) => (
          <li key={item.anchor} data-menuanchor={item.anchor}>
            <a
              href={`#${item.anchor}`}
              className={`hover:underline ${
                activeIssue === item.anchor ? "font-bold" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
