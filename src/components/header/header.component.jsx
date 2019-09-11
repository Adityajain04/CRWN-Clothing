import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import './header.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector.js';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';
import {ReactComponent as Logo} from '../assets/4.3 crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>

		<div className="options">
			<Link to="/shop" className="option" >Shop</Link>
			<Link to="/contact" className="option" >Contact</Link>
			{
				currentUser ? 
					<div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
				:
					<Link to="/signin" className="option" >Sign In</Link>
			}
			<CartIcon />
		</div>
		{
			hidden ? null : <CartDropdown />
		}
	</div>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);