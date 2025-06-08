import type { SvgProps } from "@/types";

export const Menu = ({ ...props }: SvgProps) => {
	const { width = 24, height = 24, className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3 12H21M3 6H21M3 18H21"
				stroke="#0A0D0F"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
