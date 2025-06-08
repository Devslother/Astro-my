import type { SvgProps } from "@/types";

export const ZeroTrustCenter = ({ ...props }: SvgProps) => {
	const { width = 26, height = 25, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 25"
			fill="inherit"
			className={className}
		>
			<path
				d="M0.998047 23.6543H25.0021"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M25.0021 9.16872L13.0001 1.6543L0.998047 9.16872H25.0021Z"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.8984 12.5708L12.824 19.7558"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M20.6328 12.5708L20.5583 19.7558"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M5.16211 12.5708L5.08764 19.7558"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
	);
};
