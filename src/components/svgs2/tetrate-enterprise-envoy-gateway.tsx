import type { SvgProps } from "@/types";

export const TetrateEnterpriseEnvoyGateway = ({ ...props }: SvgProps) => {
	const { width = 23, height = 26, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 23 26"
			fill="inherit"
			className={className}
		>
			<path
				d="M11.2081 19.8513L6.36621 22.6464L11.2081 25.4416L16.0499 22.6464L11.2081 19.8513Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M16.4297 9.92619V3.89575L11.5879 6.69095V12.722L17.1914 15.9566V21.9872L22.0333 19.192V13.1609L16.4297 9.92619Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M5.6051 22.2067L11.2078 18.9715L16.43 21.9871V16.396L11.2078 13.3812L5.6051 16.6158L0.382812 13.6008V19.1919L5.6051 22.2067Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M5.60554 15.7372L10.8279 12.7222V6.2524L16.0501 3.23685L11.2082 0.44165L5.98596 3.45656V9.9264L0.763672 12.9413L5.60554 15.7372Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M17.1924 3.89575V9.48678L22.0342 12.282V6.69095L17.1924 3.89575Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M5.22468 9.48678V3.89575L0.382812 6.69095V12.282L5.22468 9.48678Z"
				fill={color}
				stroke="none"
			/>
		</svg>
	);
};
