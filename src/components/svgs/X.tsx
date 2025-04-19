import * as React from "react";
import type { SVGProps } from "react";
const SvgProperty1X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#0A0D0F"
      fillRule="evenodd"
      d="M1.092 1.546C.983 1.76.983 2.04.983 2.6v14.8c0 .56 0 .84.11 1.054a1 1 0 0 0 .436.437c.214.109.494.109 1.054.109h14.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.11-.214.11-.494.11-1.054V2.6c0-.56 0-.84-.11-1.054a1 1 0 0 0-.437-.437C18.224 1 17.943 1 17.383 1h-14.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437m14.31 3.017h-1.84L10.53 8.076 7.91 4.563H4.112l4.537 6.016-4.3 4.983H6.19l3.319-3.845 2.9 3.845h3.703l-4.73-6.34zm-1.466 9.883h-1.02L6.262 5.62h1.094z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProperty1X;
