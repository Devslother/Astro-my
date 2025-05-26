import * as React from "react";
import type { SVGProps } from "react";

const SvgClose = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="var(--icon-fill,#ffffff)"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19 5-7 7m-7 7 7-7m0 0L5 5m7 7 7 7"
      />
    </svg>
  );
};
export default SvgClose;
