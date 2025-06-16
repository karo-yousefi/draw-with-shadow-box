import { useRef, useState } from 'react';
import { usePixelContext } from "../context/pixelContext.js";

const Pixel = ({ pixelInfo }) => {
	const { setPixelArray } = usePixelContext();
	const colorRef = useRef(null);

	const updateColor = (color) => {
		setPixelArray(prev =>
			prev.map(pixel => 
				pixel.id === pixelInfo.id ?
					{ ...pixel, color } :
					pixel
			)
		);

		pixelInfo.color = color;
	};

	const handleLeftClick = () => { // isTransparent: false and open the color selector menu
		if (colorRef.current) {

			if (pixelInfo.isTransparent) {
				setPixelArray(perv => 
					perv.map(pixel => 
						pixel.id === pixelInfo.id ?
							{ ...pixel, isTransparent: false } :
							pixel
					)
				);
			}
      colorRef.current.click();
    }
	}

	const handleRightClick = () => { // Toggle isTransparent on and off and change the color back to the default color of #ffffff
		setPixelArray(perv => 
			perv.map(pixel =>
				pixel.id === pixelInfo.id ?
				{ ...pixel, color: "#ffffff" ,isTransparent: !pixelInfo.isTransparent } :
				pixel
			)
		);
	};

	return (
		<>
		 	<input
        ref={colorRef}
        type="color"
        className="hidden"
        onInput={(e) => updateColor(e.target.value)}
      />

			<div
				className="w-8 h-8 rounded-md md:w-15 md:h-15 md:rounded-2xl cursor-pointer border border-slate-400 flex justify-center items-center shadow-md/20 
				hover:shadow-none hover:translate-y-[2px] hover:translate-x-[1px] hover:border-slate-800 transition-all duration-[250ms] select-none overflow-hidden"
				onClick={handleLeftClick}
				onContextMenu ={(e) => {
					e.preventDefault();
					handleRightClick();
				}}
				style={{ backgroundColor: pixelInfo.isTransparent ? "transparent" : pixelInfo.color }}
			>
				{
					pixelInfo.isTransparent ?
						<img src="/transparent.png" className="object-cover w-full h-full rounded-md md:rounded-2xl scale-200" /> :
						null
				}
			</div>

		</>
	);
};

export default Pixel;
