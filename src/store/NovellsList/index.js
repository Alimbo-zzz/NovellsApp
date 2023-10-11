import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import img_preview_1 from '@images/ui/preview.png';

const NovellsList = createSlice({
	name: 'NovellsList',
	initialState: {
		activeStory: 'nov-1',
		activeData: {},
		novells: [
			{
				id: 'nov-1',
				preview: img_preview_1,
				markHit: true,
				name: "The Hidden World",
				ganre: "Epic Fantasy",
				keys: ["Fantasy", "Young Adult", "Asia", "Adventure", "Love", "Magic"]
			},
			{
				id: 'nov-2',
				preview: img_preview_1,
				markHit: false,
				name: "The Hidden World",
				ganre: "Epic Fantasy",
				keys: ["Fantasy", "Young Adult", "Asia"]
			},
			{
				id: 'nov-3',
				preview: img_preview_1,
				markHit: false,
				name: "The Hidden World",
				ganre: "Epic Fantasy",
				keys: ["Fantasy", "Young Adult", "Asia"]
			}
		]
	},
	reducers: {
	}
})

const { actions, reducer } = NovellsList;


export const { } = actions;
export default reducer;