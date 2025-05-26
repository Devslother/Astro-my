import * as React from "react";
import type { SVGProps } from "react";
const Documentation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="15 15 40 40"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g transform="scale(1.2)">
      <rect
        width={35.07}
        height={39}
        x={12.465}
        y={12}
        fill="#CECECE"
        fillOpacity={0.6}
        rx={8}
      />

      <path
        fill="#FEFEFE"
        stroke="#EBECEC"
        strokeWidth={0.801}
        d="M10.4 25.455c0-3.062.001-5.334.148-7.133.147-1.794.437-3.083.998-4.184a10.5 10.5 0 0 1 4.592-4.592c1.101-.56 2.39-.851 4.184-.998 1.8-.147 4.071-.147 7.133-.147h5.09c3.062 0 5.334 0 7.133.147 1.794.147 3.083.437 4.184.998a10.5 10.5 0 0 1 4.592 4.592c.56 1.101.851 2.39.998 4.184.147 1.8.147 4.071.147 7.133v5.09c0 3.062 0 5.334-.147 7.133-.147 1.794-.437 3.083-.998 4.184a10.5 10.5 0 0 1-4.592 4.592c-1.101.56-2.39.851-4.184.998-1.8.147-4.071.147-7.132.147h-5.091c-3.062 0-5.334 0-7.133-.147-1.794-.147-3.083-.437-4.184-.998a10.5 10.5 0 0 1-4.592-4.592c-.56-1.101-.851-2.39-.998-4.184-.147-1.8-.147-4.071-.147-7.132z"
      />
      <path
        fill="var(--icon-fill, #6C6E6F)"
        stroke="#6C6E6F"
        strokeWidth="0.1"
        d="M33.693 32.77h-7.385a.923.923 0 1 1 0-1.847h7.385a.923.923 0 1 1 0 1.846m0-3.693h-7.385a.923.923 0 1 1 0-1.846h7.385a.923.923 0 1 1 0 1.846M26.308 25.077h7.385a.923.923 0 1 0 0-1.846h-7.385a.923.923 0 1 0 0 1.846"
      />
      <rect
        width={18.5}
        height={22.5}
        x={20.75}
        y={16.75}
        fill="none"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={1.25}
      />
    </g>
  </svg>
);
export default Documentation;
