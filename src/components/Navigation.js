import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//state
import { CardContext } from '../contexts/CardContext'

const Navigation = () => {
	const cart = useContext(CardContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
