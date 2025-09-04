import React from "react";
import "./AboutContainerBtns.scss";

export default function AboutContainerBtns() {
  return (
    <ul className="about__btn-list">
      <li>
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1V0H6V1H0Z" fill="#969595" />
        </svg>
      </li>
      <li>
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 0H0.5C0.367392 0 0.240215 0.0585317 0.146447 0.162719C0.0526784 0.266905 0 0.408213 0 0.555556V4.44444C0 4.59179 0.0526784 4.73309 0.146447 4.83728C0.240215 4.94147 0.367392 5 0.5 5H5.5C5.63261 5 5.75979 4.94147 5.85355 4.83728C5.94732 4.73309 6 4.59179 6 4.44444V0.555556C6 0.408213 5.94732 0.266905 5.85355 0.162719C5.75979 0.0585317 5.63261 0 5.5 0ZM0.5 4.44444V0.555556H5.5V4.44444H0.5Z"
            fill="#969595"
          />
        </svg>
      </li>
      <li>
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.45595 6L3.00193 3.5437L0.54791 6L0 5.45244L2.45788 3L0 0.547558L0.54791 0L3.00193 2.4563L5.45595 0.00385613L6 0.547558L3.54598 3L6 5.45244L5.45595 6Z"
            fill="#969595"
          />
        </svg>
      </li>
    </ul>
  );
}
