import { useState } from "react";
import PixelContainer from "./PixelContainer";

const MainComponent = () => {

	const [colCount, setColCount] = useState(0);
	const [rowCount, setRowCount] = useState(0);

	return (
		<div className="flex flex-col justify-start items-center mt-5">
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
			</div>

			<PixelContainer col={colCount} row={rowCount} />
		</div>
	)
}

export default MainComponent