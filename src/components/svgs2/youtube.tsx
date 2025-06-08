import type { SvgProps } from "@/types";

export const Youtube = ({ ...props }: SvgProps) => {
	const { width = 21, height = 20, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 21 20"
			stroke="none"
			className={className}
		>
			<g clip-path="url(#clip0_7534_1869)">
				<path
					d="M20.25 6C20 4.375 19.25 3.25 17.5 3C14.75 2.5 10.5 2.5 10.5 2.5C10.5 2.5 6.25 2.5 3.5 3C1.75 3.25 0.875 4.375 0.75 6C0.5 7.625 0.5 10 0.5 10C0.5 10 0.5 12.375 0.75 14C1 15.625 1.75 16.75 3.5 17C6.25 17.5 10.5 17.5 10.5 17.5C10.5 17.5 14.75 17.5 17.5 17C19.25 16.625 20 15.625 20.25 14C20.5 12.375 20.5 10 20.5 10C20.5 10 20.5 7.625 20.25 6ZM8 13.75V6.25L14.25 10L8 13.75Z"
					fill={color}
				/>
			</g>
			<defs>
				<clip-path id="clip0_7534_1869">
					<rect
						width="20"
						height="20"
						fill="white"
						transform="translate(0.5)"
					/>
				</clip-path>
			</defs>
		</svg>
	);
};
