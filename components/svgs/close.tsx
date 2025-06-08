import type { SvgProps } from "@/types";

export const Close = ({ ...props }: SvgProps) => {
	const { width = 24, height = 24, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			className={className}
			fill="none"
		>
			<path
				d="M19 5L12 12M5 19L12 12M12 12L5 5M12 12L19 19"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
	);
};
