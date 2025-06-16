import { useState } from 'react';
import { usePixelContext } from "../context/pixelContext.js";
import { HexColorPicker } from 'react-colorful';

const Pixel = ({ pixelInfo }) => {
	const { setPixelArray } = usePixelContext();
	const [showPicker, setShowPicker] = useState(false);
	const [tempColor, setTempColor] = useState(pixelInfo.color);

	const applyColor = () => {
		setPixelArray(prev =>
			prev.map(pixel =>
				pixel.id === pixelInfo.id
					? { ...pixel, color: tempColor, isTransparent: false }
					: pixel
			)
		);
		setShowPicker(false);
	};

	const toggleTransparency = () => {
		setPixelArray(prev =>
			prev.map(pixel =>
				pixel.id === pixelInfo.id
					? { ...pixel, isTransparent: !pixelInfo.isTransparent }
					: pixel
			)
		);
	};

	return (
		<div className="relative">
			<div
				className="w-8 h-8 rounded-md md:w-15 md:h-15 md:rounded-2xl cursor-pointer border border-slate-400 flex justify-center items-center shadow-md/20 
				hover:shadow-none hover:translate-y-[2px] hover:translate-x-[1px] hover:border-slate-800 transition-all duration-[250ms] select-none overflow-hidden"
				onClick={() => setShowPicker(true)}
				onContextMenu={(e) => {
					e.preventDefault();
					toggleTransparency();
				}}
				style={{ backgroundColor: pixelInfo.isTransparent ? "transparent" : pixelInfo.color }}
			>
				{pixelInfo.isTransparent ? (
					<img src="/transparent.png" className="object-cover w-full h-full rounded-md md:rounded-2xl scale-200" />
				) : null}
			</div>

			{
				showPicker && (
					<div className="absolute z-10 top-full mt-2 bg-white p-2 rounded-md shadow border border-slate-300">
						<HexColorPicker color={tempColor} onChange={setTempColor} />
						<div className="flex justify-end mt-2">
							<button
								className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm hover:bg-sky-600 transition-all cursor-pointer"
								onClick={applyColor}
							>
								Confirm
							</button>
							<button
								className="ml-2 bg-slate-200 px-2 py-1 rounded-md text-sm hover:bg-slate-300 transition-all cursor-pointer"
								onClick={() => setShowPicker(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default Pixel;
