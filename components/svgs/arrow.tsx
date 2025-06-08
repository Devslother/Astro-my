import type { SvgProps } from "@/types";

export const Arrow = ({ ...props }: SvgProps) => {
	const { width = 20, height = 20, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 20"
			className={className}
		>
			<path
				d="M7.66669 9.5L10.6667 12.5L13.6667 9.5"
				stroke={color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
