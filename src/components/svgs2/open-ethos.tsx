import type { SvgProps } from "@/types";

export const OpenEthos = ({ ...props }: SvgProps) => {
	const { width = 48, height = 48, className = "" } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 48 48"
			fill="none"
			className={className}
		>
			<rect
				x="0.6"
				y="0.6"
				width="46.8"
				height="46.8"
				rx="23.4"
				fill="#FF5500"
				stroke="url(#paint0_linear_97_24994)"
				stroke-width="1.2"
			/>
			<path
				d="M13.1992 20.856H28.2045C29.9532 20.856 31.3708 19.4384 31.3708 17.6897V17.2767C31.3708 15.7561 30.1381 14.5234 28.6175 14.5234V14.5234C27.0969 14.5234 25.8642 15.7561 25.8642 17.2767V17.8274"
				stroke="#0A0D0F"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
			<path
				d="M13.1992 23.8862H31.2331C32.9818 23.8862 34.3994 25.3038 34.3994 27.0525V27.4655C34.3994 28.9861 33.1667 30.2188 31.6461 30.2188V30.2188"
				stroke="#0A0D0F"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
			<path
				d="M13.1992 27.1887H23.3864C24.907 27.1887 26.1397 28.4214 26.1397 29.942V30.1538C26.1397 31.5574 25.0018 32.6953 23.5982 32.6953V32.6953C22.1946 32.6953 21.0567 31.5574 21.0567 30.1538V29.8223"
				stroke="#0A0D0F"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_97_24994"
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
