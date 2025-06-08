import type { SvgProps } from "@/types";

export const Divider = ({ ...props }: SvgProps) => {
	const { width = 213, height = 2, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 213 2"
			fill="inherit"
			className={className}
		>
			<path d="M1 1H212" stroke="#EBECEC" stroke-linecap="round" />
		</svg>
	);
};
