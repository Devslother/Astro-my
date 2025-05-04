import type { SVGProps } from "react";
const Bullet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 23"
    {...props}
  >
    <g filter="url(#Black_bg_=No_svg__a)">
      <circle cx={14} cy={11} r={5} fill="#9d9e9f" />
    </g>
    <circle cx={14} cy={11.001} r={1.667} fill="#0A0D0F" />
    <defs>
      <filter
        id="Black_bg_=No_svg__a"
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
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_7879_19319"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.833} />
        <feGaussianBlur stdDeviation={4.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend
          in2="effect1_dropShadow_7879_19319"
          result="effect2_dropShadow_7879_19319"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_7879_19319"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Bullet;
