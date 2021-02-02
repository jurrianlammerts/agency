import React from 'react';

export default function ScrollDown() {
  const handleScrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollTo({ top: pageHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-down" onClick={handleScrollDown}>
      <div className="scroll-down-icon bounce">
        <svg width="34px" height="19px" viewBox="0 0 34 19">
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="next"
              transform="translate(17.000000, 9.500000) rotate(90.000000) translate(-17.000000, -9.500000) translate(8.000000, -7.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M17.56695,15.5777095 L2.20695,0.356087838 C1.69845,-0.130587838 0.88815,-0.116614865 0.39705,0.387304054 C-0.08205,0.878885135 -0.08205,1.65817568 0.39705,2.14968243 L14.8521,16.4745068 L0.39705,30.7993311 C-0.102675,31.2946284 -0.102675,32.0976284 0.39705,32.5929257 C0.896925,33.0881486 1.70715,33.0881486 2.20695,32.5929257 L17.56695,17.3713041 C18.066675,16.8759324 18.066675,16.0730068 17.56695,15.5777095 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
}
