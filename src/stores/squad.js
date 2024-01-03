import { defineStore } from 'pinia';

export const useSquadStore = defineStore({
	id: 'squad',

	state: () => ({
		squadItem: null,
	}),

	actions: {
		setSquadItem(item) {
			this.squadItem = item;
		},
	},
});
