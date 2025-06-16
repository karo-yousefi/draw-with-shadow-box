import PixelContainer from "./PixelContainer";
import { useState } from 'react';
import { PixelContext } from '../context/pixelContext.js';

const MainComponent = () => {
	const [pixelArray, setPixelArray] = useState([]);
	const [colCount, setColCount] = useState(0);
	const [rowCount, setRowCount] = useState(0);
	const [size, setSize] = useState(0);

	console.log(size);

	const createCode = () => {

	}

	return (
    <PixelContext.Provider value={{ pixelArray, setPixelArray }}>
			<div className="flex flex-col justify-start items-center mt-5 gap-5">
				<div className="flex gap-10 mb-4">
					<select value={colCount} onChange={(e) => setColCount(e.target.value)}>
						<option>0</option>
						<option>4</option>
						<option>8</option>
						<option>12</option>
					</select>

					<select value={rowCount} onChange={(e) => setRowCount(e.target.value)}>
						<option>0</option>
						<option>4</option>
						<option>8</option>
						<option>12</option>
					</select>	
					
					<input type="text" value={size} onChange={(e) => setSize(e.target.value)} className="outline-none border-2 rounded-md px-1" />
				</div>


				<button
					className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm hover:bg-sky-600 transition-all cursor-pointer"
					onClick={createCode}
				>
					Confirm
				</button>

				<PixelContainer col={colCount} row={rowCount} pixelArray={pixelArray} />
			</div>
    </PixelContext.Provider>

	)
}

export default MainComponent