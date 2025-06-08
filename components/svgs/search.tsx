import type { SvgProps } from "@/types";

export const Search = ({ ...props }: SvgProps) => {
	const { width = 16, height = 16, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			className={className}
		>
			<path
				d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
				stroke="#0A0D0F"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15.0002 15L10.5352 10.535"
				stroke="#0A0D0F"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
