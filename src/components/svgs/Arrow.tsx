import * as React from "react";
import type { SVGProps } from "react";

const SvgArrow = (props: SVGProps<SVGSVGElement>) => {
  const { width = "1em", height = "1em", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={width}
      height={height}
      {...rest}
    >
      <path
        fill="var(--icon-fill,#9D9E9F)"
        d="M6 11.813a.75.75 0 0 0 0 1.5zm13.53 1.28a.75.75 0 0 0 0-1.06l-4.773-4.774a.75.75 0 0 0-1.06 1.06l4.242 4.243-4.242 4.243a.75.75 0 0 0 1.06 1.06zM6 13.313h13v-1.5H6z"
      />
    </svg>
  );
};
export default SvgArrow;
