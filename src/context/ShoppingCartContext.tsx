import { ReactNode, createContext, useContext } from 'react';

type ShoppingCartProviderProps = {
	children: ReactNode;
};

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

// A provider always needs children and childs
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	return (
		<ShoppingCartContext.Provider value={{}}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
