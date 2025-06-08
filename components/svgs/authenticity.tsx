import type { SvgProps } from "@/types";

export const Authenticity = ({ ...props }: SvgProps) => {
	const { width = 48, height = 48, className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 48 48"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.480886 24C0.480886 11.0108 11.0108 0.480886 24 0.480886C36.9892 0.480886 47.5191 11.0108 47.5191 24C47.5191 36.9892 36.9892 47.5191 24 47.5191C11.0108 47.5191 0.480886 36.9892 0.480886 24Z"
				fill="#FFCB5C"
				stroke="url(#paint0_linear_100_2733)"
				stroke-width="0.961773"
			/>
			<path
				d="M31.4314 27.202C31.4314 25.2318 30.6487 23.3423 29.2556 21.9492C27.8625 20.5561 25.973 19.7734 24.0028 19.7734C22.0326 19.7734 20.1431 20.5561 18.75 21.9492C17.3569 23.3423 16.5742 25.2318 16.5742 27.202"
				stroke="#0A0D0F"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
			<path
				d="M35.2008 27.2C35.2008 24.2296 34.0208 21.3808 31.9204 19.2804C29.82 17.18 26.9712 16 24.0008 16C21.0304 16 18.1816 17.18 16.0812 19.2804C13.9808 21.3808 12.8008 24.2296 12.8008 27.2"
				stroke="#0A0D0F"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_100_2733"
					x1="24"
					y1="0"
					x2="24"
					y2="48"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#3B3D3F" stop-opacity="0.2" />
					<stop offset="1" stop-color="#3B3D3F" stop-opacity="0.4" />
				</linearGradient>
			</defs>
		</svg>
	);
};
