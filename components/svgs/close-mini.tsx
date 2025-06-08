import type { SvgProps } from "@/types";

export const CloseMini = ({ ...props }: SvgProps) => {
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
				d="M17 7L7 17M7 7L17 17"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
