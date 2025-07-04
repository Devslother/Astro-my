import type { SvgProps } from "@/types";

export const Whitepapers = ({ ...props }: SvgProps) => {
	const { width = 22, height = 25, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 25"
			fill="inherit"
			className={className}
		>
			<path
				d="M13.7694 1.4043L13.7688 1.4043L2.69186 1.4043C2.40114 1.4043 2.12233 1.51978 1.91676 1.72535C1.71119 1.93092 1.5957 2.20973 1.5957 2.50045V22.8081C1.5957 23.0989 1.71119 23.3777 1.91676 23.5832C2.12233 23.7888 2.40114 23.9043 2.69186 23.9043H19.3072C19.598 23.9043 19.8768 23.7888 20.0823 23.5832C20.2879 23.3777 20.4034 23.0989 20.4034 22.8081V8.03891V8.03832C20.4034 8.01559 20.399 7.99307 20.3903 7.97206C20.3816 7.95118 20.369 7.93219 20.3531 7.91617L13.7694 1.4043ZM13.7694 1.4043C13.7921 1.40428 13.8146 1.40874 13.8356 1.41743C13.8566 1.42611 13.8757 1.43885 13.8918 1.45492L20.3528 7.91587L13.7694 1.4043Z"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linejoin="round"
			/>
			<path
				d="M7.88867 14.8272C7.88867 16.0309 8.8124 17.0012 9.96005 17.0012H12.302C13.3004 17.0012 14.1121 16.1522 14.1121 15.1071C14.1121 13.9688 13.6176 13.5676 12.8805 13.3063L9.1203 12.0001C8.38319 11.7388 7.88867 11.3376 7.88867 10.1993C7.88867 9.15426 8.70043 8.30518 9.6988 8.30518H12.0408C13.1884 8.30518 14.1121 9.27555 14.1121 10.4792"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10.9922 7.05615V18.2528"
				fill="none"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
