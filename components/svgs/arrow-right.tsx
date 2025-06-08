import type { SvgProps } from "@/types";

export const ArrowRight = ({ ...props }: SvgProps) => {
	const { width = 24, height = 24, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			stroke="none"
			className={className}
		>
			<path
				d="M6 12.25C5.58579 12.25 5.25 12.5858 5.25 13C5.25 13.4142 5.58579 13.75 6 13.75L6 12.25ZM19.5303 13.5303C19.8232 13.2374 19.8232 12.7626 19.5303 12.4697L14.7574 7.6967C14.4645 7.40381 13.9896 7.40381 13.6967 7.6967C13.4038 7.98959 13.4038 8.46447 13.6967 8.75736L17.9393 13L13.6967 17.2426C13.4038 17.5355 13.4038 18.0104 13.6967 18.3033C13.9896 18.5962 14.4645 18.5962 14.7574 18.3033L19.5303 13.5303ZM6 13.75L19 13.75L19 12.25L6 12.25L6 13.75Z"
				fill={color}
			/>
		</svg>
	);
};
