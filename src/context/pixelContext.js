import { createContext, useContext } from "react";


export const PixelContext = createContext(null);

export const usePixelContext = () => {
	const context = useContext(PixelContext);

	if (!context) throw new Error("usePixelContext much be used within PixelContext.Provider");

	return context;
}