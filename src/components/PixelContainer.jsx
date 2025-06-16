import { useEffect, useState } from 'react';
import { PixelContext } from '../context/pixelContext.js';
import Pixel from './Pixel';

const PixelContainer = ({ row, col }) => {
  const [pixelArray, setPixelArray] = useState([]);

  // console.log(pixelArray);

  useEffect(() => {
    const newArray = Array(row * col).fill(null).map((_, index) => ({
      id: index,
      row: Math.floor(index / col),
      col: index % col,
      isTransparent: true,
      color: "#ffffff"
    }));
    setPixelArray(newArray);
  }, [row, col]);

  return (
    <PixelContext.Provider value={{ pixelArray, setPixelArray }}>
      <div className="h-[80vh] max-w-4xl">
        <div
          className="grid gap-1 md:gap-[6px]"
          style={{
            gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`
          }}
        >
          {pixelArray.map(pixel => (
            <Pixel key={pixel.id} pixelInfo={pixel} />
          ))}
        </div>
      </div>
    </PixelContext.Provider>
  );
};

export default PixelContainer;