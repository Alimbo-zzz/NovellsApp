import { configureStore } from '@reduxjs/toolkit';

// slices
import * as NovellsList from './NovellsList';


const reducers = {
	"NovellsList": NovellsList.default,
};

const actions = {
	...NovellsList,
	default: ''
};





export default configureStore({
	reducer: { ...reducers }
})

export {
	reducers,
	actions
};