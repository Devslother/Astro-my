import * as React from "react";
import type { SVGProps } from "react";
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#9D9E9F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 12.5 3-3 3 3"
    />
  </svg>
);
export default ArrowUp;
