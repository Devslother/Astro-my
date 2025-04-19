import * as React from "react";
import type { SVGProps } from "react";
const Blog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 60 63"
    {...props}
  >
    <g filter="url(#Property_1=Blog_svg__a)">
      <rect
        width={35.07}
        height={39}
        x={12.465}
        y={12}
        fill="#CECECE"
        fillOpacity={0.6}
        rx={8}
      />
    </g>
    <path
      fill="#FEFEFE"
      stroke="#EBECEC"
      strokeWidth={0.801}
      d="M10.4 25.455c0-3.062.001-5.334.148-7.133.147-1.794.437-3.083.998-4.184a10.5 10.5 0 0 1 4.592-4.592c1.101-.56 2.39-.851 4.184-.998 1.8-.147 4.071-.147 7.133-.147h5.09c3.062 0 5.334 0 7.133.147 1.794.147 3.083.437 4.184.998a10.5 10.5 0 0 1 4.592 4.592c.56 1.101.851 2.39.998 4.184.147 1.8.147 4.071.147 7.133v5.09c0 3.062 0 5.334-.147 7.133-.147 1.794-.437 3.083-.998 4.184a10.5 10.5 0 0 1-4.592 4.592c-1.101.56-2.39.851-4.184.998-1.8.147-4.071.147-7.132.147h-5.091c-3.062 0-5.334 0-7.133-.147-1.794-.147-3.083-.437-4.184-.998a10.5 10.5 0 0 1-4.592-4.592c-.56-1.101-.851-2.39-.998-4.184-.147-1.8-.147-4.071-.147-7.132z"
    />
    <path
      stroke="#6C6E6F"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M32.77 16.75H21.691a1.096 1.096 0 0 0-1.096 1.096v20.308a1.096 1.096 0 0 0 1.096 1.096h16.616a1.096 1.096 0 0 0 1.096-1.096v-14.77a.18.18 0 0 0-.05-.122zm0 0a.17.17 0 0 1 .122.05l6.461 6.462zm-.75 6.635c0 .414.335.75.75.75h5.076a.75.75 0 0 0 .53-1.28L33.3 17.776a.75.75 0 0 0-1.28.53z"
    />
    <path
      fill="#6C6E6F"
      d="M33.693 33.539h-7.385a.923.923 0 0 1 0-1.847h7.385a.923.923 0 0 1 0 1.846m0-3.693h-7.385a.923.923 0 0 1 0-1.846h7.385a.923.923 0 0 1 0 1.846"
    />
    <defs>
      <filter
        id="Property_1=Blog_svg__a"
        width={59.07}
        height={63}
        x={0.465}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_8925_64548"
          stdDeviation={6}
        />
      </filter>
    </defs>
  </svg>
);
export default Blog;
