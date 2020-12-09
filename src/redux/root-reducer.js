import { combineReducers } from 'redux';

import userReducer from './user/userReducer.js';
import CartReducer from './cart/cartReducer.js';
import directoryReducer from './directory/directory.reducer.js';
import shopReducer from './shop/shop.reducer.js';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key : 'root',
	storage,
	whitelist : ['cart']
}

const  rootReducer = combineReducers ({
	user : userReducer,
	cart : CartReducer,
	directory : directoryReducer,
	shop : shopReducer
});


export default persistReducer(persistConfig , rootReducer);
