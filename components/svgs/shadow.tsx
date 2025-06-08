import type { SvgProps } from "@/types";

export const Shadow = ({ ...props }: SvgProps) => {
	const { width = 52, height = 57, className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_105_31760)">
				<rect
					x="4.95703"
					y="4.79688"
					width="42.0844"
					height="46.8"
					rx="21.0422"
					fill="#0A0D0F"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_105_31760"
					x="0.157031"
					y="-0.00312519"
					width="51.6845"
					height="56.4008"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.4"
						result="effect1_foregroundBlur_105_31760"
					/>
				</filter>
			</defs>
		</svg>
	);
};
