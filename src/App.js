import React, { useState } from 'react';
import { Route } from 'react-router-dom';

//state
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';



function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, {...item, dateAdded: Date.now()}]);
	};

	const removeItem = (id) => {
		const newCart = cart.filter(item => {
			return item.dateAdded != id
		})
		setCart([...newCart ])
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value= {{ cart, removeItem }}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route path="/cart" component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
