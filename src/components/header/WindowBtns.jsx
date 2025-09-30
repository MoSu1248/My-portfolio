import React, { useContext, useState } from "react";
import "./WindowBtns.scss";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function WindowBtns() {
  const { setHover } = useContext(AppState);
  const [windowState, setWindowState] = useState(false);

  var elem = document.querySelector("body");

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setWindowState(true);
  }

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setWindowState(false);
  };

  return (
    <div className="header_window-btns">
      <ul>
        <li>
          <svg
            width="12"
            height="12"
            viewBox="0 0 6 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1V0H6V1H0Z" fill="#969595" />
          </svg>
        </li>
        {!windowState ? (
          <li
            onClick={openFullscreen}
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
          >
            <svg
              width="12"
              height="12"
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
        ) : (
          <li
            onClick={closeFullscreen}
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.198 1.8118H4C4.34928 1.20735 4.86686 0.715105 5.49121 0.396594C6.26577 0.00207509 7.27922 0.0020752 9.30972 0.0020752H12.2053C14.2322 0.0020752 15.2456 0.00207509 16.0238 0.396594C16.7042 0.744061 17.258 1.29784 17.6055 1.97829C18 2.75285 18 3.76629 18 5.7968V8.69235C18 10.7192 18 11.7327 17.6055 12.5109C17.2878 13.1343 16.7962 13.6522 16.1903 14.0021V5.80404C16.1903 4.75983 16.1903 4.08661 16.1468 3.57808C16.107 3.08584 16.0383 2.90487 15.993 2.81438C15.8195 2.47388 15.5427 2.19703 15.2022 2.02353C15.1117 1.97829 14.9307 1.90952 14.4385 1.86971C13.6973 1.82838 12.9548 1.81389 12.2125 1.82627L12.198 1.8118Z"
                fill="#969595"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 9.60277C0 7.64375 -1.04256e-07 6.66424 0.381309 5.91212C0.717141 5.25445 1.25237 4.71922 1.91005 4.38338C2.65867 4.00208 3.63818 4.00208 5.6007 4.00208H8.3993C10.3583 4.00208 11.3378 4.00208 12.09 4.38338C12.7476 4.71922 13.2829 5.25445 13.6187 5.91212C14 6.66075 14 7.64026 14 9.60277V12.4014C14 14.3604 14 15.3399 13.6187 16.092C13.2833 16.7502 12.7482 17.2854 12.09 17.6208C11.3413 18.0021 10.3618 18.0021 8.3993 18.0021H5.6007C3.64168 18.0021 2.66217 18.0021 1.91005 17.6208C1.25184 17.2854 0.716693 16.7502 0.381309 16.092C-1.04256e-07 15.3434 0 14.3639 0 12.4014V9.60277ZM5.5972 5.7547H8.3958C9.40505 5.7547 10.0557 5.7547 10.5472 5.79668C11.023 5.83516 11.1979 5.90163 11.2854 5.94535C11.6142 6.11327 11.8818 6.38089 12.0497 6.70972C12.0935 6.79718 12.1599 6.97209 12.1984 7.44785C12.2386 7.94285 12.2404 8.59528 12.2404 9.59928V12.3979C12.2404 13.4071 12.2404 14.0578 12.1984 14.5493C12.1599 15.0251 12.0935 15.2 12.0497 15.2874C11.882 15.6165 11.6145 15.8841 11.2854 16.0518C11.1979 16.0955 11.023 16.162 10.5472 16.2005C10.0522 16.2407 9.3998 16.2425 8.3958 16.2425H5.5972C4.58796 16.2425 3.93728 16.2425 3.44578 16.2005C2.97001 16.162 2.7951 16.0955 2.70765 16.0518C2.37854 15.8841 2.11097 15.6165 1.94328 15.2874C1.89955 15.2 1.83308 15.0251 1.7946 14.5493C1.75466 13.8329 1.74065 13.1153 1.75262 12.3979V9.59928C1.75262 8.59003 1.75262 7.93936 1.7946 7.44785C1.83308 6.97209 1.89955 6.79718 1.94328 6.70972C2.11119 6.38089 2.37881 6.11327 2.70765 5.94535C2.7951 5.90163 2.97001 5.83516 3.44578 5.79668C3.94078 5.7547 4.5932 5.7547 5.5972 5.7547Z"
                fill="#969595"
              />
            </svg>
          </li>
        )}
        <li>
          <svg
            width="12"
            height="12"
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
    </div>
  );
}
