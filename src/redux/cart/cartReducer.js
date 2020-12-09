import CartActionType from './cartActionType.js';
import { addItemToCart , removeItemFromCart } from './cart.utils.js';


const INITIAL_STATE = {
	hidden : true,
	cartItems : []
}

const CartReducer = (state = INITIAL_STATE , action) => {
	switch(action.type) {
		case CartActionType.TOGGLE_CART :
			return {
				...state,
				hidden : !state.hidden
			}
		case CartActionType.ADD_ITEM : 
			return {
				...state,
				cartItems : addItemToCart(state.cartItems , action.payload)
			}
		case CartActionType.REMOVE_CART_ITEM : 
			return {
				...state,
				cartItems : removeItemFromCart(state.cartItems, action.payload)
			}
		case CartActionType.CLEAR_ITEM_FROM_CART :
			return {
				...state,
				cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			}
		default : return state ;
	}
}

export default CartReducer;