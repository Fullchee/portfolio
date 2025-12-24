function SvgLaunch(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width="1em"
			height="1em"
			{...props}
		>
			<svg
				id="icon"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
			>
				<title>Launch</title>
				<path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z" />
				<polygon points="20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2" />
				<rect
					id="_Transparent_Rectangle_"
					data-name="&lt;Transparent Rectangle&gt;"
					fill="none"
					width="32"
					height="32"
				/>
			</svg>

			<path
				data-name="&lt;Transparent Rectangle&gt;"
				fill="none"
				d="M0 0h32v32H0z"
			/>
		</svg>
	);
}

export default SvgLaunch;
