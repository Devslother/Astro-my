import type { SvgProps } from "@/types";

export const All = ({ ...props }: SvgProps) => {
	const { width = 24, height = 23, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 23"
			fill="inherit"
			className={className}
		>
			<rect
				x="1.5293"
				y="0.836914"
				width="9"
				height="9"
				rx="2"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				x="1.5293"
				y="12.4722"
				width="9"
				height="9"
				rx="2"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				x="13.4707"
				y="0.836914"
				width="9"
				height="9"
				rx="2"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				x="13.4707"
				y="12.4722"
				width="9"
				height="9"
				rx="2"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
