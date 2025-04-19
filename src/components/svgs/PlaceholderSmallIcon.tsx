import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceholderSmallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#9D9E9F"
      fillRule="evenodd"
      d="M10 16.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334m0 1.666a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlaceholderSmallIcon;
