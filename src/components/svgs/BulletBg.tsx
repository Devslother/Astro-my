import * as React from "react";
import type { SVGProps } from "react";
const BulletBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 23"
    {...props}
  >
    <g filter="url(#Black_bg_=Yes_svg__a)">
      <circle
        cx={14}
        cy={11}
        r={3.25}
        stroke="#9D9E9F"
        strokeWidth={3.5}
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="Black_bg_=Yes_svg__a"
        width={27}
        height={27}
        x={0.5}
        y={0.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.283} />
        <feGaussianBlur stdDeviation={0.354} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_7520_11071"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.833} />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend
          in2="effect1_dropShadow_7520_11071"
          result="effect2_dropShadow_7520_11071"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_7520_11071"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default BulletBg;
