import type { SvgProps } from "@/types";

export const Download = ({ ...props }: SvgProps) => {
	const { width = 20, height = 20, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 20"
			stroke="none"
			className={className}
		>
			<path
				d="M5 17.5H15M10 2.5V14.1667M10 14.1667L14.1667 10M10 14.1667L5.83333 10"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
