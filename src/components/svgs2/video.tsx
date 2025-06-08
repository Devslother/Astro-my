import type { SvgProps } from "@/types";

export const Video = ({ ...props }: SvgProps) => {
	const { width = 22, height = 14, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 14"
			fill="inherit"
			className={className}
		>
			<path
				d="M16.4544 4.91365L20.2118 2.26394C20.543 2.03036 20.9999 2.26726 20.9999 2.67256V11.136C20.9999 11.5413 20.543 11.7782 20.2118 11.5447L16.4544 8.89495M16.4544 4.91365C16.4477 4.91832 16.4386 4.91358 16.4386 4.90547V3.9043C16.4386 2.24744 15.0955 0.904297 13.4386 0.904297H4C2.34315 0.904297 1 2.24744 1 3.9043V9.9043C1 11.5612 2.34315 12.9043 4 12.9043H13.4386C15.0955 12.9043 16.4386 11.5612 16.4386 9.9043V8.90312C16.4386 8.89501 16.4477 8.89028 16.4544 8.89495M16.4544 4.91365V8.89495"
				fill="none"
				stroke={color}
				stroke-width="1.5"
			/>
		</svg>
	);
};
