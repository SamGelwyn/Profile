import React, { useState, useRef } from "react";

export default function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("");
  const [setBackground, setBackgroundState] = useState("bg-gray-800");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "" : "transform rotate-90"
    );
    setBackgroundState(
      setActive === "active" ? "bg-gray-800" : "bg-gray-700"
    );
  }

  return (
    <div className="flex flex-col p-4 md:w-1/2 w-full">
      <div className={`h-full bg-opacity-40 p-1 rounded transition duration-600 ease hover:bg-gray-700 ${setBackground}`}>
        <button className={`w-full cursor-pointer p-4 flex items-center border-none focus:outline-none transition duration-600 ease`} onClick={toggleAccordion}>
          <div className="flex flex-col w-full text-center">
            <div className="title-font font-medium text-white">
            {props.title}
            </div>
            <div className="text-gray-500 text-sm uppercase">
            {props.company}
            </div>
          </div>
          <Chevron className={`ml-auto transition duration-600 ease ${setRotate}`} width={10} fill={"#777"} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="overflow-auto transition-height ease duration-600"
        >
          <div
            className="leading-relaxed m-6 text-left  "
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
}


function Chevron(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill={props.fill}
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      />
    </svg>
  );
}
