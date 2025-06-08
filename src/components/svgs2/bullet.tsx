import type { SvgProps } from "@/types";

export const Bullet = ({ ...props }: SvgProps) => {
	const { width = 11, height = 12, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 11 12"
			stroke="none"
			className={className}
		>
			<circle cx="5.16602" cy="6" r="5.16602" fill={color} />
			<circle cx="5.16561" cy="6.00081" r="1.72201" fill="#0A0D0F" />
		</svg>
	);
};
